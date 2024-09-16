'use client'
import { usePathname } from "next/navigation";
import { Button } from "../../button";
import { NavigationMenu } from "../../navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "../../sheet";
import { useState } from "react";
import NavigationMenuItems from "./NavigationMenuItems";
import { AlignJustify } from "lucide-react";
import LogoutButton from "../../LogoutButton";

const MainMenu = () => {
    const currentPath = usePathname();
    const [isMenuOpen, setMenuOpen] = useState(false);

    const isActive = (path: string) => currentPath === path;

    return (
        <>
            <Sheet open={isMenuOpen} onOpenChange={setMenuOpen}>
                <SheetTrigger asChild>
                    <Button variant={"ghost"} onClick={() => setMenuOpen(true)} className="xl:hidden">
                        <AlignJustify />
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="p-4 w-64 flex items-center justify-center">
                    <NavigationMenu className="flex flex-col space-y-5">
                        <NavigationMenuItems isActive={isActive} isSheet />
                        <LogoutButton className="w-12 h-12 rounded-full" />
                    </NavigationMenu>
                </SheetContent>
            </Sheet>

            <NavigationMenu className='h-full items-end max-xl:hidden'>
                <NavigationMenuItems isActive={isActive} />
                <LogoutButton className="w-12 h-12 rounded-b-none"/>
            </NavigationMenu>
        </>
    );
}

export default MainMenu;