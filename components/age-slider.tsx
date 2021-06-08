import { useInformationByAverageAge } from "@contexts/information-by-average-age.context"
import { AgeInterval, useSelectedAgeIntervalFilter } from "@contexts/selected-age-filter.context"
import { makeStyles } from "@material-ui/core/styles"
import { IUserInformationByAverageAge } from "@ts-types/types"
import Slider from "@material-ui/core/Slider"
import { useEffect } from "react"

export const getAgeDomain = (list: IUserInformationByAverageAge[]) => {
  const listAge = list.map((i) => i.average)
  return [Math.min(...listAge), Math.max(...listAge)].map((v) => ({
    value: v,
    label: v,
  }))
}

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
})

const AgeSlider: React.FC = () => {
  const classes = useStyles()
  const { data } = useInformationByAverageAge()
  const { selectedAgeIntervalFilter, updateSelectedAgeIntervalFilter } = useSelectedAgeIntervalFilter()
  const domain = getAgeDomain(data as IUserInformationByAverageAge[])

  const handleAgeSlider = (event: any, newValue: number | number[]) => {
    updateSelectedAgeIntervalFilter(newValue as AgeInterval)
  }

  useEffect(() => {
    updateSelectedAgeIntervalFilter(domain.map((d) => d.value) as AgeInterval)
  }, []);

  const valuetext = (value: number) => `${value} year`
  return (
    <>
    <p>Age Filter</p>
    <div className={classes.root}>
      <Slider
        value={selectedAgeIntervalFilter}
        onChange={handleAgeSlider}
        valueLabelDisplay="auto"
        min={domain[0].value}
        max={domain[1].value}
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        marks={domain}
      />
    </div>
    </>
  )
}

export default AgeSlider
