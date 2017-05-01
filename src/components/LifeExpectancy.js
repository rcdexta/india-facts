import React, {Component} from 'react';
import {
  Line
} from 'recharts';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import Breadcrumb from '../ui/Breadcrumb'
import ResponsiveTable from '../ui/ResponsiveTable'
import Nh from '../helpers/NumberHelper'
import LineChart from '../charts/LineChart'
import ChartValue from '../charts/PlotValue'
import {ChartSmallTitle, ChartToolTip, ChartTitle} from '../styles/BaseStyles'

const femaleData = require('../data/FemaleLifeExpectancy.json');
const maleData = require('../data/MaleLifeExpectancy.json');

const headers = ['Year','India', 'China', 'USA']

const CustomToolTip = ({payload, label}) => {
  if (payload.length === 0) return <span></span>
  return <ChartToolTip>
    <div className='date' style={{backgroundColor: 'gray'}}>{label}</div>
    {payload.map((payload) => {
      return <div>{payload.name}: {Nh.abbr(payload.value)}</div>
    })
    }
  </ChartToolTip>
}

export default class LifeExpectancy extends Component {

  femaleTabularData = () => {
    return femaleData.map((el) => {
      return [el['Year'], Nh.humanize(el['India']), Nh.humanize(el['China']), Nh.humanize(el['Usa'])]
    })
  }

  maleTabularData = () => {
    return maleData.map((el) => {
      return [el['Year'], Nh.humanize(el['India']), Nh.humanize(el['China']), Nh.humanize(el['Usa'])]
    })
  }

  renderChart = () => {
    return <Grid fluid>
      <Row>
        <Col xs={12} sm={6}>
          <ChartSmallTitle>Life expectancy at birth, female (years)</ChartSmallTitle>
          <LineChart plotBy='Year' data={femaleData}
                     valueType={ChartValue.BIG_NUMBER} customToolTip={<CustomToolTip/>}>
            <Line dataKey="India" stroke="green" dot={false}/>
            <Line dataKey="China" stroke="orange"  dot={false}/>
            <Line dataKey="Usa" stroke="blue"  dot={false}/>
          </LineChart>
        </Col>
        <Col xs={12} sm={6}>
          <ChartSmallTitle>Life expectancy at birth, male (years)</ChartSmallTitle>
          <LineChart plotBy='Year' data={maleData}
                     valueType={ChartValue.BIG_NUMBER} customToolTip={<CustomToolTip/>}>
            <Line dataKey="India" stroke="green" dot={false}/>
            <Line dataKey="China" stroke="orange"  dot={false}/>
            <Line dataKey="Usa" stroke="blue"  dot={false}/>
          </LineChart>
        </Col>
      </Row>
    </Grid>
  }

  render() {
    return <div>
      <Breadcrumb  category='Demographics'  label='Life Expectancy'/>
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
          <Row>
            <Col xs={6}>
              <ChartTitle>Life expectancy at birth, female (years)</ChartTitle>
              <ResponsiveTable data={this.femaleTabularData()} headers={headers}/>
            </Col>
            <Col xs={6}>
              <ChartTitle>Life expectancy at birth, male (years)</ChartTitle>
              <ResponsiveTable data={this.maleTabularData()} headers={headers}/>
            </Col>
          </Row>

        </TabPanel>
        <TabPanel>
          <h2>FAQ</h2>
        </TabPanel>
      </Tabs>
    </div>
  }
}

