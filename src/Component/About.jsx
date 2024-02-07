import { UserClass, User } from "./User";
import { Component } from "react";
import React from "react";


class About extends React.Component {
    constructor(props) {
        super(props)
        // console.log(props, " parent constructor");
    }

    componentDidMount() {
        // console.log(" parent Did Mounted");
        
    }

    render() {
        // console.log(" parent render");

        return (
            <>
                <h1>About</h1>
                <User />
                <UserClass name="first" location="403 WAKAD , PUNE (class)" />
            </>
        )
    }
}
export default About;
