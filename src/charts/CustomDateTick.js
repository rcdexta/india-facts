import React from 'react'
import DateHelper from '../helpers/DateHelper'

const CustomDateTick = ({x, y, payload}) => {
  return <g transform={`translate(${x},${y})`}>
    <text x={0} y={0} dy={10} textAnchor="middle" fill="#666" style={{fontSize: 10}}>{DateHelper.format(payload.value)}</text>
  </g>
}


export default CustomDateTick
