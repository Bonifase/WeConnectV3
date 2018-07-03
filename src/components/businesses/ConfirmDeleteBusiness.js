import React, { Component } from "react";
import { Button, Confirm } from "semantic-ui-react";
import { deleteBusiness } from "../../actions";

const inlineStyle = {
  modal: {
    marginTop: "50px !important",
    marginLeft: "50px",
    marginRight: "100px",
    display: ""
  }
};
class ConfirmDeleteBusiness extends Component {
  state = { open: false };

  show = () => this.setState({ open: true });
  handleConfirm = () => this.setState({ open: false });
  handleCancel = () => this.setState({ open: false });

  render() {
    return (
      <div>
        <Button className="ui basic button red" onClick={this.show}>
          Delete
        </Button>
        <Confirm
          open={this.state.open}
          header="Delete This Business"
          onCancel={this.handleCancel}
          onConfirm={() => deleteBusiness(this.state.business._id)}
        />
      </div>
    );
  }
}

export default ConfirmDeleteBusiness;
