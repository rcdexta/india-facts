import React from 'react'
import PlotValue from './PlotValue'

const CustomValueTick = ({x, y, payload, valueType}) => {
  return <g transform={`translate(${x},${y})`}>
    <text x={0} y={0} dx={-25} textAnchor="middle" fill="#666" style={{fontSize: 10}}>{PlotValue.format(payload.value, valueType)}</text>
  </g>
}

export default CustomValueTick
