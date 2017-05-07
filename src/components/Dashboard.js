import React from 'react'
import { CenteredFlexContainer, Card, CardTitle, CardBody, CardLink, CardButton } from '../styles/BaseStyles'
import { Link } from 'react-router-dom'
import Breadcrumb from '../ui/Breadcrumb'

const Home = () => {
  return (
    <div>

      <Breadcrumb category="Welcome to India Facts" />

      <div className="container">
        <div className="row cols-sm-12">

          <div className="row" style={{ justifyContent: 'space-around' }}>

            <div className="card">
              <h3 className="section double-padded">Population</h3>
              <img href="https://placehold.it/800x600" className="section media" />
              <p className="section double-padded">India has about 125 million English speakers which is twice the entire population of the United Kingdom!</p>
            </div>

            <div className="card">
              <h3 className="section double-padded">Internet</h3>
              <img href="https://placehold.it/800x600" className="section media" />
              <p className="section double-padded">Even though only 16% of India’s population has access to the Internet, this is 10 times the total population of Australia.</p>
            </div>

            <div className="card">
              <h3 className="section double-padded">Life Expectancy</h3>
              <img href="https://placehold.it/800x600" className="section media" />
              <p className="section double-padded">Life expectancy in India has increased by more than 10 years in the past two decades, while globally children born in 2015 were expected on an average to live till 71.4 years, a new UN report revealed</p>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Home
