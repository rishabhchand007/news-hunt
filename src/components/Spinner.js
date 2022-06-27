import React, { Component } from 'react'
import Loading from "./Loading.gif"
export default class Spinner extends Component {

  render() {
    return (
      <div style={{margin:"8rem"}}><center><img src={Loading} alt="loading!" /></center></div>
    )
  }
}
