import { API_ENDPOINTS } from "@utils/api/endpoints"
import { useQuery } from "react-query"
import { getUserInformationNames } from "@repositories/user-information-repository"

export const useUserInformationNamesQuery = () => {
  return useQuery<string[], Error>(API_ENDPOINTS.COLUMNS, getUserInformationNames)
}
