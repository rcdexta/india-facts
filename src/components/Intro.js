import React from 'react';
import Breadcrumb from '../ui/Breadcrumb'
import {IntroDiv} from '../styles/BaseStyles'

const Intro = () => {
  return <div>
    <Breadcrumb category='Home' label='Introduction'/>
    <IntroDiv>
      <h2>Why</h2>
      <p>A couple of weeks back, Steve Balmer launched a site called <a href='http://usafacts.org/'>usafacts.org</a> It's cool and you should check it out. The home page has a simple caption "Our
        nation, in numbers"</p>
      <p>I was looking for an equivalent for India and I was looking at a number of problems ahead: </p>
      <ul>
        <li>The first place we all look for: data.gov.in has a lot of scope for improvement in terms of data cataloguing and accessiblity. If you don't trust me, check and come back, I will wait!</li>
        <li>Not all information is available in one place and the data is not up-to-date</li>
        <li>Sites that offer extensive data are offering it only for paid premium members</li>
      </ul>

      <h2>Objectives</h2>
      <p>This site aims to be just one thing: 'India in numbers'. Any fact/concern/issue that can make sense in the form of data will be available on this site. I am listing the design goals for india-facts:</p>
      <ul>
        <li>always display the latest data without manual intervention using automated data pipes (more on that later)</li>
        <li>make all data along with sources available for reference and download</li>
        <li>make the site code completely open source for anyone to contribute</li>
      </ul>

      <h2>How to use</h2>
      <p>Please feel free to navigate though the category of facts on the menubar to the left</p>

      <h2>Future Roadmap</h2>
      <ul>
        <li>add more facts for education, ground water level, crime statistics</li>
        <li>implement data pipe to link data from external sources automatically</li>
        <li>allow users to contribute to the site in a seamless way</li>
      </ul>

      <h2>Feedback</h2>
      <p>If you have any feedback or suggestions, please tweet/DM me <a href='https://twitter.com/rcdexta'>@rcdexta</a></p>
    </IntroDiv>
  </div>
}


export default Intro