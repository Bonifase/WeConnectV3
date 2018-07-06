import * as actions from "../../actions/FlashMessages";
import * as types from "../../types";

describe("flashMessages", () => {
  describe("add flash Message creator", () => {
    it("should create an action to add a flash message", () => {
      const message = {
        type: "success",
        text: "your action was successful, proceed"
      };
      const expectedAction = {
        type: types.ADD_FLASH_MESSAGE,
        message
      };
      expect(actions.addFlashMessage(message)).toEqual(expectedAction);
    });
  });
  describe("delete flash Message creator", () => {
    it("should create an action to delete a flash message", () => {
      const id = "ub123e";
      const expectedAction = {
        type: types.DELETE_FLASH_MESSAGE,
        id
      };
      expect(actions.deleteFlashMessage(id)).toEqual(expectedAction);
    });
  });
});
