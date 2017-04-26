import styled from 'styled-components'

const breakpointAlpha = '500px';

export const RespTable = styled.table`
  
  margin: 1em 0;
  min-width: 300px; 
  background-color: #34495E;
  color: #999;
  border-radius: .4em;
  overflow: hidden;

  tr {
    border-color: lighten(#34495E, 10%);
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
  }

  th {
    display: none; 
  }

  td {
    display: block;

    &:first-child {
        padding-top: .5em;
    }
    
    &:last-child {
        padding-bottom: .5em;
    }
  
    &:before {
        content: attr(data-th)": "; 
        font-weight: bold;
  
        width: 6.5em; 
        display: inline-block;
  
      @media (min-width: ${breakpointAlpha}) {
          display: none;
        }
    }
  }
  
  th, td:before {
    color: #dd5;
  }

  th, td {
    text-align: left;
    margin: .5em 1em;
  
    @media (min-width: ${breakpointAlpha}) { 
      padding: 1em !important; 
    }

    @media (min-width: ${breakpointAlpha}) {
      display: table-cell;
      padding: .25em .5em;

      &:first-child {
          padding-left: 0;
        }
  
      &:last-child {
          padding-right: 0;
        }
      }
  }
`