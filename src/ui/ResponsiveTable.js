import React, {Component} from 'react'
import {RespTable} from '../styles/TableStyles'
import PropTypes from 'prop-types'

export default class ResponsiveTable extends Component {

  render() {
    const {data, headers, style} = this.props
    return <RespTable style={style}>
      <thead>
      <tr>
        {headers.map((header) => <th>{header}</th>)}
      </tr>
      </thead>
      <tbody>
        {
          data.map((row, idx) => {
            return <tr key={idx}>
                {row.map((el, rowIdx) => <td key={rowIdx} data-th={headers[rowIdx]}>{el}</td>)}
            </tr>
          })
        }
      </tbody>
    </RespTable>
  }

}

ResponsiveTable.PropTypes = {
  data: PropTypes.array.isRequired,
  headers: PropTypes.array.isRequired
}