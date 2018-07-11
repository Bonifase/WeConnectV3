/* global React :true */
/* global shallow :true */
/* global describe :true */
/* global Enzyme Adapter options :true */
/* global it :true */
/* global expect :true */
/* eslint no-undef: "error" */
import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import LoginForm from "../../components/login/LoginForm";
import { validate } from "../../components/login/LoginPage";

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    state: {
      data: {
        email: "",
        password: ""
      },
      loading: false,
      errors: {}
    },
    onSubmit: () => {},
    onChange: () => {}
  };
  return shallow(<LoginForm {...props} />, options.get());
}

describe("Login form component", () => {
  it("should have one Forgot password", () => {
    const wrapper = setup();
    expect(wrapper.find("Link").length).toEqual(1);
  });
  it("should have one buttons", () => {
    const wrapper = setup();
    expect(wrapper.find("Button").length).toEqual(1);
  });
  // in the next two tests i have a problem in accessing the props passed to the component
  it.skip("should have no data in state", () => {
    const wrapper = setup();
    expect(wrapper.prop("state").data.email).toBe("");
    expect(wrapper.prop("state").data.password).toBe("");
  });
  it.skip("should have a submit prop", () => {
    const wrapper = setup();
    expect(wrapper.prop("onSubmit")).toBeDefined();
  });
});

describe("login validate function", () => {
  it("should return an error object when input fields have no data", () => {
    const data = {
      email: "",
      password: ""
    };
    const errors = validate(data);
    expect(errors.email).toBe("Can't be blank");
    expect(errors.password).toBe("Can't be blank");
  });
});
