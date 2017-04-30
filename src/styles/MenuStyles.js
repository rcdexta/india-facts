import styled from 'styled-components'

export const MenuItem = styled.div`
  margin-top: 15px;
  text-transform: uppercase;
  display: flex;
  padding: 5px 10px;
   
  svg {
    width: 20%;
    text-align: center;
  }
  
  .label {
    width: auto;
  }
`

export const NestedMenuItem = styled(MenuItem)`
  padding: 12px 0px 12px 18%;
  cursor: pointer;
  font-size: 78%;
  border-bottom: 1px solid #2C2E39;
  margin-top: 0px;
  
  &:hover, &:focus {
    background-color: rgba(255,0,0,0.3);
  }
  
  svg {
    width: 15%;
    vertical-align: top !important;
  }
`

export const Divider = styled.div`
    margin: 8px 0;
    height: 1px;
    background-color: #2C2E39;
`
