import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AddBusinessForm from "./AddBusinessForm";
import { saveBusiness } from "../../actions";
import { addFlashMessage } from "../../actions/FlashMessages";

const validate = data => {
  const errors = {};
  if (!data.name) errors.name = "name can't be blank";
  if (!data.category) errors.category = "category can't be blank";
  if (!data.location) errors.location = "location can't be blank";
  if (!data.description) errors.description = "description can't be blank";

  return errors;
};
class AddBusinessPage extends React.Component {
  state = {
    data: {
      name: "",
      category: "",
      location: "",
      description: ""
    },
    loading: false,
    errors: {}
  };

  onChange = e =>
    this.setState({
      ...this.state,
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  onSubmit = e => {
    e.preventDefault();
    const errors = validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props
        .saveBusiness(this.state.data)
        .then(() => {
          this.setState({ loading: false });
          this.props.addFlashMessage({
            type: "success",
            text: "You have successfully posted ypur business"
          });
          this.props.history.push("/businesses");
        })
        .catch(err =>
          this.setState({
            errors: { message: err.response.message },
            loading: false
          })
        );
    }
  };
  render() {
    return (
      <div>
        <AddBusinessForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          state={this.state}
          addFlashMessage={addFlashMessage}
        />
      </div>
    );
  }
}

AddBusinessPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  saveBusiness: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired
};

export default connect(
  null,
  { saveBusiness, addFlashMessage }
)(AddBusinessPage);
