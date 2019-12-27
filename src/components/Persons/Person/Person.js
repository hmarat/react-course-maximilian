import React, { Component } from "react"
import classes from "./Person.css"

class Person extends Component {
    render() {
        console.log("[Person.js] rendered")
        return (
            <div className={classes.Person} >
                <p onClick={this.props.clicked}>I am {this.props.name} and I am {this.props.age}</p>
                <p>{this.props.children}</p>
                <input onChange={this.props.changed} value={this.props.name} />
            </div>
        )
    }
}

export default Person;