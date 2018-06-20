import React from 'react';

import { 
    Button,
    Input,
    Modal,
  } from 'semantic-ui-react';
  
  export default class DeleteBusiness extends React.Component {
    state = { open: false };
    handleRef = component => (this.ref = component);
    open = () => this.setState({ open: true }, () => this.ref.focus());
    close = () => this.setState({ open: false });
  
    render() {
      return (
          <div>
        <button class="ui button yellow create_btn" type="button" id="test">       Delete This Business</button>
        <div class="ui modal test">
            <i class="close icon"></i>
            <div class="header">
                Profile Picture
            </div>
            <div class="image content">
                <div class="ui medium image">
                <img src="https://semantic-ui.com/images/avatar2/large/rachel.png"/>
                </div>
                <div class="description">
                <div class="ui header">We've auto-chosen a profile image for you.</div>
                <p>We've grabbed the following image from the <a href="https://www.gravatar.com" target="_blank">gravatar</a> image associated with your registered e-mail address.</p>
                <p>Is it okay to use this photo?</p>
                </div>
            </div>
            <div class="actions">
                <div class="ui black deny button">
                Nope
                </div>
                <div class="ui positive right labeled icon button">
                Yep, that's me
                <i class="checkmark icon"></i>
                </div>
            </div>
            </div>
            {/* <script>$(function(){
                $("#test").click(function(){
                    $(".test").modal('show');});
	$(".test").modal({ closable: true});
});</script> */}
            </div>
      )
    }
  }
  