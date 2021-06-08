import BaseErrorMessage from "@components/_base-error-message"
import BaseLoader from "@components/_base-loader"
import UserInformationByAverageAgeHorizontalBarChart from "@components/user-information-by-average-age-horizontal-bar-chart"
import UserInformationByAverageAgeList from "@components/user-information-by-average-age-list"
import { IUserInformationByAverageAge } from "@ts-types/types"
import { useInformationByAverageAge } from "@contexts/information-by-average-age.context"
import AgeSlider from "@components/age-slider"

const UserInformationNameFeed: React.FC = () => {
  const { data, isLoading, error } = useInformationByAverageAge()
  if (isLoading) return <BaseLoader />
  if (error) return <BaseErrorMessage message={error.message} />
  const informations = data as IUserInformationByAverageAge[]
  return (
    <>
      <UserInformationByAverageAgeList informations={informations} />
      <div className="w-full mb-6">
        <AgeSlider />
        <UserInformationByAverageAgeHorizontalBarChart />
      </div>
    </>
  )
}

export default UserInformationNameFeed
