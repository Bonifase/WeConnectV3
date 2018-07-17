/* global sinon :true */
/* global mount :true */
/* global describe :true */
/* global it :true */
/* global expect :true */
/* eslint no-undef: "error" */
import React from "react";
import AddBusinessForm from "../../components/businesses/AddBusinessForm";

const fakeSubmit = sinon.spy();
const fakeOnChange = sinon.spy();
const fakeDismiss = sinon.spy();

const emptyErrorObject = {};
const ErrorObject = {
  message: "server unavailabe",
  name: "name error",
  description: "description error",
  category: "category error",
  location: "location error"
};

function setup(errors) {
  const props = {
    state: {
      data: {
        name: "",
        description: "",
        category: "",
        location: ""
      },
      loading: false,
      errors
    },
    onSubmit: fakeSubmit,
    onChange: fakeOnChange,
    handleDismiss: fakeDismiss,
    buttonText: "Create"
  };
  return mount(<AddBusinessForm {...props} />);
}

describe("AddBusinessForm form component", () => {
  describe("form content", () => {
    it("should have one form element", () => {
      const wrapper = setup(emptyErrorObject);
      expect(wrapper.find("form").length).toEqual(1);
    });
    it("should have one div with a class column", () => {
      const wrapper = setup(emptyErrorObject);
      expect(wrapper.find("div.column").length).toEqual(3);
    });
    it("should have one button with text save", () => {
      const wrapper = setup(emptyErrorObject);
      expect(wrapper.find("button").length).toEqual(1);
      expect(wrapper.find("button").text()).toBe(" Save ");
    });
  });
  describe("form behaviour", () => {
    it("should have an error message component when an error occurs", () => {
      const wrapper = setup(ErrorObject);
      expect(wrapper.find("div.ui.negative.message").length).toEqual(1);
    });
    it("should have span elements on each input with  an error", () => {
      const wrapper = setup(ErrorObject);
      expect(wrapper.find("span").length).toEqual(3);
    });
  });
});
