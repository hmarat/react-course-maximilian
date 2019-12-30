import React, { useEffect, useRef } from "react"

import classes from "./Cockpit.css"
import AuthContext from "../../contexts/auth-context"

const Cockpit = props => {
    const toggleBtnRef = useRef(null);

    useEffect(() => {
        console.log("[Cockpit.js] Use effect");
        //Http request
        // const timer = setTimeout(() => {
        //     alert("Data saved to cloud");
        // }, 1000);
        toggleBtnRef.current.click();;
        return () => {
            //clearTimeout(timer)
            console.log("[Cockpit.js] Use effect cleanup")
        }
    }, [])

    useEffect(() =>{
        console.log("[Cockpit.js] Use effect 2nd");
        return () => {
            console.log("[Cockpit.js] Use effect 2nd cleanup ")
        }
    })

        const assignedClasses = [];
        let btnClass = "";

        if (props.showPersons) {
            btnClass = classes.Red;
        }

        if (props.personsLength <= 2) {
            assignedClasses.push(classes.red);
        }

        if (props.personsLength <= 1) {
            assignedClasses.push(classes.bold);
        }

        return (
            <div className={classes.Cockpit}>
                <h1>Hello, I am a react component</h1>
                <p className={assignedClasses.join(" ")}>This is really working</p>
                <button
                    onClick={props.clicked}
                    className={btnClass}
                    ref={toggleBtnRef}
                >
                    Switch Person
                </button>
                <AuthContext.Consumer>
                    {(context) => (
                    <button onClick={context.login}>
                        Log in
                    </button>
                    )}
                    
                </AuthContext.Consumer>
            </div>
        )
}

export default React.memo(Cockpit);