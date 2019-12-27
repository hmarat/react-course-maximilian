import React, { Component } from "react"
import classes from "./Cockpit.css"

export default class Cockpit extends Component {
    render() {
        const assignedClasses = [];
        let btnClass = "";

        if (this.props.showPersons) {
            btnClass = classes.Red;
        }

        if (this.props.persons.length <= 2) {
            assignedClasses.push(classes.red);
        }

        if (this.props.persons.length <= 1) {
            assignedClasses.push(classes.bold);
        }

        return (
            <div className={classes.Cockpit}>
                <h1>Hello, I am a react component</h1>
                <p className={assignedClasses.join(" ")}>This is really working</p>
                <button
                    onClick={this.props.clicked}
                    className={btnClass}
                >
                    Switch Person
                </button>
            </div>
        )
    }
}