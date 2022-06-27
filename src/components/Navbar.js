import React, { Component } from 'react'
import "./Navbar.css";
export class Navbar extends Component {

    render() {
        return (
            <>
                    <nav className="navbar">
        <div className="navbar-container container">
            <input type="checkbox" name="" id=""/>
            <div className="hamburger-lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
            </div>
            <ul className="menu-items">
                <li><a href="/" >Home</a></li>
                <li><button onClick={()=>this.props.catUpdate("Technology")}>Technology</button></li>
                <li><button onClick={()=>this.props.catUpdate("Entertainment")}>Entertainment</button></li>
                <li><button onClick={()=>this.props.catUpdate("Business")}>Business</button></li>
                <li><button onClick={()=>this.props.catUpdate("Health")}>Health</button></li>
                <li><button onClick={()=>this.props.catUpdate("Science")}>Science</button></li>
                <li><button onClick={()=>this.props.catUpdate("Sports")}>Sports</button></li>
                <li><a href="/">About</a></li>
            </ul>
            <h1 className="logo">NEWS HUNT</h1>
        </div>
    </nav>
            </>
        )
    }
}

export default Navbar