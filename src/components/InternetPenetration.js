import React, {Component} from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import Breadcrumb from '../ui/Breadcrumb'
import ResponsiveTable from '../ui/ResponsiveTable'
import Nh from '../helpers/NumberHelper'
import PlotValue from '../charts/PlotValue'
import {ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import CustomDateTick from '../charts/CustomDateTick'
import CustomValueTick from '../charts/CustomValueTick'
import LineChart from '../charts/LineChart'
const data = require('../data/InternetPenetration.json');
import {ChartToolTip, ChartTitle} from '../styles/BaseStyles'

const headers = ['Year', 'InternetUsers', 'Penetration', 'Total Population', 'Non Users', 'YoY User Change %', 'YoY User Change']

const CustomToolTip = ({payload, label, color}) => {
  if (payload.length === 0) return <span></span>
  return <ChartToolTip>
    <div className='date' style={{backgroundColor: '#8884d8'}}>{label}</div>
    <div>{payload[0].name}: {PlotValue.format(payload[0].value, PlotValue.BIG_NUMBER)}</div>
    <div>{payload[1].name}: {PlotValue.format(payload[1].value, PlotValue.BIG_NUMBER)}</div>
  </ChartToolTip>
}


export default class InternetPenetration extends Component {

  formattedtabularData = () => {
    return data.map((el) => {
      return [el['Year'], Nh.humanize(el['Internet Users']), Nh.per(el['Penetration']), Nh.humanize(el['TotalPopulation']), Nh.humanize(el['Nonusers']),
        Nh.per(el['YoY % of Users']), Nh.humanize(el['YoyUsersChange'])]
    })
  }

  renderChart = () => {
    return <Grid fluid>
      <Row>
        <Col xs={12}>
          <ResponsiveTable style={{fontSize: '50%'}} data={this.formattedtabularData().slice(0, 1)}
                           headers={headers}/>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6}>
          <ChartTitle>Population with access to internet over the years</ChartTitle>
          <ResponsiveContainer width="100%" height="90%" aspect={2}>
            <AreaChart data={data}
                       margin={{top: 40, right: 40, bottom: 20, left: 20}}>
              <XAxis padding={{right: 20}} dataKey="Year" tick={<CustomDateTick/>}/>
              <YAxis padding={{top: 20}} tick={<CustomValueTick valueType={PlotValue.BIG_NUMBER}/>}/>
              <CartesianGrid strokeDasharray="3 3"/>
              <Tooltip content={<CustomToolTip/>}/>
              <Area type='monotone' dataKey='Internet Users' stackId="1" stroke='#8884d8' fill='#8884d8'/>
              <Area type='monotone' dataKey='TotalPopulation' stackId="1" stroke='#82ca9d' fill='#82ca9d'/>
              <Legend iconType='star'/>
            </AreaChart>
          </ResponsiveContainer>
        </Col>
        <Col xs={12} sm={6}>
          <ChartTitle>Year-on-year growth of users accessing internet</ChartTitle>
          <LineChart plotBy='Year' label='YoY % Growth of Users' color='green' data={data} valueType={PlotValue.PERCENTAGE}/>
        </Col>
      </Row>
    </Grid>
  }

  render() {
    return <div>
      <Breadcrumb category='Telecom' label='Internet Penetration'/>
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

