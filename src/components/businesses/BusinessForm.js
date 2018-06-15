import React, { Component } from 'react';
import classnames from 'classnames';
import Navbar from "../navbar/Navbar";
import  './BusinessForm.css';
import { connect } from 'react-redux';
import { saveBusiness } from '../../actions';
import { Redirect } from 'react-router'
import TopNavigationBar from '../layout/menu'
import './BusinessForm.css';

class BusinessForm extends Component {
  state = {
    title: "",
    category: "",
    location: "",
    description: "",
    errors: {},
    loading: false,
    done: false
  }
  handleChange = (e) => {
    if (!!this.state.errors[e.target.name]){
      let errors = Object.assign({}, this.state.errors);
      delete errors[e.target.name];
      this.setState({[e.target.name]: e.target.value,
        errors
    });
    } else{
      this.setState({[e.target.name]: e.target.value})
    }
    
  }
  handleSubmit = (e) => {
    e.preventDefault();

    // let errors = {}
    // if (this.state.title === '') errors.title = "Cant be empty";
    // if (this.state.category === '') errors.category = "Cant be empty";
    // if (this.state.location === '') errors.location = "Cant be empty";
    // if (this.state.description === '') errors.description= "Cant be empty";
    // this.setState({ errors });
    // const isValid = Object.keys(errors).length === 0

    if (true){
      const { title, category, location, description } = this.state;
      this.setState({ loading: true })
      this.props.saveBusiness({ title, category, location, description }).then(
        () => {},
        (err) => err.response.json().then(({errors}) => this.setState({errors, loading: false}))
      );
    }
  }
	render(){
    const form =(<section className="showcase">
    <div>
      <div className="row text-center">
        <div className="showcase-content">
        <TopNavigationBar/>
          <form className={classnames('ui', 'form', { loading: this.state.loading }) } onSubmit={this.handleSubmit} >
          <h1 className="text">Add New Business</h1>

          {!!this.state.errors.global && <div className="ui negative message"><p>{this.state.errors.message}</p></div>}

        <div className={classnames('field' )}>
          <label htmlFor="name">Name</label>
          <input
            name="title"
            value={this.state.name}
            onChange={this.handleChange}
            id="title"/>
            {/* <span>{this.state.errors.title}</span> */}
        </div>
        <div className={classnames('field')}>
          <label htmlFor="category">Category</label>
          <input
            name="category"
            value={this.state.category}
            onChange={this.handleChange}
            id="category"/>
            {/* <span>{this.state.errors.category}</span> */}
        </div>
        <div className={classnames('field')}>
          <label htmlFor="location">Location</label>
          <input
            name="location"
            value={this.state.location}
            onChange={this.handleChange}
            id="location"/>
            {/* <span>{this.state.errors.location}</span> */}
        </div>
        <div className={classnames('field')}>
          <label htmlFor="description">Description</label>
          <input
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
            id="description"/>
            {/* <span>{this.state.errors.description}</span> */}
        </div>
        <div className="field">
          <button type="submit" className="ui primary button">Save</button>
        </div>
        </form> 
      </div>   
      </div>    
    </div>
    </section>)
		return(
      <div>
        <Navbar />
        { this.state.done? <Redirect to="/dashboard"/> : form }
      </div>
			)
	}
}
export default connect(null, { saveBusiness })(BusinessForm)