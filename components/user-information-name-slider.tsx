import BaseErrorMessage from "@components/_base-error-message"
import UserInformationNameListLoader from "@components/user-information-name-list-loader"
import { useSelectedInformation } from "@contexts/selected-name.context"
import { useUserInformationNamesQuery } from "@data/use-user-information-names.query"
import { useEffect } from "react"
import UserInformationNameSideBarMenu from "@components/user-information-name-sidebar-menu"

const UserInformationNameSlider: React.FC = () => {
  const { data, isLoading: loading, error } = useUserInformationNamesQuery()
  const { updateSelectedInformation } = useSelectedInformation()
  useEffect(() => {
    if (data) {
      updateSelectedInformation(data[0])
    }
  }, [data])

  if (loading) {
    return (
      <div className="hidden xl:block">
        <div className="w-72 mt-8 px-2">
          <UserInformationNameListLoader />
        </div>
      </div>
    )
  }
  if (error) return <BaseErrorMessage message={error.message} />
  return (
    <aside className="sticky top-22 h-full lg:w-72 hidden xl:block bg-white">
      <div className="max-h-full overflow-hidden">
        <div className="px-5">
          <UserInformationNameSideBarMenu names={data as string[]} className="py-8" />
        </div>
      </div>
    </aside>
  )
}

export default UserInformationNameSlider
