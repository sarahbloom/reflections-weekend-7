
import React, { Component } from "react";
import { connect } from 'react-redux';
import Moment from 'react-moment';
import './ViewItem.css'
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import { Bookmark, BookmarkBorder, Delete } from 'material-ui-icons';
import axios from 'axios';
import ToggleIcon from 'material-ui-toggle-icon';
import DeleteButton from './DeleteButton.js'

import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui/Dialog';

class ViewItem extends Component {

    toggleBookmark = (listItem) =>{
        this.props.listItem.bookmarked = !this.props.listItem.bookmarked;
        axios.put(`/api/view/?=${this.props.listItem.id}`, this.props.listItem)
            .then((response) => {
            // console.log('bookmark status', this.props.listItem.bookmarked);
                this.props.dispatch({
                    type: "DISPLAY_UPDATED_REFLECTIONS",
                })
            }).catch((err)=>{
                console.log('error in PUT', err);
        })//end catch and axios call
    }//end toggleBookmark

    render() {

        return (
            <div> 
                <div className="textClass"> 
                    <h3>{this.props.listItem.topic} </h3>
                    <h4>{this.props.listItem.description} </h4>
                    <p> Date of event: <Moment format='MMMM Do, YYYY'>{this.props.listItem.date}</Moment> </p>
                
                    < DeleteButton listItem = {this.props.listItem}/>

                    <IconButton onClick={this.toggleBookmark}>
                        < ToggleIcon
                            on={this.props.listItem.bookmarked}
                            onIcon={<Bookmark />}
                            offIcon={<BookmarkBorder />}
                        />
                    </IconButton>

                </div>
            </div>
        )
    }//end render
}// end ViewItem

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(ViewItem);