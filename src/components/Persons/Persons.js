import React, { PureComponent } from "react"

import Person from "./Person/Person"

class Persons extends PureComponent {
    // static getDerivedStateFromProps(props, state) {
    //     console.log("[Persons.js] getDerivedStateFromProps")
    //     return state;
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("[Persons.js] shouldComponentUpdate")
    //     if(nextProps.persons !== this.props.persons){
    //         return true;
    //     }
    //     return false;
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("[Persons.js] getSnapshotBeforeUpdate")
        return { message: "Oh it is snapshpt " }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("[Persons.js] componentDidUpdate   " + snapshot.message)
    }

    render() {
        console.log("[Persons.js] rendered")

        return this.props.persons.map((person, index) => (
            <Person
                key={person.id}
                name={person.name}
                age={person.age}
                clicked={this.props.clicked.bind(this, index)}
                changed={event => this.props.changed(event, person.id)}
            />
        ))
    }
}

export default Persons;