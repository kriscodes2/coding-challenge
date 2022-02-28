import React, { useState, useEffect } from "react";
import { Row, Col, Card, CardHeader, CardBody, Input } from "reactstrap";
import moment from "moment";

export default function MovieFetch() {
  const [movieResults, setMovieResults] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}`
      );
      const responseData = await response.json();
      setMovieResults(responseData.results);
    };
    getMovies();
  }, []);

  const movies = movieResults.map((movie) => (
    <>
      <Col key={movie.id} sm="12" md="8" lg="4" xl="3">
        <Card className="bg-gradient-blue">
          <CardHeader className="mx-auto font-weight-bolder text-dark bg-gradient-danger">
            <img
              className="mx-auto"
              alt="movie poster"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}?key=${process.env.REACT_APP_API_KEY}`}
            />
            <h3>{movie.title}</h3>
          </CardHeader>
          <CardBody className="mx-auto font-weight-bolder">
            <h3 className="text-darker">{movie.overview}</h3>
            <p className="text-success mx-auto">
              {" "}
              released {moment(movie.release_date).format("MM-DD-yy")}
            </p>
          </CardBody>
        </Card>
      </Col>
    </>
  ));

  return (
    <div>
      <Row>
        <hr />
        <br />
        <h1>Popular Movies</h1>
        <br />
        {movies}
      </Row>
    </div>
  );
}
