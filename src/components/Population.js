import React, {Component} from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import Breadcrumb from '../ui/Breadcrumb'
import ResponsiveTable from '../ui/ResponsiveTable'
import Nh from '../helpers/NumberHelper'
import LineChart from '../charts/LineChart'
import PlotValue from '../charts/PlotValue'
import BarChart from '../charts/BarChart'

const data = require('../data/Population.json');

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
          <BarChart label='India Population' color='green' data={data} valueType={PlotValue.BIG_NUMBER} syncId='Population' />
        </Col>
        <Col xs={12} sm={6}>
          <BarChart label='World Population' color='blue' data={data} valueType={PlotValue.BIG_NUMBER}  syncId='Population' />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6}>
          <LineChart plotBy='Year' label='YearlyGrowth' color='orange' data={data} valueType={PlotValue.PERCENTAGE}/>
        </Col>
        <Col xs={12} sm={6}>
        </Col>
      </Row>
    </Grid>
  }

  render() {
    return <div>
      <Breadcrumb category='Demography' label={`Population`}/>
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

