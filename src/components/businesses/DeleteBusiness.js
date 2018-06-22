import React, { Component } from 'react';
import { Button, Modal } from 'semantic-ui-react';

class ModalDeleteBusiness extends Component {
  state = { open: false }

  show = size => () => this.setState({ size, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, size } = this.state

    return (
      <div >
        
        <Button onClick={this.show('small')}>Delete</Button>
       

        <Modal className="modal" size={size} open={open} onClose={this.close}>
          <Modal.Header>Delete This Business</Modal.Header>
          <Modal.Content>
            <p>Are you sure you want to delete your business?</p>
          </Modal.Content>
          <Modal.Actions>
            <Button negative>No</Button>
            <Button positive icon='checkmark' labelPosition='right' content='Yes' />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default ModalDeleteBusiness
