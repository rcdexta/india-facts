import React, {Component} from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import Breadcrumb from '../ui/Breadcrumb'
import ResponsiveTable from '../ui/ResponsiveTable'
import DateHelper from '../helpers/DateHelper'
import LineChart from '../charts/LineChart'
import ChartValue from '../charts/PlotValue'

class FuelTrend extends Component {

  formattedtabularData = () => {
    return this.props.data.slice().reverse().map((el) => {
      return [DateHelper.format(el.date), `₹ ${el.Delhi}`, `₹ ${el.Kolkatta}`, `₹ ${el.Mumbai}`, `₹ ${el.Chennai}`]
    })
  }

  renderChart = () => {
    const {data} = this.props
    return <Grid fluid>
      <Row>
        <Col xs={12}>
          <ResponsiveTable style={{fontSize: '50%'}} data={this.formattedtabularData().slice(0,1)}
                           headers={['Latest Price', 'Delhi', 'Kolkatta', 'Mumbai', 'Chennai']}/>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6}>
          <LineChart plotBy='date' label='Delhi' color='indigo' data={data} syncId='FuelChart' valueType={ChartValue.RUPEE}/>
        </Col>
        <Col xs={12} sm={6}>
          <LineChart plotBy='date' label='Mumbai' color='brown' data={data} syncId='FuelChart' valueType={ChartValue.RUPEE}/>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6}>
          <LineChart plotBy='date' label='Kolkatta' color='orange' data={data} syncId='FuelChart' valueType={ChartValue.RUPEE}/>
        </Col>
        <Col xs={12} sm={6}>
          <LineChart plotBy='date' label='Chennai' color='green' data={data} syncId='FuelChart' valueType={ChartValue.RUPEE}/>
        </Col>
      </Row>
    </Grid>
  }

  render() {
    return <div>
      <Breadcrumb  category='Energy' label={`${this.props.label} Price`}/>
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
