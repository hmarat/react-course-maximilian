import React from "react"
//import "./Person.css"
import styled from "styled-components"

const StyledDiv = styled.div`
    width: 60%;
    border: 1px solid #eee;
    margin: 16px auto;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px){
        width: 450px;
    }
`;
const Person = props => {
    return(
    //<div className="Person" style={style}>
    <StyledDiv className={"Person"}>
        <p onClick={props.click}>I am {props.name} and I am {props.age}</p>
        <p>{props.children}</p>
        <input onChange={props.change} value={props.name}/>
    </StyledDiv>
    //</div>
    )  
}

export default Person;