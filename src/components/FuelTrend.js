import React, {Component} from 'react';
import {
  ResponsiveContainer, LineChart, Line, XAxis, YAxis,
  Tooltip, CartesianGrid, Legend,
} from 'recharts';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import Breadcrumb from '../ui/Breadcrumb'
import ResponsiveTable from '../ui/ResponsiveTable'
import DateHelper from '../helpers/DateHelper'
import {ChartToolTip} from '../styles/BaseStyles'

const CustomToolTip = ({payload, label}) => {
  if (payload.length == 0) return <span></span>
  return <ChartToolTip>
    <div className='date' style={{backgroundColor: payload[0].color}}>{DateHelper.format(label)}</div>
    <div>{payload[0].name}: ₹ {payload[0].value}</div>
  </ChartToolTip>
}

const CustomPriceTick = ({x, y, payload}) => {
  return <g transform={`translate(${x},${y})`}>
    <text x={0} y={0} dx={-15} textAnchor="middle" fill="#666" style={{fontSize: 10}}>₹ {payload.value}</text>
  </g>
}

const CustomDateTick = ({x, y, payload}) => {
  return <g transform={`translate(${x},${y})`}>
    <text x={0} y={0} dy={10} textAnchor="middle" fill="#666" style={{fontSize: 10}}>{DateHelper.format(payload.value)}</text>
  </g>
}

const CityChart = ({city, stroke, data}) => (
  <ResponsiveContainer width="100%" height="90%" aspect={2}>
    <LineChart
      syncId="fuelIndia"
      data={data}
      margin={{top: 40, right: 40, bottom: 20, left: 20}}
    >
      <CartesianGrid strokeDasharray="3 3"/>
      <XAxis dataKey="date" padding={{right: 20, left: 20}} tick={<CustomDateTick/>}/>
      <YAxis domain={['auto', 'auto']} tick={<CustomPriceTick/>}/>
      <Tooltip content={<CustomToolTip/>}/>
      <Line type="monotone" dataKey={city} stroke={stroke} dot={false}/>
      <Legend iconType='star'/>
    </LineChart>
  </ResponsiveContainer>
)

class FuelTrend extends Component {

  formattedtabularData = () => {
    return this.props.data.slice().reverse().map((el) => {
      return [DateHelper.format(el.date), `₹ ${el.Delhi}`, `₹ ${el.Kolkatta}`, `₹ ${el.Mumbai}`, `₹ ${el.Chennai}`]
    })
  }

  renderChart = () => {
    return <Grid fluid>
      <Row>
        <Col xs={12}>
          <ResponsiveTable style={{fontSize: '50%'}} data={this.formattedtabularData().slice(0,1)} headers={['Latest Price', 'Delhi', 'Kolkatta', 'Mumbai', 'Chennai']}/>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6}>
          <CityChart city='Delhi' stroke='blue' data={this.props.data}/>
        </Col>
        <Col xs={12} sm={6}>
          <CityChart city='Mumbai' stroke='brown' data={this.props.data}/>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6}>
          <CityChart city='Kolkatta' stroke='orange' data={this.props.data}/>
        </Col>
        <Col xs={12} sm={6}>
          <CityChart city='Chennai' stroke='green' data={this.props.data}/>
        </Col>
      </Row>
    </Grid>
  }

  render() {
    return <div>
      <Breadcrumb label={`${this.props.label} Price`}/>
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
          <ResponsiveTable data={this.formattedtabularData()} headers={['Updated on', 'Delhi', 'Kolkatta', 'Mumbai', 'Chennai']}/>
        </TabPanel>
        <TabPanel>
          <h2>FAQ</h2>
        </TabPanel>
      </Tabs>
    </div>
  }
}

const dieselData = require('../data/DieselPrice.json');
const petrolData = require('../data/PetrolPrice.json');

export const PetrolTrend = () => {
  return <FuelTrend data={petrolData} label='Petrol'/>
}

export const DieselTrend = () => {
  return <FuelTrend data={dieselData} label='Diesel'/>
}
