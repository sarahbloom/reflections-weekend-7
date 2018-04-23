import React, { Component } from 'react';
import Button from 'material-ui/Button';
import { connect } from 'react-redux';

class AddReflection extends Component{
    state = {
        newReflection:{
            topic: "",
            description: ""
        } //end newReflection
    }//end state


    //add new reflection to DB
    addNewReflection = (event) =>{
        event.preventDefault();
        console.log('clicked submit');
        this.props.dispatch({
            type: 'POST_REFLECTION', 
            payload: this.state.newReflection
        })
        this.setState({
            newReflection: {
                topic: "",
                description: ""
            }
        })
    }// end addNewReflection
    
    handleNameChange = (propertyName) =>{
        return (event) =>{
            this.setState({
                newReflection:{
                    ...this.state.newReflection,
                    [propertyName] : (event.target.value)
                }
            }) // end this.setState
        }
    }// end handleNameChange

    render(){

        return(
            <div>
                <form onSubmit={this.addNewReflection}>
                    <h4> Topic: </h4>
                    <textarea rows='2' cols='100'type="text"
                            value={this.state.newReflection.topic} 
                            onChange={this.handleNameChange('topic')} />
                    
                    <h4> Description: </h4>
                    {/* TODO: make a fixed text area */}
                    {/* <textarea rows="7" cols="60" > */}
                    <textarea rows='20' cols='100' type="text" onChange={this.handleNameChange('description')} 
                            value={this.state.newReflection.description}/>
                    {/* </textarea> */}
                    <br/>
                    <br/>
                    <Button type="submit" variant="raised" color="primary">Add New Reflection</Button>
                </form>
            </div>
        )
    }//end render
}//end class

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(AddReflection);