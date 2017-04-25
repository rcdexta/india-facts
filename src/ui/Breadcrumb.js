import React, {Component} from 'react'
import {BreadcrumbContainer} from '../styles/BaseStyles'
import FontAwesome from 'react-fontawesome'

export default class Breadcrumb extends Component {

  render() {
    return <BreadcrumbContainer>
      Energy <FontAwesome name='caret-right' style={{marginLeft: 3, verticalAlign: 'inherit'}}/> Diesel Price
    </BreadcrumbContainer>
  }
}