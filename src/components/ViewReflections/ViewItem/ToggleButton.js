import React, { Component } from "react";
import { connect } from 'react-redux';
import IconButton from 'material-ui/IconButton';
import { Bookmark, BookmarkBorder  } from 'material-ui-icons';
import ToggleIcon from 'material-ui-toggle-icon';

class ToggleButton extends Component{

    //bookmark a reflection to update database status
    toggleBookmark = (listItem) => {
        this.props.listItem.bookmarked = !this.props.listItem.bookmarked;
        this.props.dispatch({
            type: 'UPDATE_BOOKMARK_STATUS', 
            payload: this.props.listItem
        })
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
