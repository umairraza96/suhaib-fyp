import React from "react";
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import Footer from "components/Footer/Footer.js";
import NavigationBar from "components/Navbars/navbar";
import axios from "axios";
import { useDispatch } from "react-redux";
import { signInSuccess } from "redux/user/user.actions";
import { useHistory } from "react-router-dom";

export default function RegisterPage() {
  const [squares1to6, setSquares1to6] = React.useState("");
  const [squares7and8, setSquares7and8] = React.useState("");
  const [fullNameFocus, setFullNameFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  const [userDetails, setUserDetails] = React.useState({});
  const [showSignInComponent, setShowSignInComponent] = React.useState(false);

  const dispatch = useDispatch();
  const history = useHistory();
  React.useEffect(() => {
    document.body.classList.toggle("register-page");
    document.documentElement.addEventListener("mousemove", followCursor);
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("register-page");
      document.documentElement.removeEventListener("mousemove", followCursor);
    };
  }, []);
  const followCursor = (event) => {
    let posX = event.clientX - window.innerWidth / 2;
    let posY = event.clientY - window.innerWidth / 6;
    setSquares1to6(
      "perspective(500px) rotateY(" +
        posX * 0.05 +
        "deg) rotateX(" +
        posY * -0.05 +
        "deg)"
    );
    setSquares7and8(
      "perspective(500px) rotateY(" +
        posX * 0.02 +
        "deg) rotateX(" +
        posY * -0.02 +
        "deg)"
    );
  };
  const submitDetails = async () => {
    if (userDetails.userName && userDetails.password && userDetails.email) {
      try {
        const response = await axios.post("/api/user", userDetails);
        dispatch(signInSuccess(response.data));
        history.push("/landing-page");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const submitLogin = async () => {
    if (userDetails.password && userDetails.email) {
      try {
        const response = await axios.post("/api/authenticate", userDetails);
        if (response.data.userName) {
          dispatch(signInSuccess(response.data));
          history.push("/landing-page");
        } else alert(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <>
      <NavigationBar />
      {/* <ExamplesNavbar /> */}
      {/* <IndexNavbar/> */}
      <div className="wrapper">
        <div className="page-header">
          <div className="page-header-image" />
          <div className="content">
            <Container>
              {!showSignInComponent && (
                <Row>
                  <Col className="offset-lg-0 offset-md-3" lg="5" md="6">
                    <div
                      className="square square-7"
                      id="square7"
                      style={{ transform: squares7and8 }}
                    />
                    <div
                      className="square square-8"
                      id="square8"
                      style={{ transform: squares7and8 }}
                    />
                    <Card className="card-register">
                      <CardHeader>
                        <CardImg
                          alt="..."
                          src={
                            require("assets/img/square-purple-1.png").default
                          }
                        />
                        <CardTitle tag="h4" style={{ marginLeft: 1 }}>
                          Register
                        </CardTitle>
                      </CardHeader>
                      <CardBody>
                        <Form className="form">
                          <InputGroup
                            className={classnames({
                              "input-group-focus": fullNameFocus,
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-single-02" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Full Name"
                              type="text"
                              onFocus={(e) => setFullNameFocus(true)}
                              onBlur={(e) => setFullNameFocus(false)}
                              onChange={(e) =>
                                setUserDetails({
                                  ...userDetails,
                                  userName: e.target.value,
                                })
                              }
                            />
                          </InputGroup>
                          <InputGroup
                            className={classnames({
                              "input-group-focus": emailFocus,
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-email-85" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Email"
                              type="text"
                              onFocus={(e) => setEmailFocus(true)}
                              onBlur={(e) => setEmailFocus(false)}
                              onChange={(e) =>
                                setUserDetails({
                                  ...userDetails,
                                  email: e.target.value.toLowerCase(),
                                })
                              }
                            />
                          </InputGroup>
                          <InputGroup
                            className={classnames({
                              "input-group-focus": passwordFocus,
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-lock-circle" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Password"
                              type="password"
                              onFocus={(e) => setPasswordFocus(true)}
                              onBlur={(e) => setPasswordFocus(false)}
                              onChange={(e) =>
                                setUserDetails({
                                  ...userDetails,
                                  password: e.target.value,
                                })
                              }
                            />
                          </InputGroup>
                          <FormGroup className="text-right">
                            <Label
                              style={{ fontSize: 15, cursor: "pointer" }}
                              onClick={() => setShowSignInComponent(true)}
                            >
                              Already Have an account Sign in!
                            </Label>
                          </FormGroup>
                          <FormGroup check className="text-left ml-2">
                            <Label check>
                              <Input type="checkbox" />
                              <span className="form-check-sign" />I agree to the{" "}
                              <a
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                terms and conditions
                              </a>
                              .
                            </Label>
                          </FormGroup>
                        </Form>
                      </CardBody>
                      <CardFooter>
                        <Button
                          className="btn-round"
                          color="primary"
                          size="lg"
                          onClick={submitDetails}
                        >
                          Get Started
                        </Button>
                      </CardFooter>
                    </Card>
                  </Col>
                </Row>
              )}
              {/* Login */}
              {showSignInComponent && (
                <Row>
                  <Col className="offset-lg-0 offset-md-3" lg="5" md="6">
                    <div
                      className="square square-7"
                      id="square7"
                      style={{ transform: squares7and8 }}
                    />
                    <div
                      className="square square-8"
                      id="square8"
                      style={{ transform: squares7and8 }}
                    />
                    <Card className="card-register">
                      <CardHeader>
                        <CardImg
                          alt="..."
                          src={
                            require("assets/img/square-purple-1.png").default
                          }
                        />
                        <CardTitle tag="h4" style={{ marginLeft: 1 }}>
                          Login
                        </CardTitle>
                      </CardHeader>
                      <CardBody>
                        <Form className="form">
                          <InputGroup
                            className={classnames({
                              "input-group-focus": emailFocus,
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-email-85" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Email"
                              type="text"
                              onFocus={(e) => setEmailFocus(true)}
                              onBlur={(e) => setEmailFocus(false)}
                              onChange={(e) =>
                                setUserDetails({
                                  ...userDetails,
                                  email: e.target.value.toLowerCase(),
                                })
                              }
                            />
                          </InputGroup>
                          <InputGroup
                            className={classnames({
                              "input-group-focus": passwordFocus,
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-lock-circle" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Password"
                              type="password"
                              onFocus={(e) => setPasswordFocus(true)}
                              onBlur={(e) => setPasswordFocus(false)}
                              onChange={(e) =>
                                setUserDetails({
                                  ...userDetails,
                                  password: e.target.value,
                                })
                              }
                            />
                          </InputGroup>
                          <FormGroup className="text-right">
                            <Label
                              style={{ fontSize: 15, cursor: "pointer" }}
                              onClick={() => setShowSignInComponent(false)}
                            >
                              Don't have an account sign up!
                            </Label>
                          </FormGroup>
                        </Form>
                      </CardBody>
                      <CardFooter>
                        <Button
                          className="btn-round"
                          color="primary"
                          size="lg"
                          onClick={submitLogin}
                        >
                          Sign In
                        </Button>
                      </CardFooter>
                    </Card>
                  </Col>
                </Row>
              )}
              <div className="register-bg" />
              <div
                className="square square-1"
                id="square1"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-2"
                id="square2"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-3"
                id="square3"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-4"
                id="square4"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-5"
                id="square5"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-6"
                id="square6"
                style={{ transform: squares1to6 }}
              />
            </Container>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
