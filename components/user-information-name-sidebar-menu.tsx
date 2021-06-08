import { useSelectedAgeIntervalFilter } from "@contexts/selected-age-filter.context"
import { useSelectedInformation } from "@contexts/selected-name.context"
import { useUI } from "@contexts/ui.context"
import cn from "classnames"

type UserInformationNameSideBarMenuProps = {
  names: string[]
  className?: string
}

type UserInformationNameSideBarMenuiItemProps = {
  name: string
  className?: string
}

const UserInformationNameSideBarMenuItem: React.FC<UserInformationNameSideBarMenuiItemProps> = (props) => {
  const { className, name } = props
  const { selectedInformation: active, updateSelectedInformation } = useSelectedInformation()
  const { updateSelectedAgeIntervalFilter } = useSelectedAgeIntervalFilter()
  const { displaySidebar, closeSidebar } = useUI()
  const isActive = active === name

  const onClick = () => {
    updateSelectedInformation(name)
    updateSelectedAgeIntervalFilter([0, 0])
    displaySidebar && closeSidebar()
  }

  return (
    <button
      className={cn(
        "flex items-center w-full py-2 text-left outline-none text-gray-600 font-semibold  focus:outline-none focus:ring-0 focus:text-primary",
        isActive ? "text-green-600" : "text-gray-600",
        className || "text-sm"
      )}
      onClick={onClick}
    >
      <span className="capitalize">{name}</span>
    </button>
  )
}

const UserInformationNameSideBarMenu: React.FC<UserInformationNameSideBarMenuProps> = (props) => {
  const { names, className } = props
  return (
    <ul className={cn("text-xs", className)}>
      {names?.map((name) => (
        <UserInformationNameSideBarMenuItem key={name} name={name} />
      ))}
    </ul>
  )
}

export default UserInformationNameSideBarMenu
