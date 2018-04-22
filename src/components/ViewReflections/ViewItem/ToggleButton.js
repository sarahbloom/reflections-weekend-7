import React, { Component } from "react";
import { connect } from 'react-redux';
import IconButton from 'material-ui/IconButton';
import { Bookmark, BookmarkBorder  } from 'material-ui-icons';
import axios from 'axios';
import ToggleIcon from 'material-ui-toggle-icon';

class ToggleButton extends Component{

    toggleBookmark = (listItem) => {
        this.props.listItem.bookmarked = !this.props.listItem.bookmarked;
        axios.put(`/api/view/?=${this.props.listItem.id}`, this.props.listItem)
            .then((response) => {
                // console.log('bookmark status', this.props.listItem.bookmarked);
                this.props.dispatch({
                    type: "DISPLAY_UPDATED_REFLECTIONS",
                })
            }).catch((err) => {
                console.log('error in PUT', err);
            })//end catch and axios call
    }//end toggleBookmark

    render(){
        return(
            <IconButton onClick={this.toggleBookmark}>
                < ToggleIcon
                    on={this.props.listItem.bookmarked}
                    onIcon={<Bookmark />}
                    offIcon={<BookmarkBorder />}
                />
            </IconButton>
        )
    }//end render
}//end class

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(ToggleButton);
