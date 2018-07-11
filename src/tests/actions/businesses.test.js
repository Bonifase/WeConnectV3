import * as actions from "../../actions";
import * as types from "../../actions";

describe("Get businesses action works", () => {
  it("Should return a list businesses", () => {
    const businesses = { businesses: [{ name: "safaricom" }] };
    const expectedAction = {
      type: types.SET_BUSINESSES,
      businesses
    };
    expect(actions.setBusinesses(businesses)).toEqual(expectedAction);
  });
});
describe("Get one business action works", () => {
  it("Should return a single business", () => {
    const business = { name: "safaricom" };
    const expectedAction = {
      type: types.BUSINESS_FETCHED,
      business
    };
    expect(actions.businessFetched(business)).toEqual(expectedAction);
  });
});
describe("Update business action works", () => {
  it("Should fire update a business function", () => {
    const business = { name: "safaricom" };
    const expectedAction = {
      type: types.BUSINESS_UPDATED,
      business
    };
    expect(actions.businessUpdated(business)).toEqual(expectedAction);
  });
});
describe("Delete a business", () => {
  it("Should fire delete business action", () => {
    const businessId = 1;
    const expectedAction = {
      type: types.BUSINESS_DELETED,
      businessId
    };
    expect(actions.businessDeleted(businessId)).toEqual(expectedAction);
  });
});
describe("Add business review action works", () => {
  it("Should fire review added action", () => {
    const review = { body: "cool" };
    const expectedAction = {
      type: types.REVIEW_ADDED,
      review
    };
    expect(actions.reviewAdded(review)).toEqual(expectedAction);
  });
});
describe("Test if filter business action works", () => {
  it("Should fire filtered business action", () => {
    const filteredBusinesses = { businesses: [{ name: "safaricom" }] };
    const expectedAction = {
      type: types.FILTERED_BUSINESSES,
      filteredBusinesses
    };
    expect(actions.filteredBusinesses(filteredBusinesses)).toEqual(
      expectedAction
    );
  });
});
