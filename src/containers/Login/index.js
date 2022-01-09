import React from "react";
import { Row, Col, Button } from "react-materialize";
import "./index.css";

const Login = () => {
  return (
    <div className="login">
      <Row className="header">
        <Col>
          <Row
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "0px",
            }}
          >
            <div className="avatar">
              <img alt="" src="avatar.png" />
            </div>
          </Row>
          <Row>
            <span className="title">Ben Burns</span>
          </Row>
          <Row>
            <span className="sub-title">
              Select date & time{" "}
              <span className="material-icons">arrow_forward</span>
              <span style={{ color: "#BEC2C9" }}> Payment </span>
            </span>
          </Row>
        </Col>
      </Row>
      <Row className="body">
        <Col s={4} offset={"s4"}>
          <h6> Your info </h6>

          <label for="input_name">Name</label>
          <div class="input-field">
            <input type="text" id="input_name" placeholder="Enter your name" />
          </div>
          <label for="input_last_name">Last Name</label>
          <div class="input-field">
            <input
              type="text"
              id="input_last_name"
              placeholder="Enter your last name"
            />
          </div>
          <label for="input_email">Email</label>
          <div class="input-field">
            <input
              type="text"
              id="input_email"
              placeholder="Enter your email"
            />
          </div>

          <h6> Select Payment </h6>
          <Row
            style={{
              display: "flex",
              paddingLeft: "0.75rem",
              paddingTop: "0.75rem",
              marginBottom: "0px",
              alignItems: "center",
            }}
          >
            <input name="card" type="radio" />
            <span></span>
            <input
              type="text"
              id="input_card"
              placeholder="Card Number"
              style={{ width: "80%" }}
            />
          </Row>
          <Row
            style={{
              display: "flex",
              paddingLeft: "0.75rem",
              paddingTop: "0.75rem",
              marginBottom: "0px",
            }}
          >
            <input name="paypal" type="radio" checked />
            <span></span>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img src="/paypal.svg" alt="paypal" />
              <span className="description">
                You'll be redirected to paypal.com
              </span>
            </div>
          </Row>
          <Row
            style={{
              paddingLeft: "0.75rem",
              marginTop: "26px"
            }}
          >
            <span className="description">
              By pledging, you agree with Lynq <a href="#">Terms of Use</a>,
              <a href="#"> Privacy Policy</a> and <a href="#">Cookie Policy</a>
            </span>
          </Row>
        </Col>
      </Row>
      <Row className="footer">
        <Button>Pay $75</Button>
      </Row>
    </div>
  );
};

export default Login;
