import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { CartWidget } from "./CartWidget";

function NavBar() {
  return (
    <>
      <div className='bg-neutral-600 text-white grid grid-cols-3 items-center justify-between h-20'>
        <div className='pl-3'>
          <h1 className='uppercase font-semibold text-lg'>Supra Store</h1>
        </div>
        <div className='grid-span-6 text-center'>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink className='bg-neutral-600 font-bold px-3'>
                  Inicio
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className='bg-neutral-600 font-bold'>
                  Categorías
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Celulares & Tablets</NavigationMenuLink>
                  <NavigationMenuLink>Notebooks</NavigationMenuLink>
                  <NavigationMenuLink>Electródomesticos</NavigationMenuLink>
                  <NavigationMenuLink>Weareables</NavigationMenuLink>
                  <NavigationMenuLink>Accesorios</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className='bg-neutral-600 font-bold px-3'>
                  Marcas
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className='bg-neutral-600 hover:bg-red-500 hover:text-red-100 font-bold px-3'>
                  Ofertas del Día
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className='bg-neutral-600 font-bold px-3'>
                  Tarjetas de Regalo
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className='grid-span-4 pr-3 items-center justify-end flex'>
          <CartWidget />
        </div>
      </div>
    </>
  );
}

export default NavBar;
