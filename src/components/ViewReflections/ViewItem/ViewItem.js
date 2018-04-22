
import React, { Component } from "react";
import { connect } from 'react-redux';
import Moment from 'react-moment';
import './ViewItem.css'
import DeleteButton from './DeleteButton.js'
import ToggleButton from './ToggleButton.js'

class ViewItem extends Component {

    render() {

        return (
            <div> 
                <div className="textClass"> 
                    <h3>{this.props.listItem.topic} </h3>
                    <h4>{this.props.listItem.description} </h4>
                    <p> Date of event: <Moment format='MMMM Do, YYYY'>{this.props.listItem.date}</Moment> </p>
                
                    < DeleteButton listItem = {this.props.listItem}/>

                    <ToggleButton listItem={this.props.listItem} />

                </div>
            </div>
        )
    }//end render
}// end ViewItem

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(ViewItem);