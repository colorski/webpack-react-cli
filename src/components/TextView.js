import React, { Component } from 'react'
import './TextView.less'
import imgOut1 from '../images/imgOut1.png'
import imgIn1 from '../images/imgIn1.png'

export default class TextView extends Component {
  render () {
    const { text } = this.props;
    return <div className="cpn-textview">
      <p>{ text }</p>
      <p>大于1kb的图片：<img src={imgOut1} /></p>
      <p>小于1kb的图片：<img src={imgIn1} />1</p>
    </div>
  }
}