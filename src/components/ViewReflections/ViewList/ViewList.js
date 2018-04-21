import React, { Component } from "react";
import { connect } from 'react-redux';
import ViewItem from '../ViewItem/ViewItem.js'; 
// import SimpleCard from '../ViewItem/ItemCard.js'

class ReflectionsList extends Component {

    // //load past reflections on DOM on component mounted
    componentDidMount = () => {
        console.log('component mounted');
        this.props.dispatch({
            type: "FETCH_REFLECTIONS",
        })
    }// end componentDidMount

    render() {
        //map out all reflections
        let ReflectionListArray = this.props.reduxState.reflectionList.map(listItem => {
            // return <div> {listItem.topic} {listItem.description} {listItem.date} </div>
            return < ViewItem key={listItem.id} listItem={listItem} />
        })

        return (
            <div>
                <p>all reflections will display here</p>
                {ReflectionListArray}
            </div>
        )
    }// end render
} //end class

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(ReflectionsList);

