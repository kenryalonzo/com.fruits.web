import { motion, AnimatePresence } from 'framer-motion'
import { MdOutlineShoppingCart } from 'react-icons/md';

interface ResponsiveMenuProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const ResponsiveMenu = ({ open, setOpen }: ResponsiveMenuProps) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 pt-20 bg-black bg-opacity-50"
          onClick={() => setOpen(false)}
        >
          <motion.div 
            className="bg-white mx-6 rounded-xl shadow-lg overflow-hidden"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
          >
            <ul className="flex flex-col divide-y divide-gray-100">
              <li>
                <a href="/" className="block py-4 px-6 text-lg font-semibold text-gray-800 hover:bg-red-50 hover:text-[#de2c4d]">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="block py-4 px-6 text-lg font-semibold text-gray-800 hover:bg-red-50 hover:text-[#de2c4d]">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="block py-4 px-6 text-lg font-semibold text-gray-800 hover:bg-red-50 hover:text-[#de2c4d]">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="block py-4 px-6 text-lg font-semibold text-gray-800 hover:bg-red-50 hover:text-[#de2c4d]">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="block py-4 px-6 text-lg font-semibold text-gray-800 hover:bg-red-50 hover:text-[#de2c4d]">
                  Contacts
                </a>
              </li>
            </ul>
            <div className="p-4 border-t border-gray-100">
              <button className="flex items-center justify-center w-full py-3 px-4 rounded-lg bg-[#de2c4d] text-white font-semibold hover:bg-[#c8233a] transition-colors">
                <MdOutlineShoppingCart className="mr-2" />
                View Cart
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ResponsiveMenu