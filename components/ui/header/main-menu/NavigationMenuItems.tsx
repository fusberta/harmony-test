import Link from "next/link";
import { NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "../../navigation-menu";
import { menuItems, sheetItems } from "./MenuItems";
import clsx from "clsx";

const NavigationMenuItems = ({ isActive, isSheet = false }: { isActive: (path: string) => boolean, isSheet?: boolean }) => {
    const items = isSheet ? sheetItems : menuItems;
    return (
        <NavigationMenuList className={clsx(isSheet ? 'flex flex-col space-y-10' : 'flex')}>
            {items.map((item) => (
                <NavigationMenuItem key={item.href}>
                    <Link href={item.href} legacyBehavior passHref>
                        <NavigationMenuLink
                            className={clsx({
                                'p-4 rounded-lg transition-colors hover:bg-accent hover:text-accent-foreground text-lg': isSheet,
                                [navigationMenuTriggerStyle()]: !isSheet,
                                'bg-accent text-accent-foreground': isActive(item.href),
                            })}
                        >
                            {item.label}
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            ))}
        </NavigationMenuList>
    )
}

export default NavigationMenuItems;