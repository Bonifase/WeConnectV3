import React, { Component } from "react";
import { connect } from "react-redux";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import BusinessList from "../businesses/BusinessList";
import PropTypes from "prop-types";
import { Comment } from "semantic-ui-react";
import { fetchBusinesses, deleteBusiness } from "../../actions";
import TopNavigationBar from "../layout/menu";
import FlashMessagesList from "../messages/FlashMessagesList";
import Search from "../businesses/SearchBusiness";
import "./Dashboard.css";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      searching: null
    };
  }
  componentWillMount() {
    let page = "page=" + this.state.page;
    this.props.fetchBusinesses(page);
  }
  handleClick = page => {
    if (this.state.searching) {
      // let page = "page=" + this.state.page;
      this.props.fetchBusinesses("page=" + page);
    } else {
      // let page = "page=" + this.state.page;
      this.props.fetchBusinesses("page=" + page);
    }
  };

  componentDidMount = () => {
    let page = "page=" + this.state.page;
    this.props.fetchBusinesses(page);
  };
  render() {
    const { pagination } = this.props;
    return (
      <div>
        <section className="showcase">
          <div className="row text-center">
            <div className="showcase-content">
              <FlashMessagesList />
              <Comment.Metadata>
                {this.props.isAuthenticated ? (
                  <div>
                    You are logged in as {localStorage.getItem("username")}
                  </div>
                ) : (
                  <div>Login to unlock awesomeness</div>
                )}
              </Comment.Metadata>
              <TopNavigationBar />
              <p>
                <h2> Reviewed Businesses </h2>
              </p>

              <Search />
              <br />
              <BusinessList
                paginatedItems={this.props.paginatedItems}
                filteredBusinesses={this.props.filteredBusinesses}
                businesses={this.props.businesses}
                deleteBusiness={this.props.deleteBusiness}
              />
              <Pagination className="pages m-flex flex-accross">
                <PaginationItem>
                  <PaginationLink previous href={pagination.Previous_page} />
                </PaginationItem>
                {pagination.total_pages > 1
                  ? Array.apply(null, { length: pagination.total_pages })
                      .map(Number.call, Number)
                      .map(i => (
                        <PaginationItem
                          onClick={() => this.handleClick(parseInt(i) + 1)}
                        >
                          <PaginationLink href={"#" + (i + 1)}>
                            {i + 1}
                          </PaginationLink>
                        </PaginationItem>
                      ))
                  : null}
                <PaginationItem>
                  <PaginationLink next href="#" />
                </PaginationItem>
              </Pagination>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

Dashboard.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  businesses: PropTypes.array.isRequired,
  fetchBusinesses: PropTypes.func.isRequired,
  deleteBusiness: PropTypes.func.isRequired,
  pagination: PropTypes.object.isRequired
};
function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.access_token,
    businesses: state.businesses,
    user: state.user.username,
    filteredBusinesses: state.filteredBusinesses,
    pagination: state.pagination
  };
}
export default connect(
  mapStateToProps,
  { fetchBusinesses, deleteBusiness }
)(Dashboard);
