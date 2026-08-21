import { Link, Outlet } from 'react-router-dom'
import { MenuIcon } from 'lucide-react'
import pmfLogo from '@/assets/media/pmf-white-bg-logo-high-res.png'
import { cn } from '@/lib/utils'
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
import { Toaster } from '@/components/ui/sonner'
import Footer from '@/components/Footer'

function Layout() {
  return (
    <>
      <header className="border-b border-border">
        <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between gap-4 px-6 py-4">
          <div className="flex items-center gap-2">
            <img src={pmfLogo} alt="The Philip Morgan Foundation" className="h-10 w-auto" />
            <span className="text-sm font-medium text-phil-blue">
              The Philip Morgan Foundation
            </span>
          </div>

          {/* Desktop nav */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  render={<Link to="/" />}
                  className={cn(navigationMenuTriggerStyle(), 'text-phil-blue')}
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  render={<Link to="/about" />}
                  className={cn(navigationMenuTriggerStyle(), 'text-phil-blue')}
                >
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  render={<Link to="/events" />}
                  nativeButton={false}
                  className="text-phil-blue"
                >
                  Events
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-48 gap-1">
                    <li>
                      <NavigationMenuLink
                        render={<Link to="/events" />}
                        className="text-phil-blue"
                      >
                        Events
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink
                        render={<span />}
                        aria-disabled="true"
                        className="pointer-events-none text-phil-blue opacity-50"
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
                  className={cn(navigationMenuTriggerStyle(), 'text-phil-blue')}
                >
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  render={<Link to="/donate" />}
                  className="rounded-md bg-phil-blue px-4 py-1.5 text-sm font-medium text-white hover:bg-phil-blue/90 hover:text-white focus:bg-phil-blue/90"
                >
                  Give
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
                  nativeButton={false}
                  className="rounded-lg px-2 py-2 text-sm font-medium text-phil-blue hover:bg-muted"
                >
                  Home
                </SheetClose>
                <SheetClose
                  render={<Link to="/about" />}
                  nativeButton={false}
                  className="rounded-lg px-2 py-2 text-sm font-medium text-phil-blue hover:bg-muted"
                >
                  About
                </SheetClose>
                <SheetClose
                  render={<Link to="/events" />}
                  nativeButton={false}
                  className="rounded-lg px-2 py-2 text-sm font-medium text-phil-blue hover:bg-muted"
                >
                  Events
                </SheetClose>
                <span
                  aria-disabled="true"
                  className="rounded-lg px-2 py-2 pl-6 text-sm font-medium text-phil-blue opacity-50"
                >
                  Cornhole Tournaments
                </span>
                <SheetClose
                  render={<Link to="/contact" />}
                  nativeButton={false}
                  className="rounded-lg px-2 py-2 text-sm font-medium text-phil-blue hover:bg-muted"
                >
                  Contact
                </SheetClose>
                <SheetClose
                  render={<Link to="/donate" />}
                  nativeButton={false}
                  className="mt-1 rounded-md bg-phil-blue px-2 py-2 text-center text-sm font-medium text-white hover:bg-phil-blue/90"
                >
                  Give
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="mx-auto w-full max-w-[1600px]">
        <Outlet />
      </main>

      <Footer />

      <Toaster />
    </>
  )
}

export default Layout
