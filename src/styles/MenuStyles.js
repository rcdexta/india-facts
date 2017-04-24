import styled from 'styled-components'

export const MenuItem = styled.div`
  a {
    text-decoration: none;
    color: #b8b7ad;
    text-transform: uppercase;
    width: 100%;
  }
  
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
export const Divider = styled.div`
    margin: 8px 0;
    height: 1px;
    background-color: #2C2E39;
`
