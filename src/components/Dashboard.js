import React from 'react'
import SkylineImg from '../images/skyline.png'
import PlotValue from '../charts/PlotValue'
import LineChart from '../charts/LineChart'
import { Line } from 'recharts'
import { Link } from 'react-router-dom'

const populationData = require('../data/Population.json')
const petrolPriceData = require('../data/PetrolPrice.json')
const femaleLifeExpectancyData = require('../data/FemaleLifeExpectancy.json');

const Home = () => {
  return (
    <div>

      <div className="container" style={{ textAlign: 'center' }} alt="India Facts Banner">

        <img src={SkylineImg} style={{ marginBottom: 30 }} />

        <div className="row cols-sm-12">

          <div className="row" style={{ justifyContent: 'space-around' }}>

            <div className="card">
              <h3 className="section title double-padded">Population</h3>
              <div className="section media">
                <LineChart plotBy="Year" label="YearlyGrowth" color="orange" data={populationData} valueType={PlotValue.PERCENTAGE} aspectRatio={1.5} />
              </div>
              <div className="action"><Link to="/population">LEARN MORE</Link></div>
            </div>

            <div className="card">
              <h3 className="section title double-padded">Petrol Price</h3>
              <div className="section media">
                <LineChart plotBy="date" label="Chennai" color="green" data={petrolPriceData} valueType={PlotValue.RUPEE} aspectRatio={1.5} />
              </div>
              <p className="section double-padded">
                <div className="action"><Link to="/petrol_price">LEARN MORE</Link></div>
              </p>
            </div>

            <div className="card">
              <h3 className="section title double-padded">Female Life Expectancy</h3>
              <div className="section media">
                <LineChart plotBy="Year" data={femaleLifeExpectancyData} valueType={PlotValue.BIG_NUMBER} aspectRatio={1.5} >
                  <Line dataKey="India" stroke="green" dot={false} />
                  <Line dataKey="China" stroke="orange" dot={false} />
                  <Line dataKey="Usa" stroke="blue" dot={false} />
                </LineChart>
              </div>
              <p className="section double-padded">
                <div className="action"><Link to="/life_expectancy">LEARN MORE</Link></div>
              </p>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Home
