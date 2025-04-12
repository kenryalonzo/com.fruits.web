import { useState } from 'react'
import { FaLeaf } from "react-icons/fa"
import { MdMenu, MdOutlineShoppingCart } from "react-icons/md"
import ResponsiveMenu from "./ResponsiveMenu"

const Navbar = () => {
  const [open, setOpen] = useState(false)
  
  const NavbarMenu = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "Products", link: "#" },
    { id: 3, title: "About", link: "#" },
    { id: 4, title: "Shop", link: "#" },
    { id: 5, title: "Contacts", link: "#" },
  ]

  return (
    <>
      <nav className="sticky top-0 z-40 bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo - Espacement amélioré */}
            <div className="flex-shrink-0 flex items-center space-x-1">
              <span className="text-2xl md:text-3xl font-bold text-[#de2c4d]">🧋Fruit</span>
              <span className="text-2xl md:text-3xl font-bold text-[#fb923c]">Store</span>
              <FaLeaf className="text-xl md:text-2xl text-green-500"/>
            </div>

            {/* Desktop Menu - Espacement révisé */}
            <div className="hidden md:flex items-center space-x-10">
              <ul className="flex space-x-8">
                {NavbarMenu.map((item) => (
                  <li key={item.id}>
                    <a 
                      href={item.link} 
                      className="px-1 py-2 text-sm font-medium text-gray-700 hover:text-[#de2c4d] transition-colors relative
                        after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#de2c4d] after:transition-all
                        hover:after:w-full"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="ml-4 flex items-center">
                <button className="p-2 text-gray-600 hover:text-[#de2c4d] transition-colors relative">
                  <MdOutlineShoppingCart className="text-2xl" />
                  <span className="absolute -top-1 -right-1 bg-[#de2c4d] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    3
                  </span>
                </button>
              </div>
            </div>

            {/* Mobile Menu Button - Positionnement amélioré */}
            <div className="md:hidden flex items-center">
              <button 
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-[#de2c4d] focus:outline-none"
                onClick={() => setOpen(!open)}
              >
                <MdMenu className="text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <ResponsiveMenu open={open} setOpen={setOpen} />
    </>
  )
}

export default Navbar