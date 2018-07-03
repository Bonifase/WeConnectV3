export default (error = "", action) => {
  switch (action.type) {
    case "ERROR_OCCURED":
      return action.error;
    default:
      return error;
  }
};
