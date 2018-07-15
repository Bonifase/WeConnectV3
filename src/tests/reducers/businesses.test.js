import * as actions from "../../actions";
import businesses from "../../reducers/businesses";

describe("eventsReducer", () => {
  it("should retrieve all the business array when SET_BUSINESS is fired", () => {
    const initialState = [{ name: "some name" }];
    const business = { name: "another name" };
    const action = actions.fetchBusinesses(business);
    const newState = businesses(initialState, action);
    expect(newState.length).toEqual(1);
  });
  it("should add all events to the store when SET_BUSINESSES is fired", () => {
    const initialState = [];
    const business = [{ name: "some name" }, { name: "another name" }];
    const action = actions.businessFetched(business);
    const newState = businesses(initialState, action);
    expect(newState.length).toEqual(1);
  });
});
