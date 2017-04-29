import React from 'react'
import PropTypes from 'prop-types'
import {
  ResponsiveContainer, LineChart, Line, XAxis, YAxis,
  Tooltip, CartesianGrid, Legend,
} from 'recharts';
import {ChartToolTip} from '../styles/BaseStyles'
import DateHelper from '../helpers/DateHelper'
import PlotValue from './PlotValue'

const CustomToolTip = ({payload, label, valueType, color}) => {
  if (payload.length == 0) return <span></span>
  return <ChartToolTip>
    <div className='date' style={{backgroundColor: color}}>{DateHelper.format(label)}</div>
    <div>{payload[0].name}: {PlotValue.format(payload[0].value, valueType)}</div>
  </ChartToolTip>
}

const CustomValueTick = ({x, y, payload, valueType}) => {
  return <g transform={`translate(${x},${y})`}>
    <text x={0} y={0} dx={-25} textAnchor="middle" fill="#666" style={{fontSize: 10}}>{PlotValue.format(payload.value, valueType)}</text>
  </g>
}

const CustomDateTick = ({x, y, payload}) => {
  return <g transform={`translate(${x},${y})`}>
    <text x={0} y={0} dy={10} textAnchor="middle" fill="#666" style={{fontSize: 10}}>{DateHelper.format(payload.value)}</text>
  </g>
}

const CustomLineChart = ({plotBy, label, color, data, syncId, valueType, children}) => (
  <ResponsiveContainer width="100%" height="90%" aspect={2}>
    <LineChart
      syncId={syncId}
      data={data}
      margin={{top: 40, right: 40, bottom: 20, left: 20}}
    >
      <CartesianGrid strokeDasharray="3 3"/>
      <XAxis dataKey={plotBy} padding={{right: 20, left: 20}} tick={<CustomDateTick/>}/>
      <YAxis domain={['auto', 'auto']} tick={<CustomValueTick valueType={valueType}/>}/>
      <Tooltip content={<CustomToolTip valueType={valueType} color={color}/>}/>
      {children ||
        <Line type="monotone" dataKey={label} style={{stroke: color}} dot={false}/>
      }
      <Legend iconType='star'/>
    </LineChart>
  </ResponsiveContainer>
)

export default CustomLineChart

CustomLineChart.PropTypes = {
  plotBy: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  valueType: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  syncId: PropTypes.string
}