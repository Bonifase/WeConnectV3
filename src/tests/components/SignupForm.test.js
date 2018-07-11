import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ReactRouterEnzymeContext from "react-router-enzyme-context";
import SignupForm from "../../components/signup/SignupForm";
import { validate } from "../../components/login/LoginPage";

Enzyme.configure({ adapter: new Adapter() });

const fakeSubmit = sinon.spy();
const fakeOnChange = sinon.spy();

function setup() {
  const options = new ReactRouterEnzymeContext();
  const props = {
    state: {
      data: {
        username: "",
        email: "",
        password: "",
        confirm_password: ""
      },
      loading: false,
      errors: {}
    },
    onSubmit: fakeSubmit,
    onChange: fakeOnChange
  };
  return mount(<SignupForm {...props} />, options.get());
}

describe("SingupForm Component", () => {
  describe("form content", () => {
    it("should have four input fields", () => {
      const wrapper = setup();
      expect(wrapper.find("input").length).toEqual(4);
    });
    it("should have one submit  button", () => {
      const wrapper = setup();
      expect(wrapper.find("button").length).toEqual(1);
    });
    it("should have a submit prop", () => {
      const wrapper = setup();
      expect(wrapper.prop("onSubmit")).toBeDefined();
    });
    it("should have one one form element", () => {
      const wrapper = setup();
      expect(wrapper.find("form").length).toEqual(1);
    });
  });

  describe("signup validate function", () => {
    it("should return an error when a valid email is not supplied", () => {
      const data = {
        username: "bonifase",
        email: "bonifase",
        password: "",
        confirm_password: ""
      };
      const errors = validate(data);

      expect(errors.email).toBe("Invalid email");
    });
  });
  describe("signup form behaviour", () => {
    it("should call onsubmit when form is submitted", () => {
      const wrapper = setup();
      const form = wrapper.find("form");
      form.simulate("submit");
      expect(fakeSubmit.called).toBe(true);
    });
    it("should call onchange when user types on the input area", () => {
      const wrapper = setup();
      const form = wrapper.find("#username");
      form.simulate("change");
      expect(fakeOnChange.called).toBe(true);
    });
  });
});
