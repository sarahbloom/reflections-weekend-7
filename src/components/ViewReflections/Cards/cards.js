// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from 'material-ui/styles';
// import Card, { CardActions, CardContent } from 'material-ui/Card';
// import Button from 'material-ui/Button';
// import Typography from 'material-ui/Typography';
// import DeleteButton from '../Buttons/DeleteButton.js'
// import ToggleButton from '../Buttons/ToggleButton.js';
// import Moment from 'react-moment';

// const styles = {
//     card: {
//         minWidth: 275,
//     },
//     bullet: {
//         display: 'inline-block',
//         margin: '0 2px',
//         transform: 'scale(0.8)',
//     },
//     title: {
//         marginBottom: 16,
//         fontSize: 14,
//     },
//     pos: {
//         marginBottom: 12,
//     },
// };

// function ReflectionCard(props) {
//     const { classes } = props;

//     return (
//         <div>
//             <Card className={classes.card}>
//                 <CardContent>
//                     <Typography variant="headline" component="h2">
//                         <h3>{this.props.listItem.topic} </h3>
//                     </Typography>
//                     <Typography className={classes.pos} color="textSecondary">
//                         <h4>{this.props.listItem.description} </h4>

//                     </Typography>
//                     <Typography component="p">
//                         <p> Date of event: <Moment format='MMMM Do, YYYY'>{this.props.listItem.date}</Moment> </p>
//                     </Typography>
//                 </CardContent>

//                 <CardActions>
//                     <DeleteButton listItem={this.props.listItem} />
//                     <ToggleButton listItem={this.props.listItem} />
//                 </CardActions>
//             </Card>
//         </div>
//     );
// }

// ReflectionCard.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(ReflectionCard);
