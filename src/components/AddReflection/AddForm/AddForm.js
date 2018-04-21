import React, { Component } from 'react';
import axios from 'axios';
import Button from 'material-ui/Button';
import { connect } from 'react-redux';

class AddReflection extends Component{
    state = {
        newReflection:{
            topic: "",
            description: ""
        } //end newReflection
    }//end state

    handleNameChange = (propertyName) =>{
        return (event) =>{
            this.setState({
                newReflection:{
                    ...this.state.newReflection,
                    [propertyName] : (event.target.value)
                }
            })
        }
    }

    render(){

        return(
            <div>
                <form>
                    <h4> Topic: </h4>
                    <input type="text"
                            value={this.state.newReflection.topic} 
                            onChange={this.handleNameChange('topic')} />
                    
                    <h4> Description: </h4>
                    <textarea rows="7" cols="60" 
                        value={this.state.newReflection.description} >
                    <input type="text" onChange={this.handleNameChange('description')} />
                    </textarea>
                    <br/>
                    <Button variant="raised" color="primary">Add New Reflection</Button>
                </form>
            </div>
        )
    }//end render
}//end class

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(AddReflection);