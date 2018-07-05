import axios from "axios";
export const SET_BUSINESSES = "SET_BUSINESSES";
export const BUSINESS_UPDATED = "BUSINESS_UPDATED";
export const BUSINESS_FETCHED = "BUSINESS_FETCHED";
export const BUSINESS_DELETED = "BUSINESS_DELETED";
export const REVIEW_ADDED = "REVIEW_ADDED";
export const SET_REVIEWS = "SET_REVIEWS";
export const FILTERED_BUSINESSES = "FILTERED_BUSINESSES";

function handleResponce(response) {
  if (response.ok) {
    return response.json();
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

export function errorOccured(error) {
  return {
    type: "ERROR_OCCURED",
    error
  };
}

export function setBusinesses(businesses) {
  return {
    type: SET_BUSINESSES,
    businesses
  };
}
export function businessUpdated(business) {
  return {
    type: BUSINESS_UPDATED,
    business
  };
}
export function businessDeleted(businessId) {
  return {
    type: BUSINESS_DELETED,
    businessId
  };
}
export function filteredBusinesses(filteredBusinesses) {
  return {
    type: FILTERED_BUSINESSES,
    filteredBusinesses
  };
}

export function businessFetched(business) {
  return {
    type: BUSINESS_FETCHED,
    business
  };
}

export function reviewAdded(review) {
  return {
    type: REVIEW_ADDED,
    review
  };
}
export function setReviews(Reviews) {
  return {
    type: SET_REVIEWS,
    Reviews
  };
}
export function saveBusiness(data, weconnectJWT) {
  let token = JSON.parse(localStorage.getItem("weconnectJWT"));
  return dispatch => {
    return fetch("https://weconnectv2.herokuapp.com/api/v2/businesses", {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        Authorization: "Bearer " + token,
        "content-Type": "application/json"
      }
    }).then(handleResponce);
  };
}
export function updateBusiness(data, weconnectJWT) {
  let token = JSON.parse(localStorage.getItem("weconnectJWT"));
  console.log("this is a token", data);
  return dispatch => {
    return axios({
      method: "PUT",
      url: `https://weconnectv2.herokuapp.com/api/v2/businesses/${data._id}`,
      data: JSON.stringify(data),
      headers: {
        Authorization: "Bearer " + token,
        "content-Type": "application/json"
      }
    }).then(data => dispatch(businessUpdated(data.message)));
    // .catch(error => {
    //   dispatch(
    //     errorOccured(
    //       error.response.msg
    //         ? error.response.msg
    //         : error.response.message
    //     )
    //   );
    // });
  };
}
export function deleteBusiness(id, weconnectJWT) {
  let token = JSON.parse(localStorage.getItem("weconnectJWT"));
  console.log("this is a id", id);
  return dispatch => {
    return fetch(`https://weconnectv2.herokuapp.com/api/v2/businesses/${id}`, {
      method: "delete",
      headers: {
        Authorization: "Bearer " + token,
        "content-Type": "application/json"
      }
    })
      .then(handleResponce)
      .then(data => dispatch(businessDeleted(id)));
  };
}

export function fetchBusinesses() {
  return dispatch => {
    fetch("https://weconnectv2.herokuapp.com/api/v2/businesses")
      .then(res => res.json())
      .then(data => {
        let businesses = data.businesses;
        if (!businesses) businesses = [];

        dispatch(setBusinesses(businesses));
      });
  };
}
export function fetchBusiness(id) {
  console.log("this is me", id);
  return dispatch => {
    fetch(`https://weconnectv2.herokuapp.com/api/v2/businesses/${id}`)
      .then(res => res.json())
      .then(data => dispatch(businessFetched(data.business)));
  };
}
export function addReview(data, _id) {
  let token = JSON.parse(localStorage.getItem("weconnectJWT"));
  return dispatch => {
    return fetch(`https://weconnectv2.herokuapp.com/api/v2/${_id}/reviews`, {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        Authorization: "Bearer " + token,
        "content-Type": "application/json"
      }
    })
      .then(handleResponce)
      .then(data => dispatch(reviewAdded));
  };
}
export function fetchReviews(_id) {
  return dispatch => {
    fetch(`https://weconnectv2.herokuapp.com/api/v2/${_id}/reviews`)
      .then(res => res.json())
      .then(data => dispatch(setReviews(data.Reviews)));
  };
}
export function getFilteredBusinesses(query, category, location) {
  if (query) {
    return dispatch => {
      fetch(
        `https://weconnectv2.herokuapp.com/api/v2/businesses/search?${query}`
      )
        .then(response => response.json())
        .then(data => dispatch(filteredBusinesses(data.filteredBusinesses)));
    };
  } else if (category) {
    return dispatch => {
      fetch(
        `https://weconnectv2.herokuapp.com/api/v2/businesses/search?${category}`
      )
        .then(response => response.json())
        .then(data => dispatch(filteredBusinesses(data.filteredBusinesses)));
    };
  } else if (location) {
    return dispatch => {
      fetch(
        `https://weconnectv2.herokuapp.com/api/v2/businesses/search?${location}`
      )
        .then(response => response.json())
        .then(data => dispatch(filteredBusinesses(data.filteredBusinesses)));
    };
  }
}
