export const SET_BUSINESSES = "SET_BUSINESSES";
export const BUSINESS_UPDATED = "BUSINESS_UPDATED";
export const BUSINESS_FETCHED = "BUSINESS_FETCHED";

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
export function businessFetched(business) {
  return {
    type: BUSINESS_FETCHED,
    business
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
  console.log("this is a token", token);
  return dispatch => {
    return fetch("http://127.0.0.1:5000/api/v2/businesses/${data._id}", {
      method: "put",
      body: JSON.stringify(data),
      headers: {
        Authorization: "Bearer " + token,
        "content-Type": "application/json"
      }
    })
      .then(handleResponce)
      .then(data => dispatch(businessUpdated));
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
    fetch("http://127.0.0.1:5000/api/v2/businesses/${id}")
      .then(res => res.json())
      .then(data => dispatch(businessFetched(data.businesses)));
  };
}
