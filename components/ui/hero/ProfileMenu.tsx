import React from 'react'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle, profileMenuTriggerStyle } from '../navigation-menu'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react';

const ProfileMenu = () => {
    return (
        <NavigationMenu className='h-full items-end'>
            <NavigationMenuList>
                <NavigationMenuItem className='rounded-t-md overflow-hidden flex flex-nowrap'>
                    <Link href="#" legacyBehavior passHref>
                        <NavigationMenuLink className={profileMenuTriggerStyle()}>
                            Personal
                        </NavigationMenuLink>
                    </Link>
                    <Link href="#" legacyBehavior passHref>
                        <NavigationMenuLink className={profileMenuTriggerStyle()}>
                            Job
                        </NavigationMenuLink>
                    </Link>
                    <Link href="#" legacyBehavior passHref>
                        <NavigationMenuLink className={profileMenuTriggerStyle() + 'bg-accent text-accent-foreground'}>
                            Time Off
                        </NavigationMenuLink>
                    </Link>
                    <Link href="#" legacyBehavior passHref>
                        <NavigationMenuLink className={profileMenuTriggerStyle()}>
                            Emergency
                        </NavigationMenuLink>
                    </Link>
                    <Link href="#" legacyBehavior passHref>
                        <NavigationMenuLink className={profileMenuTriggerStyle()}>
                            Documents
                        </NavigationMenuLink>
                    </Link>
                    <Link href="#" legacyBehavior passHref>
                        <NavigationMenuLink className={profileMenuTriggerStyle()}>
                            Notes
                        </NavigationMenuLink>
                    </Link>
                    <Link href="#" legacyBehavior passHref>
                        <NavigationMenuLink className={profileMenuTriggerStyle()}>
                            Benefits
                        </NavigationMenuLink>
                    </Link>
                    <Link href="#" legacyBehavior passHref>
                        <NavigationMenuLink className={profileMenuTriggerStyle()}>
                            Training
                        </NavigationMenuLink>
                    </Link>
                    <Link href="#" legacyBehavior passHref>
                        <NavigationMenuLink className={profileMenuTriggerStyle()}>
                            Assets
                        </NavigationMenuLink>
                    </Link>
                    <Link href="#" legacyBehavior passHref>
                        <NavigationMenuLink className={profileMenuTriggerStyle()}>
                            More <ChevronDown size={16} className='ml-1'/>
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default ProfileMenu