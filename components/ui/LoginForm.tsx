'use client'

import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AuthService } from "@/services/auth/auth.service"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { useRouter } from "next/navigation"

interface IFormInput {
    email: string;
    password: string;
}

export function LoginForm() {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<IFormInput>();
    const [serverError, setServerError] = useState<string | null>(null);

    const router = useRouter()

    const onSubmit = async (data: IFormInput) => {
        try {
            const response = await AuthService.login(data);
            console.log("Login successful:", response);
            router.replace('/my-info')
        } catch (err: unknown) {
            if (err instanceof Error && 'graphQLErrors' in err && Array.isArray(err.graphQLErrors) && err.graphQLErrors.length > 0) {
                setServerError("Invalid username or password");
            } else {
                setServerError("Login failed. Please check your credentials and try again.");
            }
            console.error("Login error:", err);
        }
    }
    
    return (
        <Card className="mx-auto max-w-sm">
            <CardHeader>
                <CardTitle className="text-2xl">Login</CardTitle>
                <CardDescription>
                    Enter your email below to login to your account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                {...register("email", { required: "Email is required" })}
                                placeholder="m@example.com"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Password</Label>
                                <Link href="#" className="ml-auto inline-block text-sm underline">
                                    Forgot your password?
                                </Link>
                            </div>
                            <Input
                                id="password"
                                type="password"
                                required {...register("password", { required: "Password is required" })}
                            />
                        </div>
                        {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
                        {serverError && <span className="text-red-500 text-sm">{serverError}</span>}
                        <Button type="submit" className="w-full" disabled={isSubmitting}>
                            {isSubmitting ? "Logging in..." : "Login"}
                        </Button>
                    </div>
                    <div className="mt-4 text-center text-sm">
                        Don&apos;t have an account?{" "}
                        <Link href="#" className="underline">
                            Sign up
                        </Link>
                    </div>
                </form>
            </CardContent>
        </Card>
    )
}
