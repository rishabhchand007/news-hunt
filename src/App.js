import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from "./components/News"
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
  apiKey = process.env.REACT_APP_API
  constructor(){
    super();
    this.state ={
      category: "General",
      progress: 0
    }
  }
  catUpdate=(element)=>{
    console.log("called");
    this.setState({category:element});
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }

  render() {
  
    return (
      
      <>
      <Navbar catUpdate={this.catUpdate}/>
      <LoadingBar
        color='#f11946'
        height={3}
        progress={this.state.progress}
        onLoaderFinished={() => this.setProgress(0)}
      />
      <News setProgress={this.setProgress} category={this.state.category} apiKey={this.apiKey}/>
      </>
    )
  }
}
