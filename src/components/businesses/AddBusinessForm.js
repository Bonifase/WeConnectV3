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
  return (
    <section className="showcase">
      <div>
        <div className="row text-center">
          <div className="showcase-content">
            <div className="ui two column middle aligned very relaxed stackable grid">
              <div className="column">
                <h4>Post a business</h4>
                <Form onSubmit={props.onSubmit} loading={loading}>
                  {errors.message && (
                    <Message negative>
                      <Message.Header> {errors.message}</Message.Header>
                    </Message>
                  )}
                  <Form.Field error={!!errors.name}>
                    <label htmlFor="name">Business Name</label>
                    <div className="ui left icon input">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Business name"
                        value={data.username}
                        onChange={props.onChange}
                      />
                      <i className="home icon" />
                    </div>
                    {errors.name && <InlineError text={errors.name} />}
                  </Form.Field>

                  <Form.Field error={!!errors.category}>
                    <label htmlFor="category">Busines Category</label>
                    <div className="ui left icon input">
                      <input
                        type="text"
                        id="category"
                        name="category"
                        placeholder="Business category"
                        value={data.email}
                        onChange={props.onChange}
                      />
                      <i className="industry icon" />
                    </div>
                    {errors.category && <InlineError text={errors.category} />}
                  </Form.Field>

                  <Form.Field error={!!errors.location}>
                    <label htmlFor="location">Business Location</label>
                    <div className="ui left icon input">
                      <input
                        type="text"
                        id="location"
                        name="location"
                        placeholder="Business location"
                        value={data.location}
                        onChange={props.onChange}
                      />
                      <i className="marker icon" />
                    </div>
                    {errors.location && <InlineError text={errors.location} />}
                  </Form.Field>
                  <Form.Field error={!!errors.description}>
                    <label htmlFor="description"> Business Description</label>
                    <div className="ui left icon input">
                      <input
                        type="text"
                        id="description"
                        name="description"
                        placeholder="Business description"
                        value={data.description}
                        onChange={props.onChange}
                      />
                      <i className="comment alternate icon" />
                    </div>
                  </Form.Field>
                  <Button primary> Save </Button>
                </Form>
              </div>
              <div className="center aligned column">
                <div className="ui big green labeled icon button">
                  <i className="tasks icon" />
                  <a href="dashboard">Explore</a>
                </div>
              </div>
            </div>
            <div style={formInputStyle}>
              <p style={formInputStyle}>
                <a style={formInputStyle} href="/businesses">
                  <i className="backward" />
                  Back to businesses{" "}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddBusinessForm;
