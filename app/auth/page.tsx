import { LoginForm } from '@/components/ui/LoginForm'
import { ModeToggle } from '@/components/ui/mode-toggle'
import { NextPage } from 'next'
import React from 'react'

const Auth: NextPage = () => {
    return (
        <>
            <div className="absolute top-4 right-4">
                <ModeToggle />
            </div>

            <div className='flex justify-center items-center h-full w-full px-4'>
                <LoginForm />
            </div>
        </>
    )
}

export default Auth