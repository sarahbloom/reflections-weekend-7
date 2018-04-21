import React, { Component } from "react";
import { connect } from 'react-redux';
import '../ViewList/ViewList.js';
// import axios from 'axios';

class ReflectionsList extends Component{

    // //load past reflections on DOM on component mounted
    componentDidMount = () => {
        console.log('component mounted');
            this.props.dispatch({
                type: "FETCH_REFLECTIONS",
            })
    }// end componentDidMount

    render(){
        //map out all reflections
        return(
            <div>
                <p>all reflections will display here</p>
                <pre>{JSON.stringify(this.props.reduxState)}</pre>
            </div>
        )
    }// end render
} //end class

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(ReflectionsList);

