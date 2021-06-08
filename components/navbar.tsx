import Drawer from "@components/drawer"
import UserInformationNameSidebarMenu from "@components/user-information-name-sidebar-menu"
import { NavbarIcon } from "@components/navbar-icon"
import { motion } from "framer-motion"
import { useUI } from "@contexts/ui.context"
import { useUserInformationNamesQuery } from "@data/use-user-information-names.query"

const Navbar = () => {
  const { toggleSidebar } = useUI()
  const { data: names } = useUserInformationNamesQuery()
  return (
    <header className="bg-white shadow fixed w-full z-40">
      <nav className="px-5 md:px-8 py-4 flex items-center justify-between">
        <motion.button
          whileTap={{ scale: 0.88 }}
          onClick={toggleSidebar}
          className="flex p-2 h-full items-center justify-center focus:outline-none focus:text-primary lg:hidden"
        >
          <NavbarIcon />
        </motion.button>

        <Drawer>
          <UserInformationNameSidebarMenu names={names as string[]} className="px-5 py-3" />
        </Drawer>
      </nav>
    </header>
  )
}

export default Navbar
