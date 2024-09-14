'use client'
import React from 'react'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '../navigation-menu'
import Link from 'next/link'
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

const MainMenu = () => {
    const currentPath = usePathname();

    const isActive = (path: string) => currentPath === path;
    return (
        <NavigationMenu className='h-full items-end'>
            <NavigationMenuList>
                <NavigationMenuItem className='rounded-t-md overflow-hidden'>
                    <Link href="#" legacyBehavior passHref>
                        <NavigationMenuLink className={clsx(navigationMenuTriggerStyle(), {
                            'bg-accent text-accent-foreground': isActive('/'),
                        })}>
                            Home
                        </NavigationMenuLink>
                    </Link>
                    <Link href="#" legacyBehavior passHref>
                        <NavigationMenuLink className={clsx(navigationMenuTriggerStyle(), {
                            'bg-accent text-accent-foreground': isActive('/my-info'),
                        })}>
                            My Info
                        </NavigationMenuLink>
                    </Link>
                    <Link href="#" legacyBehavior passHref>
                        <NavigationMenuLink className={clsx(navigationMenuTriggerStyle(), {
                            'bg-accent text-accent-foreground': isActive('/people'),
                        })}>
                            People
                        </NavigationMenuLink>
                    </Link>
                    <Link href="#" legacyBehavior passHref>
                        <NavigationMenuLink className={clsx(navigationMenuTriggerStyle(), {
                            'bg-accent text-accent-foreground': isActive('/hiring'),
                        })}>
                            Hiring
                        </NavigationMenuLink>
                    </Link>
                    <Link href="#" legacyBehavior passHref>
                        <NavigationMenuLink className={clsx(navigationMenuTriggerStyle(), {
                            'bg-accent text-accent-foreground': isActive('/reports'),
                        })}>
                            Reports
                        </NavigationMenuLink>
                    </Link>
                    <Link href="#" legacyBehavior passHref>
                        <NavigationMenuLink className={clsx(navigationMenuTriggerStyle(), {
                            'bg-accent text-accent-foreground': isActive('/files'),
                        })}>
                            Files
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default MainMenu