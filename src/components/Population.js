import React, {Component} from 'react';
import {
  ResponsiveContainer, LineChart, Line, XAxis, YAxis,
  Tooltip, CartesianGrid, Legend,
} from 'recharts';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import Breadcrumb from '../ui/Breadcrumb'
import DateHelper from '../helpers/DateHelper'
import ResponsiveTable from '../ui/ResponsiveTable'
import Nh from '../helpers/NumberHelper'
import {ChartToolTip} from '../styles/BaseStyles'

const data = require('../data/Population.json');

const CustomToolTip = ({payload, label}) => {
  if (payload.length == 0) return <span></span>
  return <ChartToolTip>
    <div className='date' style={{backgroundColor: payload[0].color}}>{label}</div>
    <div>{payload[0].name}: {payload[0].value < 100 ? `${payload[0].value} %` : payload[0].value.toLocaleString()}</div>
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

const Chart = ({label, stroke, data}) => (
  <ResponsiveContainer width="100%" height="90%" aspect={2}>
    <LineChart
      data={data}
      syncId="population"
      margin={{top: 40, right: 40, bottom: 20, left: 20}}
    >
      <CartesianGrid strokeDasharray="3 3"/>
      <XAxis dataKey="Year" padding={{right: 20, left: 20}} tick={<CustomYearTick/>}/>
      <YAxis  tick={<CustomValueTick/>}/>
      <Tooltip content={<CustomToolTip/>}/>
      <Line type="monotone" dataKey={label} stroke={stroke}/>
      <Legend iconType='star'/>
    </LineChart>
  </ResponsiveContainer>
)

const headers = ['Year','Population','Yearly Growth','Yearly Change','Median Age','Fertility Rate','Density (P/Km²)','Urban Population','% Share of World Population','World Population','India Global Rank']

export default class Population extends Component {

  formattedtabularData = () => {
    return data.slice().reverse().map((el) => {
      return [el['Year'], Nh.humanize(el['India Population']), Nh.per(el['YearlyGrowth']), Nh.humanize(el['YearlyChange']), el['MedianAge'], Nh.per(el['FertilityRate']), el['DensityPkm'],
        Nh.humanize(el['UrbanPopulation']), Nh.per(el['ShareOfWorldPopulation']), Nh.humanize(el['World Population']), el['IndiaGlobalRank']]
    })
  }

  renderChart = () => {
    return <Grid fluid>
      <Row>
        <Col xs={12}>
          <ResponsiveTable style={{fontSize: '50%'}} data={this.formattedtabularData().slice(0,1)}
                           headers={headers}/>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6}>
          <Chart label='India Population' stroke='green' data={data}/>
        </Col>
        <Col xs={12} sm={6}>
          <Chart label='World Population' stroke='blue' data={data}/>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6}>
          <Chart label='YearlyGrowth' stroke='orange' data={data}/>
        </Col>
        <Col xs={12} sm={6}>
        </Col>
      </Row>
    </Grid>
  }

  render() {
    return <div>
      <Breadcrumb label={`Population`}/>
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

