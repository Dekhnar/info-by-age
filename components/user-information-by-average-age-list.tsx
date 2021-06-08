import { Table } from "@components/_base-table"
import BasePagination from "@components/_base-pagination"
import { useSelectedInformation } from "@contexts/selected-name.context"
import { IUserInformationByAverageAge } from "@ts-types/types"
import React, { useEffect, useState } from "react"

const columns = [
  {
    title: "Value Id",
    dataIndex: "id",
    key: "id",
    align: "left",
    render: (count: number) => <span className="whitespace-nowrap">{count}</span>,
  },
  {
    title: "Count",
    dataIndex: "count",
    key: "count",
    align: "left",
    render: (count: number) => <span className="whitespace-nowrap">{count}</span>,
  },
  {
    title: "Age Average",
    dataIndex: "average",
    key: "average",
    align: "center",
    render: (average: number) => <span className="whitespace-nowrap">{average}</span>,
  },
]

const informationPageLimit = 10

export type UserInformationByAverageAgeListProps = {
  informations: IUserInformationByAverageAge[]
  headerTitle?: string
}

type UserInformationByAverageAgePaginatorInfo = {
  count: number
  currentPage: number
  hasMorePages: boolean
  lastPage: number
  perPage: number
  total: number
}

export const mapPaginatorData = (
  informations: IUserInformationByAverageAge[],
  options: { first: number; page: number } = {
    first: informationPageLimit,
    page: 1,
  }
): UserInformationByAverageAgePaginatorInfo & {
  result: IUserInformationByAverageAge[]
} => {
  const total = informations.length
  const { first, page } = options
  const offset = (page - 1) * first
  const currentPageInformations = informations.slice(offset, page * first)
  const lastPage = Math.trunc(total / first)
  return {
    result: currentPageInformations,
    count: currentPageInformations.length,
    currentPage: page,
    hasMorePages: lastPage != page,
    lastPage: lastPage,
    perPage: first,
    total: total,
  }
}
const UserInformationByAverageAgeList: React.FC<UserInformationByAverageAgeListProps> = ({ informations }) => {
  const { selectedInformation } = useSelectedInformation()
  const [paginator, setPagination] = useState(mapPaginatorData(informations))

  const changePage = (current: number) => {
    setPagination(mapPaginatorData(informations, { page: current, first: informationPageLimit }))
  }

  useEffect(() => {
    setPagination(mapPaginatorData(informations))
  }, [informations])

  return (
    <div className="rounded overflow-hidden shadow m-6">
      <h3 className="capitalize text-heading text-center font-semibold px-4 py-3 bg-white border-b border-gray-200">
        {selectedInformation} by Age
      </h3>
      <Table
        //@ts-ignore
        columns={columns}
        //@ts-ignore
        data={paginator.result}
        rowKey="id"
        scroll={{ x: 700 }}
      />
      <div className="flex justify-end items-center">
        <BasePagination
          total={paginator.total}
          current={paginator.currentPage}
          pageSize={paginator.perPage}
          onChange={changePage}
          showLessItems
        />
      </div>
    </div>
  )
}

export default UserInformationByAverageAgeList
