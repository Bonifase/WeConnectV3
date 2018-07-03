import React from "react";
import { shallow } from "enzyme";
import Body from "../../components/body/Body";

// describe what we are testing
describe("Landing Page Component", () => {
  // make our assertion and what we expect to happen
  it("should render Welcome text", () => {
    expect(
      shallow(<Body />)
        .find("span.primary-text")
        .exists()
    ).toBe(true);
  });
  it("should render weconnect description", () => {
    expect(
      shallow(<Body />)
        .find("h2")
        .exists()
    ).toBe(true);
  });
  it("should render getting started Button", () => {
    expect(
      shallow(<Body />)
        .find("button.button1")
        .exists()
    ).toBe(true);
  });
  it("should render Login link in the section", () => {
    expect(
      shallow(<Body />)
        .find("a")
        .exists()
    ).toBe(true);
  });
  it("should render SignUp button icon", () => {
    expect(
      shallow(<Body />)
        .find("i.signup")
        .exists()
    ).toBe(true);
  });
  it("should render middle section", () => {
    expect(
      shallow(<Body />)
        .find("section.showcase")
        .exists()
    ).toBe(true);
  });
  it("should render collumn section", () => {
    expect(
      shallow(<Body />)
        .find("section.showcase")
        .exists()
    ).toBe(true);
  });
  it("should render content with blue backround", () => {
    expect(
      shallow(<Body />)
        .find("div.showcase-content")
        .exists()
    ).toBe(true);
  });
});
