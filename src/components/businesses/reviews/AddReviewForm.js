import React, { Component } from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  saveBusiness,
  updateBusiness,
  fetchBusiness,
  addReview
} from "../../../actions";
import { Redirect } from "react-router";
import TopNavigation from "../TopNavigationBar";
import { addFlashMessage } from "../../../actions/FlashMessages";
import "../BusinessForm.css";

const linkStyle = {
  color: "white",
  fontSize: "15px",
  letterSpacing: "1px"
};
//this is a component for adding reviews
//
class AddReviewForm extends Component {
  state = {
    description: "",
    reviewbody: "",
    errors: {},
    loading: false,
    done: false
  };

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
    const _id = this.props.match.params._id;
    e.preventDefault();

    let errors = {};
    if (this.state.description === "") errors.description = "Cant be empty";
    if (this.state.reviewbody === "") errors.reviewbody = "Cant be empty";
    this.setState({ errors });

    if (true) {
      console.log("props", this.state.props);
      const { description, reviewbody } = this.state;
      this.setState({ loading: true });
      this.props
        .addReview({ description, reviewbody }, _id)
        .then(() => {
          this.setState({ loading: false });
          this.props.addFlashMessage({
            type: "success",
            text: "Review added successfully!"
          });
          this.props.history.push("/businesses");
        })
        .catch(err => this.setState({ errors: err, loading: false }));
    }
  };
  render() {
    const form = (
      <section className="showcase">
        <div>
          <div className="row text-center">
            <div className="showcase-content">
              <TopNavigation />
              <form
                className={classnames("ui", "form", {
                  loading: this.state.loading
                })}
                onSubmit={this.handleSubmit}
              >
                <h4>Add a business reviews</h4>

                {!!this.state.errors.message && (
                  <div className="ui negative message">
                    <p>{this.state.errors.message}</p>
                  </div>
                )}
                <div className={classnames("field")}>
                  <label htmlFor="author">Author:</label>
                  <input
                    name="author"
                    // value={author}
                    onChange={this.handleChange}
                    id="author"
                  />
                  <span>{this.state.errors.author}</span>
                </div>

                <div className={classnames("field")}>
                  <label htmlFor="description">Enter your review below:</label>
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
                    <Link style={linkStyle} to="/dashboard">
                      Cancel
                    </Link>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
    return <div>{this.state.done ? <Redirect to="/businesses" /> : form}</div>;
  }
}
function mapStateToProps(state, props) {
  if (props.match.params._id) {
    return {
      business: state.businesses.find(
        item => item._id === props.match.params._id
      ),
      user: state.user.username
    };
  }
  return { business: null };
}
AddReviewForm.propTypes = {
  addFlashMessage: PropTypes.func.isRequired,
  addReview: PropTypes.func.isRequired
};
export default connect(
  mapStateToProps,
  { saveBusiness, updateBusiness, fetchBusiness, addFlashMessage, addReview }
)(AddReviewForm);
