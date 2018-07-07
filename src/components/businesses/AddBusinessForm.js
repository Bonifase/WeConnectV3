import React from "react";
import { Link } from "react-router-dom";
import { Form, Button, Message } from "semantic-ui-react";
import InlineError from "../messages/InlineError";
import "../businesses/BusinessForm.css";

const formInputStyle = {
  color: "white",
  fontSize: "15px",
  letterSpacing: "1px"
};

const AddBusinessForm = props => {
  const { data, errors, loading } = props.state;
  console.log("errors", errors);
  return (
    <section className="showcase">
      <div>
        <div className="row text-center">
          <div className="showcase-content">
            <div class="ui two column middle aligned very relaxed stackable grid">
              <div class="column">
                <h4>Post a business</h4>
                <Form onSubmit={props.onSubmit} loading={loading}>
                  {errors.message && (
                    <Message negative>
                      <Message.Header> {errors.message}</Message.Header>
                    </Message>
                  )}
                  <Form.Field error={!!errors.name}>
                    <label htmlFor="name">Business Name</label>
                    <div class="ui left icon input">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Business name"
                        value={data.username}
                        onChange={props.onChange}
                      />
                      <i class="home icon" />
                    </div>
                    {errors.name && <InlineError text={errors.name} />}
                  </Form.Field>

                  <Form.Field error={!!errors.category}>
                    <label htmlFor="category">Busines Category</label>
                    <div class="ui left icon input">
                      <input
                        type="text"
                        id="category"
                        name="category"
                        placeholder="Business category"
                        value={data.email}
                        onChange={props.onChange}
                      />
                      <i class="industry icon" />
                    </div>
                    {errors.category && <InlineError text={errors.category} />}
                  </Form.Field>

                  <Form.Field error={!!errors.location}>
                    <label htmlFor="location">Business Location</label>
                    <div class="ui left icon input">
                      <input
                        type="text"
                        id="location"
                        name="location"
                        placeholder="Business location"
                        value={data.location}
                        onChange={props.onChange}
                      />
                      <i class="marker icon" />
                    </div>
                    {errors.location && <InlineError text={errors.location} />}
                  </Form.Field>
                  <Form.Field error={!!errors.description}>
                    <label htmlFor="description"> Business Description</label>
                    <div class="ui left icon input">
                      <input
                        type="text"
                        id="description"
                        name="description"
                        placeholder="Business description"
                        value={data.description}
                        onChange={props.onChange}
                      />
                      <i class="comment alternate icon" />
                    </div>
                  </Form.Field>
                  <Button primary> Save </Button>
                </Form>
              </div>
              <div class="center aligned column">
                <div class="ui big green labeled icon button">
                  <i class="tasks icon" />
                  <a href="dashboard">Explore</a>
                </div>
              </div>
            </div>
            <div style={formInputStyle}>
              <p style={formInputStyle}>
                <Link style={formInputStyle} to="/businesses">
                  <i className="backward" />
                  Back to businesses{" "}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddBusinessForm;
