import styled from 'styled-components'

export const MenuItem = styled.div`
  a {
    text-decoration: none;
    color: #b8b7ad;
    width: 100%;
  }
  
  text-transform: uppercase;
  display: flex;
  padding: 5px 10px;
   
  .fa {
    width: 20%;
    text-align: center;
  }
  
  .label {
    width: auto;
  }
`

export const NestedMenuItem = styled(MenuItem)`
  margin: 10px 0px 10px 25%;
  text-transform: none;
`

export const Divider = styled.div`
    margin: 8px 0;
    height: 1px;
    background-color: #2C2E39;
`
