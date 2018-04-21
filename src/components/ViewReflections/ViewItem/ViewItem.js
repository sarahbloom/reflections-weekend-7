import React, { Component } from "react";
import { connect } from 'react-redux';

class ViewItem extends Component{

    render(){
        return <div> <h3>{this.props.listItem.topic} </h3>
        <h4>{this.props.listItem.description} </h4>
        <p> Date of event: {this.props.listItem.date} </p></div>

        //TODO: format date

    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});
export default connect(mapStateToProps)(ViewItem);