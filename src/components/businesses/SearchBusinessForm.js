import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Form, Dropdown } from "semantic-ui-react";

class SearchBusinessForm extends React.Component {
  state = {
    query: "",
    loading: false,
    options: [],
    businesses: {}
  };

  onBusinessSelect = business => {
    this.setState({ business });
    console.log(business._id);
    axios
      .get(`http://127.0.0.1:5000/api/v2/businesses/${business._id}`)
      .then(res => res.data.name)
      .then(name => this.setState({ business: { ...business, name } }));
  };

  onSearchChange = (e, data) => {
    clearTimeout(this.timer);
    this.setState({
      query: data
    });
    this.timer = setTimeout(this.fetchOptions, 1000);
  };

  onChange = (e, data) => {
    this.setState({ query: data.value });
    this.onBusinessSelect(this.state.businesses[data.value]);
  };

  fetchOptions = () => {
    console.log(this.state.query.searchQuery);
    if (!this.state.query.searchQuery) return;
    this.setState({ loading: true });
    axios
      .get(
        `http://127.0.0.1:5000/api/v2/businesses/search?q=${
          this.state.query.searchQuery
        }`
      )
      .then(res => res.data.businesses)
      .then(businesses => {
        const options = [];
        const businessesHash = {};
        businesses.forEach(business => {
          businessesHash[business.Business_name] = business;
          options.push({
            key: business._id,
            value: business.name,
            text: business.name
          });
        });
        this.setState({ loading: false, options, businesses: businessesHash });
      });
  };

  render() {
    return (
      <Form>
        <Dropdown
          search
          fluid
          placeholder="Search for a business by title"
          value={this.state.query}
          onSearchChange={this.onSearchChange}
          options={this.state.options}
          loading={this.state.loading}
          onChange={this.onChange}
        />
      </Form>
    );
  }
}

// SearchBusinessForm.propTypes = {
//   onBusinessSelect: PropTypes.func.isRequired
// };

export default SearchBusinessForm;
