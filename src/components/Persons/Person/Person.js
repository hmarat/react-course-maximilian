import React, { Component } from "react"
import PropTypes from "prop-types"

import withClass from "../../../hoc/WithClass"
import Aux from"../../../hoc/Auxiliary"
import classes from "./Person.css"
import AuthContext from "../../../contexts/auth-context"

class Person extends Component {
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount(){
        //this.inputElement.focus()
        this.inputElementRef.current.focus();
    }
    
    render() {
        console.log("[Person.js] rendered")
        return (
            <Aux>
                <AuthContext.Consumer>
                {(context) => context.isAuth ? <p>You logged in</p> : <p>Please log in!</p>}
                </AuthContext.Consumer>
                <p onClick={this.props.clicked}>I am {this.props.name} and I am {this.props.age}</p>
                <p>{this.props.children}</p>
                <input 
                    onChange={this.props.changed} 
                    value={this.props.name}
                    ref={this.inputElementRef}
                />
            </Aux>
        )
    }
}

Person.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    clicked: PropTypes.func,
    changed: PropTypes.func
}

export default withClass(Person, classes.Person);