import React, {Component} from 'react';
import ReactHighmaps from 'react-highcharts/ReactHighmaps'
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import Nh from '../helpers/NumberHelper'
import Breadcrumb from '../ui/Breadcrumb'
import ResponsiveTable from '../ui/ResponsiveTable'

const data = require('../data/LiteracyRate.json');
const mapData = require('../data/MapData.json')

const headers = ['State','Literacy Rate %','Male','Female']

export default class LiteracyRate extends Component {

  config() {

    // Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.
    var data = [
      ['in-py', 86.55],
      ['in-ld', 92.28],
      ['in-wb', 77.08],
      ['in-or', 73.45],
      ['in-br', 63.82],
      ['in-sk', 82.20],
      ['in-ct', 71.04],
      ['in-tn', 80.33],
      ['in-mp', 70.63],
      ['in-2984', 79.31],
      ['in-ga', 87.40],
      ['in-nl', 80.11],
      ['in-mn', 79.85],
      ['in-ar', 66.95],
      ['in-mz', 91.58],
      ['in-tr', 87.75],
      ['in-3464', 87.07],
      ['in-dl', 86.34],
      ['in-hr', 76.64],
      ['in-ch', 86.43],
      ['in-hp', 83.78],
      ['in-jk', 68.74],
      ['in-kl', 93.91],
      ['in-ka', 75.60],
      ['in-dn', 87.07],
      ['in-mh', 82.91],
      ['in-as', 73.18],
      ['in-ap', 66.8],
      ['in-ml', 75.48],
      ['in-pb', 76.68],
      ['in-rj', 67.06],
      ['in-up', 69.72],
      ['in-ut', 79.63],
      ['in-jh', 67.63]
    ];

// Create the chart
    let config = {
      chart: {
        map: mapData,
        width: 800,
        height: 600,
      },

      title: {
        text: 'Statewise Literacy Rate'
      },

      subtitle: {
        text: '(in percentage) Census: 2011'
      },

      mapNavigation: {
        enabled: true,
        buttonOptions: {
          verticalAlign: 'top'
        }
      },

      colors: ['#7cb5ec', '#434348', '#90ed7d', '#f7a35c', '#8085e9',
        '#f15c80', '#e4d354', '#8085e8', '#8d4653', '#91e8e1'],

      colorAxis: {
        min: 50
      },

      series: [{
        data: data,
        name: 'Literacy Rate',
        states: {
          hover: {
            color: 'orange'
          }
        },
        dataLabels: {
          enabled: true,
          format: '{point.name}'
        }
      }]
    }

    return config
  }

  formattedtabularData = () => {
    return data.map((el) => {
      return [el['State'], Nh.per(el['LiteracyRate']), Nh.per(el['Male']), Nh.per(el['Female'])]
    })
  }

  render() {
    return <div>
      <Breadcrumb category='Education' label='Literacy Rate'/>
      <Tabs>
        <TabList>
          <Tab>Facts</Tab>
          <Tab>Data</Tab>
          <Tab>FAQ</Tab>
        </TabList>

        <TabPanel>
          <ReactHighmaps config={this.config()}/>
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

