import { Link, Outlet } from 'react-router-dom'
import { MenuIcon } from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

function Layout() {
  return (
    <>
      <header className="flex items-center justify-between gap-4 border-b border-border px-6 py-4">
        <div className="flex h-10 w-32 items-center justify-center rounded-md bg-muted text-xs font-medium text-muted-foreground">
          Logo
        </div>

        {/* Desktop nav */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                render={<Link to="/" />}
                className={navigationMenuTriggerStyle()}
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                render={<Link to="/about" />}
                className={navigationMenuTriggerStyle()}
              >
                About
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger render={<Link to="/events" />}>
                Events
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-48 gap-1">
                  <li>
                    <NavigationMenuLink render={<Link to="/events" />}>
                      Events
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink
                      render={<span />}
                      aria-disabled="true"
                      className="pointer-events-none opacity-50"
                    >
                      Cornhole Tournaments
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                render={<Link to="/contact" />}
                className={navigationMenuTriggerStyle()}
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                render={<Link to="/donate" />}
                className={navigationMenuTriggerStyle()}
              >
                Donate
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile nav */}
        <Sheet>
          <SheetTrigger
            render={<Button variant="ghost" size="icon" className="md:hidden" />}
          >
            <MenuIcon />
            <span className="sr-only">Open menu</span>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4">
              <SheetClose
                render={<Link to="/" />}
                className="rounded-lg px-2 py-2 text-sm font-medium hover:bg-muted"
              >
                Home
              </SheetClose>
              <SheetClose
                render={<Link to="/about" />}
                className="rounded-lg px-2 py-2 text-sm font-medium hover:bg-muted"
              >
                About
              </SheetClose>
              <SheetClose
                render={<Link to="/events" />}
                className="rounded-lg px-2 py-2 text-sm font-medium hover:bg-muted"
              >
                Events
              </SheetClose>
              <span
                aria-disabled="true"
                className="rounded-lg px-2 py-2 pl-6 text-sm font-medium text-muted-foreground opacity-50"
              >
                Cornhole Tournaments
              </span>
              <SheetClose
                render={<Link to="/contact" />}
                className="rounded-lg px-2 py-2 text-sm font-medium hover:bg-muted"
              >
                Contact
              </SheetClose>
              <SheetClose
                render={<Link to="/donate" />}
                className="rounded-lg px-2 py-2 text-sm font-medium hover:bg-muted"
              >
                Donate
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Layout
