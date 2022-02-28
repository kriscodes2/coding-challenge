import React, { useState, useEffect } from "react";
import { Row, Col, Card, CardHeader, CardBody, Input } from "reactstrap";
import moment from "moment";

export default function ApiFetch() {
  const [search, setSearch] = useState("");
  const [movieResults, setMovieResults] = useState([]);
  const [tvResults, setTvResults] = useState([]);

  useEffect (() => {
    const getMovies = async () => {
    const response = await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=9e416c6c9b367325e123066f9dc4b995");
   // console.log(response);
    const responseData = await response.json();
    setMovieResults(responseData.results);
      };
      getMovies();
  },[])

  useEffect (() => {
    const getTV = async () => {
    const response = await fetch("https://api.themoviedb.org/3/trending/tv/week?api_key=9e416c6c9b367325e123066f9dc4b995");
   // console.log(response);
    const responseData = await response.json();
    setTvResults(responseData.results);
      };
      getTV();
  },[])


 const movies = movieResults.map( (movie) => (
    <>
  <Col key={movie.id} sm="12" md="8" lg="4" xl="3">
    <Card className="bg-gradient-blue">
      <CardHeader className="mx-auto font-weight-bolder text-dark bg-gradient-danger">
        <img
          className="mx-auto"
          alt="movie poster"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}?key=9e416c6c9b367325e123066f9dc4b995`}
        />
        <h3>
        {movie.title}
        </h3>
      </CardHeader>
      <CardBody className="mx-auto font-weight-bolder">
        <h3 className="text-darker">{movie.overview}</h3>
        <p className="text-success mx-auto">
          {" "}
          released {moment(movie.release_date).format("MM-DD-yy")}
        </p>
        <a className="text-info" id={movie.id} href={movie.homepage}>
        click to view
        </a>
      </CardBody>
    </Card>
  </Col>
  </>
))

  const tv = tvResults.map( (tv) => (
    

      <>
    <Col key={tv.id} sm="12" md="8" lg="4" xl="3">
      <Card className="bg-gradient-blue">
        <CardHeader className="mx-auto font-weight-bolder text-dark bg-gradient-danger">
          <img
            className="mx-auto"
            alt="tv poster"
            src={`https://image.tmdb.org/t/p/w500${tv.poster_path}?key=9e416c6c9b367325e123066f9dc4b995`}
          />
          <h3>
          {tv.title}
          </h3>
        </CardHeader>
        <CardBody className="mx-auto font-weight-bolder">
          <h3 className="text-darker">{tv.overview}</h3>
          <p className="text-success mx-auto">
            {" "}
            released {moment(tv.first_air_date).format("MM-DD-yy")}
          </p>
          <a className="text-info" id={tv.id} href={tv.homepage}>
          click to view
          </a>
        </CardBody>
      </Card>
    </Col>
    </>
  ))

  return (
    <div>
      <Input onChange={(e) => setSearch(e.target.value)} />
      <Row> 
      <hr/>
      <br/>
      <h1>
          Popular Movies
      </h1>
      <br/>    
      {movies}
      </Row>
      <hr/>
      <br/>
      <h1>
          Popular TV Shows
      </h1>
      <br/>
      <Row>
      {tv}
      </Row>
    </div>
  );
}
