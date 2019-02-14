import React, { Component } from 'react'
import './TextView.less'
import d from '../data/data';
import { cube } from '../utils/math';
import imgOut1 from '../images/imgOut1.png'
import imgIn1 from '../images/imgIn1.png'

export default class TextView extends Component {
  render () {
    const { text } = this.props;
    return <div className="cpn-textview">
      <h2>jsx</h2>
      <p>{ text }</p>
      <p>{ d.say }</p>
      <p><span onClick={()=>alert('蟹蟹！')}>{ d.btnText }</span></p>
      <hr />
      <h2>url-loader</h2>
      <p>大于1kb的图片：<img src={imgOut1} /></p>
      <p>小于1kb的图片：<img src={imgIn1} /></p>
      <p className="img-bg">图片作为背景：</p>
      <hr />
      <h2>Tree Shaking</h2>
      <p>{'Test Tree Shaking, the result of used function is: ' + cube(5)}</p>
    </div>
  }
}