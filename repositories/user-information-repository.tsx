import { IUserInformationByAverageAge } from "@ts-types/types"
import axios from "@utils/api/http"

export async function getUserInfomationByAverageAgeByName(name: string): Promise<IUserInformationByAverageAge[]> {
  const res = await axios.get(`data/${name}`)
  const values = res?.data?.values as IUserInformationByAverageAge[]
  values.sort((a, b) =>
    typeof a.id == "string" && typeof b.id == "string" ? a.id.localeCompare(b.id) : (a.id as number) - (b.id as number)
  )
  return values
}

export async function getUserInformationNames(): Promise<string[]> {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(null)
    }, 2000)
  })
  const res = await axios.get("/columns")
  const names = res?.data?.columns as string[]
  names.sort()
  return names
}
