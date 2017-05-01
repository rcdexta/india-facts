import React, {Component} from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import Breadcrumb from '../ui/Breadcrumb'
import Nh from '../helpers/NumberHelper'
import {PieChart, Pie, Tooltip, Cell}  from 'recharts';
import PlotValue from '../charts/PlotValue'
import ResponsiveTable from '../ui/ResponsiveTable'

const data = require('../data/MobileMarketShare.json');
const broadbandData = require('../data/BroadbandMarketShare.json');

import {ChartTitle, ChartToolTip} from '../styles/BaseStyles'

const headers = ['Name', 'Subscribed Users']

const COLORS = ['#BA68C8', '#607D8B', '#FF1744', '#009688', '#4CAF50', '#D4E157', '#004D40', '#FF9800', '#212121', '#FFEB3B', '#82B1FF'];

const CustomToolTip = ({payload, label, valueType, color}) => {
  if (payload.length === 0) return <span></span>
  return <ChartToolTip>
    <div>{payload[0].name}: {PlotValue.format(payload[0].value, valueType)} users</div>
  </ChartToolTip>
}

const RADIAN = Math.PI / 180;
const CustomizedLabel = ({cx, cy, midAngle, innerRadius, outerRadius, percent, index, payload}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 2.;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text style={{fontSize: 10}} x={x} y={y} fill="#0F2634" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${payload.name}: ${(percent * 100).toFixed(2)}%`}
    </text>
  );
};

export default class IspMarketShare extends Component {

  formattedtabularData = () => {
    return data.map((el) => {
      return [el['name'], Nh.humanize(el['value'])]
    })
  }

  formattedBroadbandTabularData = () => {
    return broadbandData.map((el) => {
      return [el['name'], Nh.humanize(el['value'])]
    })
  }

  renderChart = () => {
    return <Grid fluid>
      <Row>
        <Col xs={12} sm={6}>
          <ChartTitle>Mobile Service Providers</ChartTitle>
          <PieChart width={800} height={600} onMouseEnter={this.onPieEnter}>
            <Pie
              data={data}
              cx={250}
              innerRadius={50} outerRadius={90}
              cy={200}
              label={<CustomizedLabel/>}
              fill="#8884d8"
            >
              {
                data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
              }
            </Pie>
            <Tooltip content={<CustomToolTip valueType={PlotValue.BIG_NUMBER} color='green'/>}/>
          </PieChart>
        </Col>
        <Col xs={12} sm={6}>
          <ChartTitle>Broadband Service Providers</ChartTitle>
          <PieChart width={800} height={600} onMouseEnter={this.onPieEnter}>
            <Pie
              data={broadbandData}
              cx={250}
              innerRadius={50} outerRadius={90}
              cy={200}
              label={<CustomizedLabel/>}
              fill="#8884d8"
            >
              {
                data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
              }
            </Pie>
            <Tooltip content={<CustomToolTip valueType={PlotValue.BIG_NUMBER} color='green'/>}/>
          </PieChart>
        </Col>
      </Row>
    </Grid>
  }

  render() {
    return <div>
      <Breadcrumb category='Telecom' label='Market Share'/>
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
            <Col xs={12} sm={6}>
              <ChartTitle>Mobile Service Providers</ChartTitle>
              <ResponsiveTable data={this.formattedtabularData()} headers={headers}/>
            </Col>
            <Col xs={12} sm={6}>
              <ChartTitle>Broadband Service Providers</ChartTitle>
              <ResponsiveTable data={this.formattedBroadbandTabularData()} headers={headers}/>
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

