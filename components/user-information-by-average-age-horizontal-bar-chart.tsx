import { IUserInformationByAverageAge } from "@ts-types/types"
import ceil from "lodash/ceil"
import { ResponsiveBar } from "@nivo/bar"
import { useInformationByAverageAge } from "@contexts/information-by-average-age.context"
import { useMemo } from "react"
import { sortBy } from "lodash"
import { AgeInterval, useSelectedAgeIntervalFilter } from "@contexts/selected-age-filter.context"
import { useSelectedInformation } from "@contexts/selected-name.context"

const barChart = (informations: IUserInformationByAverageAge[]) => {
  const maxBucketCount = Math.max(...informations.map((b) => b.count))
  const precision = `${maxBucketCount}`.length - 1

  const maxValue = ceil(maxBucketCount, -precision)
  const tickCount = 6
  const ticks = Array.from({ length: tickCount }, (_, i) => Math.round((i * maxValue) / tickCount))

  return { formatValue: ".2s", maxValue, tickCount, ticks }
}

const applyFilter = (informations: IUserInformationByAverageAge[], interval: AgeInterval) => {
  return informations.filter((info) => {
    return info.average >= interval[0] && info.average <= interval[1]
  })
}

const UserInformationByAverageAgeHorizontalBarChart: React.FC = () => {
  const { data: result } = useInformationByAverageAge()
  const { selectedInformation } = useSelectedInformation()
  const { selectedAgeIntervalFilter } = useSelectedAgeIntervalFilter()
  const informations = applyFilter(result as IUserInformationByAverageAge[], selectedAgeIntervalFilter)
  const { formatValue, ticks } = barChart(informations)

  const data = useMemo(
    () =>
      sortBy(
        informations.map((information) => ({ ...information })),
        "count"
      ),
    [informations]
  )

  return (
    <div style={{ height: 500 }}>
      <ResponsiveBar
        keys={["count"]}
        indexBy="id"
        data={data}
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "nivo" }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "#38bcb2",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "#eed312",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "fries",
            },
            id: "dots",
          },
          {
            match: {
              id: "sandwich",
            },
            id: "lines",
          },
        ]}
        borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: selectedInformation,
          legendPosition: "middle",
          legendOffset: 32,
        }}
        axisLeft={{
          format: formatValue,
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "User Count",
          legendPosition: "middle",
          legendOffset: -40,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    </div>
  )
}

export default UserInformationByAverageAgeHorizontalBarChart
