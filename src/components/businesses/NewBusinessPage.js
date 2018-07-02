import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Segment } from "semantic-ui-react";
import axios from "axios";
import SearchBusinessForm from "./SearchBusinessForm";
import BusinessForm from "./BusinessForm";
import { saveBusiness } from "../../actions/business";
import businesses from "../../reducers/businesses";

class NewBusinessPage extends React.Component {
  state = {
    business: null
  };

  onBusinessSelect = business => {
    this.setState({ business });
    console.log(business._id);
    axios
      .get(`http://127.0.0.1:5000/api/v2/businesses/${business._id}`)
      .then(res => res.data.name)
      .then(name => this.setState({ business: { ...business, name } }));
  };

  addBusiness = business =>
    this.props
      .saveBusiness(business)
      .then(() => this.props.history.push("/dashboard"));

  render() {
    return (
      <Segment>
        <h1>Add new business to your collection</h1>
        <SearchBusinessForm onBusinessSelect={this.onBusinessSelect} />

        {this.state.business && (
          <BusinessForm
            submit={this.addBusiness}
            business={this.state.business}
          />
        )}
      </Segment>
    );
  }
}

NewBusinessPage.propTypes = {
  saveBusiness: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default connect(
  null,
  { saveBusiness }
)(NewBusinessPage);
