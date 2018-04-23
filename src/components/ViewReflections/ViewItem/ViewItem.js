
import React, { Component } from "react";
import { connect } from 'react-redux';
import Moment from 'react-moment';
import './ViewItem.css';
import DeleteButton from '../Buttons/DeleteButton.js';
import ToggleButton from '../Buttons/ToggleButton.js';
// import ReflectionCard from '../Cards/cards.js'

class ViewItem extends Component {

    render() {

        return (
            <div> 
                <div className="textClass"> 
                    <h3>{this.props.listItem.topic} </h3>
                    <h4>{this.props.listItem.description} </h4>
                    <p> Date of event: <Moment format='MMMM Do, YYYY'>{this.props.listItem.date}</Moment> </p>
                
                    <div className="buttonClass">
                        <DeleteButton id="delete" listItem = {this.props.listItem}/><span>
                        <ToggleButton id="bookmark" listItem={this.props.listItem} /></span>
                    </div>
                </div>
            </div>
        )
    }//end render
}// end ViewItem

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(ViewItem);