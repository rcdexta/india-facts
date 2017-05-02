import React from 'react';
import TrendImg from '../images/trends-icon.png'
import {CenteredFlexContainer, Card, CardTitle, CardBody, CardLink, CardButton} from '../styles/BaseStyles'
import {Link} from 'react-router-dom'
import Breadcrumb from '../ui/Breadcrumb'

const Home = () => {

  return <div>

    <Breadcrumb category='Welcome to India Facts' />

    <CenteredFlexContainer>


      <Card>
        <CardTitle>Population</CardTitle>
        <CardBody>India has about 125 million English speakers which is twice the entire population of the United Kingdom!</CardBody>
        <CardLink>
          <Link to='/population'><CardButton>LEARN MORE</CardButton></Link>
        </CardLink>
      </Card>


      <Card>
        <CardTitle>Internet</CardTitle>
        <CardBody>Even though only 16% of India’s population has access to the Internet, this is 10 times the total population of Australia.</CardBody>
        <CardLink>
          <Link to='/internet_penetration'><CardButton>LEARN MORE</CardButton></Link>
        </CardLink>
      </Card>

      <Card>
        <CardTitle>Life Expectancy</CardTitle>
        <CardBody>Life expectancy in India has increased by more than 10 years in the past two decades, while globally children born in 2015 were expected on an average to live till 71.4 years, a new
          UN report revealed</CardBody>
        <CardLink>
          <Link to='/life_expectancy'><CardButton>LEARN MORE</CardButton></Link>
        </CardLink>
      </Card>


      <Card>
        <CardTitle>Emissions</CardTitle>
        <CardBody>In it's 2020 climate action plan, India commits to 35% cut in emission rate by 2030</CardBody>
        <CardLink>
          <Link to='/co2_emissions'><CardButton>LEARN MORE</CardButton></Link>
        </CardLink>
      </Card>

    </CenteredFlexContainer>

  </div>

}

export default Home