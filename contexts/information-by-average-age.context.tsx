import { useUserInformationByAverageAgeQuery } from "@data/use-user-information-by-average-age.query"
import { IUserInformationByAverageAge } from "@ts-types/types"
import React, { useMemo, useState, useContext } from "react"
import { QueryObserverLoadingResult, UseQueryResult } from "react-query"
import { useSelectedInformation } from "./selected-name.context"

const initialState: QueryObserverLoadingResult<IUserInformationByAverageAge[], Error> = {
  data: undefined,
  dataUpdatedAt: 0,
  error: null,
  errorUpdatedAt: 0,
  failureCount: 0,
  isError: false,
  isFetched: false,
  isFetchedAfterMount: false,
  isFetching: true,
  isIdle: false,
  isLoading: true,
  isLoadingError: false,
  isPlaceholderData: false,
  isPreviousData: false,
  isRefetchError: false,
  isStale: true,
  isSuccess: false,
  refetch: async (_options) => {
    return initialState
  },
  remove: () => {},
  status: "loading",
}

export const InformationByAverageAgeContext =
  React.createContext<UseQueryResult<IUserInformationByAverageAge[], Error>>(initialState)

export const InformationByAverageAgeContextProvider: React.FC = (props) => {
  const { selectedInformation } = useSelectedInformation()
  const result = useUserInformationByAverageAgeQuery(selectedInformation)
  const value = useMemo(() => (!selectedInformation ? initialState : result), [selectedInformation, result])
  return <InformationByAverageAgeContext.Provider value={value} {...props} />
}

export const useInformationByAverageAge = () => {
  const context = useContext(InformationByAverageAgeContext)
  if (context === undefined) {
    throw new Error(`useInformationByAverageAge must be used within a InformationByAverageAgeProvider`)
  }
  return context
}
