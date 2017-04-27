import React, {Component} from 'react';
import {
  ResponsiveContainer, LineChart, Line, XAxis, YAxis,
  Tooltip, CartesianGrid, Legend,
} from 'recharts';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import Breadcrumb from '../ui/Breadcrumb'
import ResponsiveTable from '../ui/ResponsiveTable'
import Nh from '../helpers/NumberHelper'
import {ChartToolTip} from '../styles/BaseStyles'

const data = require('../data/ProjectedPopulation.json');

const CustomToolTip = ({payload, label}) => {
  if (payload.length == 0) return <span></span>
  return <ChartToolTip>
    <div className='date' style={{backgroundColor: 'gray'}}>{label}</div>
    {payload.map((payload) => {
        return <div>{payload.name}: {Nh.abbr(payload.value)}</div>
      })
    }
  </ChartToolTip>
}

const CustomValueTick = ({x, y, payload}) => {
  return <g transform={`translate(${x},${y})`}>
    <text x={0} y={0} dx={-25} textAnchor="middle" fill="#666" style={{fontSize: 10}}>{payload.value < 100 ? `${payload.value} %` : Nh.abbr(payload.value)}</text>
  </g>
}

const CustomYearTick = ({x, y, payload}) => {
  return <g transform={`translate(${x},${y})`}>
    <text x={0} y={0} dy={10} textAnchor="middle" fill="#666" style={{fontSize: 10}}>{payload.value}</text>
  </g>
}

const headers = ['Year','India', 'China', 'USA', 'World']

const Chart = ({label, stroke, data}) => (
  <ResponsiveContainer width="100%" height="90%" aspect={2}>
    <LineChart
      data={data}
      margin={{top: 40, right: 40, bottom: 20, left: 20}}
    >
      <CartesianGrid strokeDasharray="3 3"/>
      <XAxis dataKey="Year" padding={{right: 20, left: 20}} tick={<CustomYearTick/>}/>
      <YAxis  tick={<CustomValueTick/>}/>
      <Tooltip content={<CustomToolTip/>}/>
      <Line dataKey="India" stroke="green" dot={false}/>
      <Line dataKey="China" stroke="orange"  dot={false}/>
      <Line dataKey="Usa" stroke="blue"  dot={false}/>
      <Legend iconType='star'/>
    </LineChart>
  </ResponsiveContainer>
)

export default class Forecasts extends Component {

  formattedtabularData = () => {
    return data.slice().map((el) => {
      return [el['Year'], Nh.humanize(el['India']), Nh.humanize(el['China']), Nh.humanize(el['Usa']), Nh.humanize(el['World'])]
    })
  }

  renderChart = () => {
    return <Grid fluid>
      <Row>
        <Col xs={12} sm={6}>
          <Chart label='India Population' stroke='green' data={data}/>
        </Col>
      </Row>
    </Grid>
  }

  render() {
    return <div>
      <Breadcrumb label={`Forecast`}/>
      <Tabs>
        <TabList>
          <Tab>Facts</Tab>
          <Tab>Data</Tab>
          <Tab>FAQ</Tab>
        </TabList>

        <TabPanel>
          <h2>{this.renderChart()}</h2>
        </TabPanel>
        <TabPanel>
          <ResponsiveTable data={this.formattedtabularData()} headers={headers}/>
        </TabPanel>
        <TabPanel>
          <h2>FAQ</h2>
        </TabPanel>
      </Tabs>
    </div>
  }
}

