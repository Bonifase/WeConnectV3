export const SET_BUSINESSES = "SET_BUSINESSES";
export const BUSINESS_UPDATED = "BUSINESS_UPDATED";
export const BUSINESS_FETCHED = "BUSINESS_FETCHED";
export const BUSINESS_DELETED = "BUSINESS_DELETED";
export const REVIEW_ADDED = "REVIEW_ADDED";
export const SET_REVIEWS = "SET_REVIEWS";

function handleResponce(response) {
  if (response.ok) {
    return response.json();
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
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
  console.log("this is a token", token);
  return dispatch => {
    return fetch("http://127.0.0.1:5000/api/v2/businesses", {
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
    return fetch(`http://127.0.0.1:5000/api/v2/businesses/${data._id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        Authorization: "Bearer " + token,
        "content-Type": "application/json"
      }
    }).then(data => dispatch(businessUpdated(data)));
  };
}
export function deleteBusiness(id, weconnectJWT) {
  let token = JSON.parse(localStorage.getItem("weconnectJWT"));
  console.log("this is a id", id);
  return dispatch => {
    return fetch(`http://127.0.0.1:5000/api/v2/businesses/${id}`, {
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
    fetch("http://127.0.0.1:5000/api/v2/businesses")
      .then(res => res.json())
      .then(data => dispatch(setBusinesses(data.businesses)));
  };
}
export function fetchBusiness(id) {
  return dispatch => {
    fetch(`http://127.0.0.1:5000/api/v2/businesses/${id}`)
      .then(res => res.json())
      .then(data => dispatch(businessFetched(data.business)));
  };
}
export function addReview(data, _id) {
  let token = JSON.parse(localStorage.getItem("weconnectJWT"));
  return dispatch => {
    return fetch(`http://127.0.0.1:5000/api/v2/${_id}/reviews`, {
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
  console.log("this is a token", _id);
  return dispatch => {
    fetch(`http://127.0.0.1:5000/api/v2/${_id}/reviews`)
      .then(res => res.json())
      .then(data => dispatch(setReviews(data.Reviews)));
  };
}
