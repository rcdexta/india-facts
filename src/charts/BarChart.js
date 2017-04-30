import React from 'react'
import PropTypes from 'prop-types'
import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis,
  Tooltip, CartesianGrid, Legend,
} from 'recharts';
import CustomToolTip from './CustomToolTip'
import CustomValueTick from './CustomValueTick'
import CustomDateTick from './CustomDateTick'

const CustomBarChart = ({plotBy, label, color, data, syncId, valueType, children}) => (
  <ResponsiveContainer width="100%" height="90%" aspect={2}>
    <BarChart
      data={data}
      syncId={syncId}
      margin={{top: 40, right: 40, bottom: 20, left: 20}}
    >
      <CartesianGrid strokeDasharray="3 3"/>
      <XAxis dataKey="Year" padding={{right: 20, left: 20}} tick={<CustomDateTick/>}/>
      <YAxis tick={<CustomValueTick valueType={valueType}/>}/>
      <Tooltip content={<CustomToolTip valueType={valueType} color={color}/>}/>
      {children ||
        <Bar type="monotone" dataKey={label} fill={color}/>
      }
      <Legend iconType='star'/>
    </BarChart>
  </ResponsiveContainer>
)

export default CustomBarChart

CustomBarChart.PropTypes = {
  plotBy: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  valueType: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  syncId: PropTypes.string
}