import React from "react";

export const User = () => {
    return (
        <>
            {/* <div className="userCard">
                <h2> Food App  </h2>
                <h3> Locate at : 403 WAKAD , PUNE</h3>
                <h3> Get In Touch : Foodapp@mail.com</h3>
            </div> */}
        </>
    )
}


// class Based Component
// never update state Variable directly 
export class UserClass extends React.Component {


    constructor(props) {
        super(props)

        this.state = {
            userInfo: {
                first_name: "kalash Band",
                email: "foodapp@gmail.com"
            },
        }
        // console.log(this.props.name + "child constructor");
    }

    async componentDidMount() {
        console.log( "Component Did Mounted");
        const data = await fetch("https://reqres.in/api/users/3");
        const json = await data.json();
        this.setState({
            userInfo: json.data,
        })
    }

    componentDidUpdate() {
        console.log("Component Did update");
    }

    componentWillUnmount() {
        console.log("Component  Will Mount ");
    }

    render() {
        // console.log(this.props.name + "child render")
        return (
            <>
                <div className="userCard">
                    <h3 ><img src={this.state.userInfo.avatar} alt="" />  </h3>
                    <h2> {this.state.userInfo.first_name} {this.state.userInfo.last_name}  </h2>
                    <h3>{this.state.userInfo.bio} </h3>
                    <h3> Get In Touch : {this.state.userInfo.email}</h3>
                </div >
            </>
        )
    }
}

// export default userClass ;

// export default User ; 


/*
constructor (dummy )

*/