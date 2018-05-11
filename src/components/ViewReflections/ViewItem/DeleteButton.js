import React, { Component } from "react";
import { connect } from 'react-redux';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import { Delete } from 'material-ui-icons';
import Dialog,
{ DialogActions, DialogContent, DialogContentText, DialogTitle }
    from 'material-ui/Dialog';

class DeleteButton extends Component{
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }//end constructor

    //used to open and close dialog box prompt
    handleClickOpen = () => {
        this.setState({ open: true });
    };
    handleClose = () => {
        this.setState({ open: false });
    };

    //delete a reflection
    deleteReflection = (reflectionToDelete) => {
        this.setState({ open: false });
        console.log('clicked delete button');
        this.props.dispatch({
            type: 'DELETE_REFLECTION',
            payload: this.props.listItem
        })
    }// end deleteReflection

    render(){
        return(
            <div>
            <IconButton id="delete" size="small" onClick={this.handleClickOpen}>
            <Delete /></IconButton>
            <Dialog
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="alert--title"
                aria-describedby="alert--description"
            >
                <DialogTitle id="alert--title">
                    {"Please confirm you want to delete the reflection"}
                </DialogTitle>

                <DialogContent>
                    <DialogContentText id = "alert--description" >
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
            </div>
        )
    }//end render
}//end class

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(DeleteButton);
