import React, {useState} from "react";
import {
  Button,
  Col,
  Row,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
} from "reactstrap";
import MovieFetch from "MovieFetch";
import TvFetch from "TvFetch";


function App() {
  const [tvVisible, setTvVisible] = useState(false);
  const [movieVisible, setMovieVisible] = useState(false);
  const onMovieClickHandler = (e) => {
    e.preventDefault();
    let visible = false;
    setTvVisible(!visible);
  };
  const onTvClickHandler = (e) => {
    e.preventDefault();
    let visible = false;
    setMovieVisible(!visible);
  };

  return (
    <>
      <div
        className="mx-auto p-5"
        style={{ width: "100%", backgroundColor: "success" }}
      >
        <Row>
          <Col>
            <Card className="mx-auto p-5" body inverse color="secondary">
              <CardHeader color="success">
                <h1>Coding Challenge</h1>
                <h2>Coded by Kris Christopher</h2>
              </CardHeader>
              <CardBody>
                <Button color="success" onClick={(e) => onMovieClickHandler(e)}>
                  Show TV Shows
                </Button>
                <Button color="danger" onClick={(e) => onTvClickHandler(e)}>Show Movies</Button>
              </CardBody>
              <CardFooter></CardFooter>
            </Card>
          </Col>
        </Row>
        <Row>
         {movieVisible ? <MovieFetch /> : null}
        </Row>
        <Row>
         {tvVisible ? <TvFetch /> : null}
        </Row>
      </div>
    </>
  );
}

export default App;
