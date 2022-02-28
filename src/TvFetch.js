import React, { useState, useEffect } from "react";
import { Row, Col, Card, CardHeader, CardBody, Input } from "reactstrap";
import moment from "moment";

export default function TvFetch() {
  const [tvResults, setTvResults] = useState([]);

  useEffect(() => {
    const getTV = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/tv/week?api_key=${process.env.REACT_APP_API_KEY}`
      );
      const responseData = await response.json();
      setTvResults(responseData.results);
    };
    getTV();
  }, []);

  const tv = tvResults.map((tv) => (
    <>
      <Col key={tv.id} sm="12" md="8" lg="4" xl="3">
        <Card className="bg-gradient-blue">
          <CardHeader className="mx-auto font-weight-bolder text-dark bg-gradient-danger">
            <img
              className="mx-auto"
              alt="tv poster"
              src={`https://image.tmdb.org/t/p/w500${tv.poster_path}?key=9e416c6c9b367325e123066f9dc4b995`}
            />
            <h3>{tv.title}</h3>
          </CardHeader>
          <CardBody className="mx-auto font-weight-bolder">
            <h3 className="text-darker">{tv.overview}</h3>
            <p className="text-success mx-auto">
              {" "}
              released {moment(tv.first_air_date).format("MM-DD-yy")}
            </p>
          </CardBody>
        </Card>
      </Col>
    </>
  ));

  return (
    <div>
      <hr />
      <br />
      <h1>Popular TV Shows</h1>
      <br />
      <Row>{tv}</Row>
    </div>
  );
}
