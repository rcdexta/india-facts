import styled from 'styled-components'

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`

export const LogoImg = styled.img`
  width: 72px;
  height: auto;
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