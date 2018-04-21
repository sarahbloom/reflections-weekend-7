
import React, { Component } from "react";
import { connect } from 'react-redux';
import Moment from 'react-moment';
import './ViewItem.css'
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { Bookmark, BookmarkBorder, Delete } from 'material-ui-icons';

class ViewItem extends Component {

    render() {
        // let date = this.props.listItem.date;

        return (
            <div> 
                <div className="textClass"> 
                    <h3>{this.props.listItem.topic} </h3>
                    <h4>{this.props.listItem.description} </h4>
                    <p> Date of event: <Moment format='MMMM Do, YYYY'>{this.props.listItem.date}</Moment> </p>
                
                    <IconButton id="delete" size="small" color="white" ><Delete /></IconButton>
                    <IconButton id="bookmark" size="small" color="white" >
                        <BookmarkBorder /></IconButton>
                </div>
            </div>
        )
    }//end render
}// end ViewItem

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(ViewItem);