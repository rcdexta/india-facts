import React, {Component} from 'react';
import ReactHighmaps from 'react-highcharts/ReactHighmaps'
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import Breadcrumb from '../ui/Breadcrumb'

const mapData = require('../data/MapData.json')

export default class InternetSpeedStats extends Component {

  config() {

    // Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.
    const data = [
      ['in-py', 1.96],
      ['in-wb', 4.07],
      ['in-or', 5.72],
      ['in-br', 2.39],
      ['in-sk', 1.9],
      ['in-ct', 1.2],
      ['in-tn', 9.62],
      ['in-mp', 6.3],
      ['in-2984', 5.97],
      ['in-ga', 5.62],
      ['in-nl', 2.99],
      ['in-mn', 2.98],
      ['in-ar', 2.99],
      ['in-tr', 5.75],
      ['in-dl', 5.15],
      ['in-hr', 4.52],
      ['in-ch', 86.43],
      ['in-hp', 6.59],
      ['in-jk', 3.99],
      ['in-kl', 6.32],
      ['in-ka', 10.12],
      ['in-mh', 6.67],
      ['in-as', 2.99],
      ['in-ap', 7.18],
      ['in-pb', 2.16],
      ['in-rj', 2.32],
      ['in-up', 5.93],
      ['in-ut', 3.79],
      ['in-jh', 4.61]
    ];

// Create the chart
    let config = {
      chart: {
        map: mapData,
        width: 800,
        height: 600,
      },

      title: {
        text: 'Average Internet Speed across country'
      },

      subtitle: {
        text: '(in mbps)'
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
        min: 0,
        max: 15,
        minColor: "#F1F8E9",
        maxColor: "#33691E"
      },

      series: [{
        data: data,
        name: 'Avg. Speed (mbps)',
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

  render() {
    return <div>
      <Breadcrumb category='Telecom' label='Average Internet Speed'/>
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

        </TabPanel>
        <TabPanel>
          <h2>FAQ</h2>
        </TabPanel>
      </Tabs>
    </div>
  }
}

