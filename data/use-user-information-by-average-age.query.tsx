import { IUserInformationByAverageAge } from "@ts-types/types"
import { API_ENDPOINTS } from "@utils/api/endpoints"
import { useQuery } from "react-query"
import { getUserInfomationByAverageAgeByName } from "@repositories/user-information-repository"

export const useUserInformationByAverageAgeQuery = (name: string) => {
  return useQuery<IUserInformationByAverageAge[], Error>([API_ENDPOINTS.DATA, name], () => {
    if (!name) return []
    return getUserInfomationByAverageAgeByName(name)
  })
}
