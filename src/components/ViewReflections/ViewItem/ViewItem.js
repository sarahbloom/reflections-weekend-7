
import React, { Component } from "react";
import { connect } from 'react-redux';
import Moment from 'react-moment';
import './ViewItem.css'
import DeleteButton from './DeleteButton.js'
import ToggleButton from './ToggleButton.js'
import Card, { CardContent, CardActions, } from 'material-ui/Card';
import { Grid, Typography } from 'material-ui';

class ViewItem extends Component {

    render() {

        return (
            <Grid item>
                <Card 
                    style = {
                    {maxWidth: "350px",
                        background: "linear-gradient(to bottom, #B388FF, #FAFAFA)"}}
                    className="textClass" 
                >
                    <CardContent >
                        <Typography variant="headline" component="h2">
                            {this.props.listItem.topic}
                        </Typography>
                        <Typography component="h4">
                            {this.props.listItem.description} 
                        </Typography>
                        <Typography component="p">
                            Date of event: <Moment format='MMMM Do, YYYY'>{this.props.listItem.date}</Moment>                         </Typography>
                    </CardContent>
            
                    <CardActions className="buttonClass">
                        <DeleteButton id="delete" listItem={this.props.listItem} />
                        <ToggleButton id="bookmark" listItem={this.props.listItem} />
                    </CardActions>
                </Card>
            </Grid>
        )
    }//end render
}// end ViewItem

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(ViewItem);