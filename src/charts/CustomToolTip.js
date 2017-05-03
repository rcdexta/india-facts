import React from 'react'
import DateHelper from '../helpers/DateHelper'
import PlotValue from './PlotValue'
import { ChartToolTip } from '../styles/BaseStyles'

const CustomToolTip = ({ payload, label, valueType, color }) => {
  if (payload.length === 0) return <span />
  return (
    <ChartToolTip>
      <div className="date" style={{ backgroundColor: color }}>{DateHelper.format(label)}</div>
      <div>{payload[0].name}: {PlotValue.format(payload[0].value, valueType)}</div>
    </ChartToolTip>
  )
}

export default CustomToolTip
