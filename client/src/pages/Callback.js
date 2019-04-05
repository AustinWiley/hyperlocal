import React, {Component} from "react";
import Auth from "../Auth";

export default class Callback extends Component {

    componentDidMount() {
        console.log('callback component did mount')
        const auth = new Auth();
        auth.handleAuthentication();
    }

    render() {
        return (
            <div>
                Loading...
            </div>
        )
    }
}