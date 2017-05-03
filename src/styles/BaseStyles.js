import styled from 'styled-components'

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`

export const CenteredFlexContainer = styled(FlexContainer)`
  justify-content: center;
`

export const LogoImg = styled.img`
  height: auto;
  width: 100%;
  margin-right: 10px
`

export const BreadcrumbContainer = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  background-color: #6c79c3;
  color: #fff;
`

export const ChartToolTip = styled.div`
  border: 1px solid #777;
  background-color: #fff;
  
  div{
    font-size: 50%;
    padding: 10px;
  }
  
  .date {
    text-align: center;
    color: white;
    padding: 5px;
  }
`

export const ChartTitle = styled.h5`
  color: #004D40;
  font-size: 0.8em;
`

export const ChartSmallTitle = styled.p`
    margin: 0px;
    font-size: 0.7em;
`

export const IntroDiv = styled.div`
  font-size: 0.85em;
  
  li {
    line-height: 20px;
  }
  
  a {
    color: #5C6BC0;
  }
`

export const Card = styled.div`
  width: 100%;
  width: 300px;
  float: left;
  margin: 25px;
  background-color: #fff;
  box-shadow: 1px 1px 5px 0px rgba(109,109,109,0.3);
  border: 1px solid #ddd;
`

export const CardTitle = styled.div`
  background-color: #8C3638;
  padding: 10px;
  text-align: center;
  color: white;
`

export const CardBody = styled.div`
  padding: 10px;
  font-size: 80%;
`

export const CardLink = styled.div`
  text-align: center;
  border-top: 1px solid #E0E0E0;
  padding: 0 8px;
`

export const CardButton = styled.button`
  outline: none;
  position: relative;
  display: inline-block;
  line-height: 52px;
  padding: 0 16px;
  color: #FF1744;
  border: none;
  background: transparent;
  cursor: pointer;
`