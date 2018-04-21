import React, { Component } from "react";
import { connect } from 'react-redux';
import moment from 'moment';
import Moment from 'react-moment';

class ViewItem extends Component{

    render(){
        let date = this.props.listItem.date  

        return <div> <h3>{this.props.listItem.topic} </h3>
        <h4>{this.props.listItem.description} </h4>
            <p> Date of event: <Moment format= 'MMMM Do, YYYY'>{date}</Moment> </p></div>

        //TODO: format date
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});
export default connect(mapStateToProps)(ViewItem);