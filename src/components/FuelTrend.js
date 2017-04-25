import React, {Component} from 'react';
import {
  ResponsiveContainer, LineChart, Line, XAxis, YAxis,
  Tooltip, CartesianGrid, Legend,
} from 'recharts';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import Breadcrumb from '../ui/Breadcrumb'

const data = require('../data/DieselPrice.json');

const CityChart = ({city, stroke}) => (
  <ResponsiveContainer width="100%" height="90%" aspect={2}>
    <LineChart
      syncId="fuelIndia"
      data={data}
      margin={{top: 40, right: 40, bottom: 20, left: 20}}
    >
      <CartesianGrid strokeDasharray="3 3"/>
      <XAxis dataKey="date" padding={{right: 20, left: 20}}/>
      <YAxis domain={['auto', 'auto']} unit="₹"/>
      <Tooltip />
      <Line type="monotone" dataKey={city} stroke={stroke} dot={false}/>
      <Legend iconType='star'/>
    </LineChart>
  </ResponsiveContainer>
)

class FuelTrend extends Component {

  renderChart = () => {
    return <Grid fluid>
      <Row>
        <Col xs={12} sm={6}>
          <CityChart city='Delhi' stroke='blue'/>
        </Col>
        <Col xs={12} sm={6}>
          <CityChart city='Mumbai' stroke='brown'/>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6}>
          <CityChart city='Kolkatta' stroke='orange'/>
        </Col>
        <Col xs={12} sm={6}>
          <CityChart city='Chennai' stroke='green'/>
        </Col>
      </Row>
    </Grid>
  }

  render() {
    return <div>
      <Breadcrumb/>
      <Tabs>
      <TabList>
        <Tab>Visualizations</Tab>
        <Tab>Data</Tab>
        <Tab>FAQ</Tab>
      </TabList>

      <TabPanel>
        <h2>{this.renderChart()}</h2>
      </TabPanel>
      <TabPanel>
        <h2>Tabular Content</h2>
      </TabPanel>
      <TabPanel>
        <h2>FAQ</h2>
      </TabPanel>
    </Tabs>
    </div>
  }
}

export default FuelTrend
