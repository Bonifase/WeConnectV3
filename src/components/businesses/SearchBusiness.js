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

  onSearchChange = (e, data) => {
    clearTimeout(this.timer);
    this.setState({
      query: data
    });
    this.timer = setTimeout(this.fetchOptions, 1000);
  };

  onChange = (e, data) => {
    this.setState({ query: data.value });
    this.props.onBookSelect(this.state.businesses[data.value]);
  };

  fetchOptions = () => {
    if (!this.state.query) return;
    this.setState({ loading: true });
    axios
      .get(`http://127.0.0.1:5000/api/v2/businesses/search'?q=${this.state.query}`)
      .then(res => res.data.businesses)
      .then(businesses => {
        const options = [];
        const businessesHash = {};
        businesses.forEach(business => {
          businessesHash[business.id] = business;
          options.push({
            key: business.id,
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
        <div class="item">
            <div class="ui icon input">
                <input search
          fluid
          placeholder="Search for a business by name"
          value={this.state.query}
          onSearchChange={this.onSearchChange}
          options={this.state.options}
          loading={this.state.loading}
          onChange={this.onChange}
        />
                <i class="search link icon"></i>
            </div>
        </div>
        {/* <Dropdown
          search
          fluid
          placeholder="Search for a business by name"
          value={this.state.query}
          onSearchChange={this.onSearchChange}
          options={this.state.options}
          loading={this.state.loading}
          onChange={this.onChange}
        /> */}
      </Form>
    );
  }
}

SearchBusinessForm.propTypes = {
  onBookSelect: PropTypes.func.isRequired
};

export default SearchBusinessForm;