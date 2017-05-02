import React from 'react';
import {BreadcrumbContainer} from '../styles/BaseStyles'
import {IntroDiv} from '../styles/BaseStyles'

const Intro = () => {
  return <div>
    <IntroDiv>
      <BreadcrumbContainer>Why?</BreadcrumbContainer>
      <p>A couple of weeks back, Steve Balmer launched a site called <a href='http://usafacts.org/'>usafacts.org</a>. It's cool and you should check out. The home page has a simple caption "Our
        nation, in numbers"</p>
      <p>I was searching for an equivalent for India and I am listing my experience: </p>
      <ul>
        <li>The first place we all look for: data.gov.in has a lot of scope for improvement in terms of data cataloguing and accessiblity. If you don't trust me, check and come back, I will wait!</li>
        <li>Not all information is available in one place and the data is not up-to-date</li>
        <li>Sites that offer extensive data are offering it only for paid premium members</li>
      </ul>

      <BreadcrumbContainer>Objectives</BreadcrumbContainer>
      <p>This site aims to be just one thing: 'India in numbers'. Any fact/concern/issue that can make sense in the form of data will be available on this site. The design goals for india-facts:</p>
      <ul>
        <li>always display the latest data without manual intervention using automated data pipes (more on that later)</li>
        <li>make all data along with sources available for reference and download</li>
        <li>make the site code completely open source for anyone to contribute</li>
        <li>continuously evolve and help back current issues with relevant data (E.g.: alarming reservoir water levels in the country now [circa. 2017])</li>
      </ul>

      <BreadcrumbContainer>Future Roadmap</BreadcrumbContainer>
      <ul>
        <li>add more facts for education, ground water level, crime statistics</li>
        <li>implement data pipe to link and update data from external sources automatically</li>
        <li>allow users to curate/contribute to the site in a seamless way</li>
      </ul>

      <BreadcrumbContainer>Feedback</BreadcrumbContainer>
      <p>If you have any feedback or suggestions, please tweet/DM <a href='https://twitter.com/rcdexta'>@rcdexta</a></p>

      <BreadcrumbContainer>Soure code</BreadcrumbContainer>
      <p>Fork this <a href='https://github.com/rcdexta/india-trends'>repository</a>. Contributions welcome!</p>

    </IntroDiv>
  </div>
}


export default Intro