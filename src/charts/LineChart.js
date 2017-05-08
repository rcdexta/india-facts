import React from 'react'
import PropTypes from 'prop-types'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts'
import CustomToolTip from './CustomToolTip'
import CustomValueTick from './CustomValueTick'
import CustomDateTick from './CustomDateTick'

const CustomLineChart = ({ plotBy, label, color, data, syncId, valueType, children, aspectRatio, customToolTip }) => (
  <ResponsiveContainer width="100%" height="100%" aspect={aspectRatio}>
    <LineChart syncId={syncId} data={data} margin={{ top: 40, right: 40, bottom: 20, left: 20 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={plotBy} padding={{ right: 20, left: 20 }} tick={<CustomDateTick />} />
      <YAxis domain={['auto', 'auto']} tick={<CustomValueTick valueType={valueType} />} />
      <Tooltip content={customToolTip || <CustomToolTip valueType={valueType} color={color} />} />
      {children || <Line type="monotone" dataKey={label} style={{ stroke: color }} dot={false} />}
      <Legend iconType="star" />
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
  aspectRatio: PropTypes.number.isRequired,
  syncId: PropTypes.string
}

CustomLineChart.defaultProps = {
  aspectRatio: 2
};

