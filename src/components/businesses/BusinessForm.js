import React, { Component } from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { saveBusiness, updateBusiness, fetchBusiness } from "../../actions";
import { Redirect } from "react-router";
import { addFlashMessage } from "../../actions/FlashMessages";
import "./BusinessForm.css";

const linkStyle = {
  color: "white",
  fontSize: "15px",
  letterSpacing: "1px"
};

class BusinessForm extends Component {
  state = {
    _id: this.props.business ? this.props._id : null,
    name: this.props.business ? this.props.name : "",
    category: this.props.business ? this.props.category : "",
    location: this.props.business ? this.props.location : "",
    description: this.props.business ? this.props.description : "",
    errors: {},
    loading: false,
    done: false
  };
  componentWillReceiveProps = nextProps => {
    this.setState({
      _id: nextProps.business._id,
      name: nextProps.business.Name,
      category: nextProps.business.Category,
      location: nextProps.business.Location,
      description: nextProps.business.Description
    });
  };
  componentDidMount() {
    if (this.props.match.params._id) {
      this.props.fetchBusiness(this.props.match.params._id);
    }
  }

  handleChange = e => {
    if (!!this.state.errors[e.target.name]) {
      let errors = Object.assign({}, this.state.errors);
      delete errors[e.target.name];
      this.setState({
        [e.target.name]: e.target.value,
        errors
      });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };
  handleSubmit = e => {
    e.preventDefault();

    let errors = {};
    if (this.state.name === "") errors.name = "Cant be empty";
    if (this.state.category === "") errors.category = "Cant be empty";
    if (this.state.location === "") errors.location = "Cant be empty";
    if (this.state.description === "") errors.description = "Cant be empty";
    this.setState({ errors });

    if (true) {
      const { _id, name, category, location, description } = this.state;
      this.setState({ loading: true });
      this.props
        .updateBusiness({ _id, name, category, location, description })
        .then(() => {
          this.setState({ loading: false });
          this.props.addFlashMessage({
            type: "success",
            text: "Business updated successfully!"
          });
          // this.props.history.push("/businesses");
        })
        .catch(err =>
          this.setState({ errors: err.response.message.data, loading: false })
        );
    }
  };
  render() {
    const form = (
      <section className="showcase">
        <div>
          <div className="row text-center">
            <div className="showcase-content">
              <div class="ui two column middle aligned very relaxed stackable grid">
                <div class="column">
                  <form
                    className={classnames("ui", "form", {
                      loading: this.state.loading
                    })}
                    onSubmit={this.handleSubmit}
                  >
                    <h4>Edit this Business</h4>

                    {/* {!!this.state.errors.message && (
                      <div className="ui negative message">
                        <p>{this.state.errors.message}</p>
                      </div>
                    )} */}

                    {!!this.props.error && (
                      <div className="ui negative message">
                        <p>{this.props.error}</p>
                      </div>
                    )}

                    <div className={classnames("field")}>
                      <label htmlFor="name">Name</label>
                      <input
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        id="title"
                      />
                      <span>{this.state.errors.name}</span>
                    </div>
                    <div className={classnames("field")}>
                      <label htmlFor="category">Category</label>
                      <input
                        name="category"
                        value={this.state.category}
                        onChange={this.handleChange}
                        id="category"
                      />
                      <span>{this.state.errors.category}</span>
                    </div>
                    <div className={classnames("field")}>
                      <label htmlFor="location">Location</label>
                      <input
                        name="location"
                        value={this.state.location}
                        onChange={this.handleChange}
                        id="location"
                      />
                      <span>{this.state.errors.location}</span>
                    </div>
                    <div className={classnames("field")}>
                      <label htmlFor="description">Description</label>
                      <input
                        name="description"
                        value={this.state.description}
                        onChange={this.handleChange}
                        id="description"
                      />
                      <span>{this.state.errors.description}</span>
                    </div>
                    <div className="field">
                      <button type="submit" className="ui positive button">
                        Save
                      </button>{" "}
                      <button className="ui primary button">
                        <Link style={linkStyle} to="/businesses">
                          Cancel
                        </Link>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
    return <div>{this.state.done ? <Redirect to="/businesses" /> : form}</div>;
  }
}
function mapStateToProps(state, props) {
  return {
    business: state.business,
    error: state.error
  };
}
BusinessForm.propTypes = {
  addFlashMessage: PropTypes.func.isRequired
};
export default connect(
  mapStateToProps,
  { saveBusiness, updateBusiness, fetchBusiness, addFlashMessage }
)(BusinessForm);
