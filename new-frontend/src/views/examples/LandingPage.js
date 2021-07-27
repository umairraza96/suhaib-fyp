import React from "react";
// react plugin used to create charts
import { Line } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

import Club from "../../assets/img/club.jpg";
import Golf from "../../assets/img/golf.jpg";
import Swim from "../../assets/img/swimmingpool.jpg";
import Chalet from "../../assets/img/chalet.jpeg";
import CreakClub from "../../assets/img/creekclub.png";
// core components
import Footer from "components/Footer/Footer.js";

import bigChartData from "variables/charts.js";
import NavigationBar from "components/Navbars/navbar";
import SkateImage from "assets/img/skating.svg";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchClubSuccess } from "redux/clubs/club.actions";
export default function LandingPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const fetchAllClubs = async () => {
    try {
      const response = await axios.get("/api/clubs");
      console.log(response);
      dispatch(fetchClubSuccess(response.data));
    } catch (error) {
      console.log(error);
    }
  };
  const clubs = useSelector((state) => state.clubs);
  React.useEffect(() => {
    fetchAllClubs();
    document.body.classList.toggle("landing-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  }, []);
  return (
    <>
      {/* <ExamplesNavbar /> */}
      <NavigationBar />
      <div className="wrapper">
        <div className="page-header">
          <img
            alt="..."
            className="path"
            src={require("assets/img/blob.png").default}
          />
          <img
            alt="..."
            className="path2"
            src={require("assets/img/path2.png").default}
          />
          <img
            alt="..."
            className="shapes triangle"
            src={require("assets/img/triunghiuri.png").default}
          />
          <img
            alt="..."
            className="shapes wave"
            src={require("assets/img/waves.png").default}
          />
          <img
            alt="..."
            className="shapes squares"
            src={require("assets/img/patrat.png").default}
          />
          <img
            alt="..."
            className="shapes circle"
            src={require("assets/img/cercuri.png").default}
          />
          <div className="content-center">
            <Row className="row-grid justify-content-between align-items-center text-left">
              <Col lg="6" md="6">
                <h1 className="text-white">
                  Welcome to CMS <br />
                  <span className="text-white"> Elite </span>
                </h1>
                <p className="text-white mb-3">
                  A platform molded for interaction and expriences
                  <br />
                  Lets start your adventure today.
                </p>
                <div className="btn-wrapper mb-3">
                  <p className="category text-success d-inline">From 10k/mo</p>
                  <Button
                    className="btn-link"
                    color="success"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    <i className="tim-icons icon-minimal-right" />
                  </Button>
                </div>
                <div className="btn-wrapper">
                  <div className="button-container">
                    <Button
                      className="btn-icon btn-simple btn-round btn-neutral"
                      color="default"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button
                      className="btn-icon btn-simple btn-round btn-neutral"
                      color="default"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-dribbble" />
                    </Button>
                    <Button
                      className="btn-icon btn-simple btn-round btn-neutral"
                      color="default"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-facebook" />
                    </Button>
                  </div>
                </div>
              </Col>
              <Col lg="5" md="5">
                <img alt="..." className="img-fluid" src={SkateImage} />
              </Col>
            </Row>
          </div>
        </div>
        <section className="section section-lg">
          <section className="section">
            <img
              alt="..."
              className="path"
              src={require("assets/img/path4.png").default}
            />
            <Container>
              <Row className="row-grid justify-content-between">
                <Col className="mt-lg-5" md="5">
                  <Row>
                    <Col className="px-2 py-2" lg="6" sm="12">
                      <Card className="card-stats">
                        <CardBody>
                          <Row>
                            <img src={Club} alt="asdasd"></img>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col className="px-2 py-2" lg="6" sm="12">
                      <Card className="card-stats upper bg-default">
                        <CardBody>
                          <Row>
                            <img src={Golf} />
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="px-2 py-2" lg="6" sm="12">
                      <Card className="card-stats">
                        <CardBody>
                          <Row>
                            <img src={Swim} />
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col className="px-2 py-2" lg="6" sm="12">
                      <Card className="card-stats">
                        <CardBody>
                          <Row>
                            <img src={Chalet} height="300px" width="250px" />
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <h1>
                      Facilities <br />
                      &<br />
                      Amenities
                    </h1>
                    <p>
                      Collaborated with multiple clubs throughout karachi
                      <br />
                      Provided with top quality services / facilities / food.{" "}
                      <br />
                      Enchancing modern day interaction / experiences. <br />
                      Changing the way technology is being consumed.
                    </p>
                    <br />
                    <p>
                      Country Club Experience / Golfing <br />
                      Swimming / Gym <br />
                      Dinning / Resorts
                    </p>
                    <br />
                    <a
                      className="font-weight-bold text-info mt-5"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Show all{" "}
                      <i className="tim-icons icon-minimal-right text-info" />
                    </a>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </section>
        <section className="section section-lg">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path4.png").default}
          />
          <img
            alt="..."
            className="path2"
            src={require("assets/img/path5.png").default}
          />
          <img
            alt="..."
            className="path3"
            src={require("assets/img/path2.png").default}
          />
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                <h1 className="text-center">Your best benefit</h1>
                <Row className="row-grid justify-content-center">
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-primary">
                        <i className="tim-icons icon-money-coins" />
                      </div>
                      <h4 className="info-title">Payment</h4>
                      <hr className="line-primary" />
                      <p>
                        Online payment of selected activities.
                        <br />
                        Easy Stripe Integrated Method.
                        <br />
                        100% Safe & Secure. <br />
                      </p>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-warning">
                        <i className="tim-icons icon-chart-pie-36" />
                      </div>
                      <h4 className="info-title">Planning</h4>
                      <hr className="line-warning" />
                      <p>
                        Planning your activities.
                        <br />
                        No waiting No Worries.
                        <br />
                        Fast and Smooth.
                        <br />
                      </p>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-success">
                        <i className="tim-icons icon-single-02" />
                      </div>
                      <h4 className="info-title">Interaction</h4>
                      <hr className="line-success" />
                      <p>
                        Interaction with new People. <br />
                        Embracing the culture. <br />
                        Opening new doors of opportunities. <br />
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section section-lg section-safe">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path5.png").default}
          />
          <Container>
            <Row className="row-grid justify-content-between">
              <Col md="6">
                <img
                  alt="..."
                  className="img-fluid floating"
                  src={require("assets/img/marina.jpg").default}
                />
                <Card className="card-stats bg-danger">
                  <CardBody>
                    <div className="justify-content-center">
                      <div className="numbers">
                        <CardTitle tag="p">Best</CardTitle>
                        <p className="card-category text-white">Food</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                <Card className="card-stats bg-info">
                  <CardBody>
                    <div className="justify-content-center">
                      <div className="numbers">
                        <CardTitle tag="p">Remarkable</CardTitle>
                        <p className="card-category text-white">View</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                <Card className="card-stats bg-default">
                  <CardBody>
                    <div className="justify-content-center">
                      <div className="numbers">
                        <CardTitle tag="p">Served</CardTitle>
                        <p className="card-category text-white"></p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <div className="px-md-5">
                  <hr className="line-success" />
                  <h3>Features</h3>
                  <p>
                    Best dishes served.
                    <br />
                    Hoteling like never before.
                    <br />
                    A sea side view to enjoy the evening.
                    <br />
                    Family & Friendly environment.
                    <br />
                  </p>
                  <ul className="list-unstyled mt-5">
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-success mb-2">
                          <i className="tim-icons icon-vector" />
                        </div>
                        <div className="ml-3">
                          <h6>Carefully crafted dishes</h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-success mb-2">
                          <i className="tim-icons icon-tap-02" />
                        </div>
                        <div className="ml-3">
                          <h6>Single click payment</h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-success mb-2">
                          <i className="tim-icons icon-single-02" />
                        </div>
                        <div className="ml-3">
                          <h6>Family & Friendly environment</h6>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section section-lg">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path4.png").default}
          />
          <img
            alt="..."
            className="path2"
            src={require("assets/img/path2.png").default}
          />
          <Col md="12">
            <Card className="card-chart card-plain">
              <CardHeader>
                <Row>
                  <Col className="text-left" sm="6">
                    <hr className="line-info" />
                    <h5 className="card-category">Work Life balance</h5>
                    <CardTitle tag="h2">Performance</CardTitle>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={bigChartData.data}
                    options={bigChartData.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </section>
        <section className="section section-lg section-coins">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path3.png").default}
          />
          <Container>
            <Row>
              <Col md="4">
                <hr className="line-info" />
                <h1>
                  Choose the club{" "}
                  <span className="text-info">that fits your needs</span>
                </h1>
              </Col>
            </Row>
            <Row>
              {clubs.clubs
                ? clubs.clubs.map((club) => (
                    <Col md="4">
                      <Card className="card-coin card-plain">
                        <CardHeader>
                          <img
                            alt="..."
                            className="img-center img-fluid"
                            src={club.picture}
                          />
                        </CardHeader>
                        <CardBody>
                          <Row>
                            <Col className="text-center" md="12">
                              <h4 className="text-uppercase">
                                {club.clubName}
                              </h4>
                              {/* <span>Plan</span> */}
                              <hr className="line-primary" />
                            </Col>
                          </Row>
                          <Row>
                            <ListGroup>
                              {club.facilities.map((facility) => (
                                <ListGroupItem>{facility}</ListGroupItem>
                              ))}
                            </ListGroup>
                          </Row>
                        </CardBody>
                        <CardFooter className="text-center">
                          <Button
                            className="btn-simple"
                            color="primary"
                            onClick={() =>
                              history.push(`/profile-page/${club._id}`)
                            }
                          >
                            Explore
                          </Button>
                        </CardFooter>
                      </Card>
                    </Col>
                  ))
                : null}
            </Row>
          </Container>
        </section>
        <Footer />
      </div>
    </>
  );
}
