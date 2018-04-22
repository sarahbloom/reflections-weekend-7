
import React, { Component } from "react";
import { connect } from 'react-redux';
import Moment from 'react-moment';
import './ViewItem.css'
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import { Bookmark, BookmarkBorder, Delete } from 'material-ui-icons';
import axios from 'axios';
import ToggleIcon from 'material-ui-toggle-icon'

import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui/Dialog';

class ViewItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
        };
    }
    
    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    deleteReflection = (reflectionToDelete) => {
        this.setState({ open: false });
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
                
                    <IconButton id="delete" size="small" onClick={this.handleClickOpen}>
                    <Delete /></IconButton>
                    <Dialog
                        open={this.state.open}
                        onClose={this.handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                            {"Please confirm you want to delete the reflection"}
                        </DialogTitle>

                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                You are not able to recover the reflection once it has been deleted. 
                            </DialogContentText>
                        </DialogContent>

                        <DialogActions>
                            <Button onClick={this.handleClose} color="primary">
                                Keep Reflection
                            </Button>
                            <Button onClick={this.deleteReflection} color="primary" autoFocus>
                                Delete Reflection
                            </Button>
                        </DialogActions>
                    </Dialog>

                    <IconButton
                        onClick={() => this.setState({ on: !this.state.on })}
                    >
                        < ToggleIcon
                            on={this.state.on}
                            onIcon={<Bookmark />}
                            offIcon={<BookmarkBorder />}
                        />
                    </IconButton>

                    {/* <IconButton id="bookmark" size="small" >
                        <BookmarkBorder /></IconButton> */}
                </div>
            </div>
        )
    }//end render
}// end ViewItem

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(ViewItem);