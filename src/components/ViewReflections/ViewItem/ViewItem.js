
import React, { Component } from "react";
import { connect } from 'react-redux';
import Moment from 'react-moment';
import './ViewItem.css'
import IconButton from 'material-ui/IconButton';
import { Bookmark, BookmarkBorder, Delete } from 'material-ui-icons';
import axios from 'axios';

class ViewItem extends Component {

    deleteReflection = (reflectionToDelete) => {
        console.log('clicked delete', this.props.listItem.id);
        axios.delete(`/api/view/${this.props.listItem.id}`)
            .then((response) => {
                console.log('photo deleted');
                this.props.dispatch({
                    type: "DISPLAY_UPDATED_REFLECTIONS",
                    payload: this.props.listItem.id
                })
            }).catch((err)=>{
                console.log('error in delete', err);
            })
    }// end deleteReflection

    render() {

        return (
            <div> 
                <div className="textClass"> 
                    <h3>{this.props.listItem.topic} </h3>
                    <h4>{this.props.listItem.description} </h4>
                    <p> Date of event: <Moment format='MMMM Do, YYYY'>{this.props.listItem.date}</Moment> </p>
                
                    <IconButton id="delete" size="small" onClick={this.deleteReflection}>
                    <Delete /></IconButton>
                    <IconButton id="bookmark" size="small" >
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