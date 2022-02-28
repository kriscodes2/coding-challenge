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
    if (tvVisible) {
      setTvVisible(false)
    } else if (!tvVisible) {
      setTvVisible(true)
    }
  };
  const onTvClickHandler = (e) => {
    e.preventDefault();
    if (movieVisible) {
      setMovieVisible(false)
    } else if (!movieVisible) {
      setMovieVisible(true)
    }
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
              <CardHeader className="mx-auto text-info">
                <h1>Coding Challenge</h1>
                <h2 className="mx-auto">Coded by <br/> Kris Christopher</h2>
              </CardHeader>
              <CardBody className="mx-auto">
                <Button color="success" onClick={(e) => onMovieClickHandler(e)}>
                  {!tvVisible ? "Show TV Shows" : "Hide TV Shows"}
                </Button>
                <Button color="danger" onClick={(e) => onTvClickHandler(e)}>
                {!movieVisible ? "Show Movies" : "Hide Movies"}
                  </Button>
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
