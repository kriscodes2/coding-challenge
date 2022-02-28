import React from "react";
import {Button, Col, Row, Card, CardBody, CardHeader, CardFooter} from "reactstrap";
import ApiFetch from "ApiFetch";

function App() {
   const [onHover, setOnHover] = React.useState(null);
   const [dbResult, setDbResult] = React.useState([null]);

   const onClickHandler = (e) => {
     e.preventDefault();
     setDbResult(e.target.value)
   }


  return (
   <>
   <div className="mx-auto p-5" style={{width: "100%", backgroundColor: "success"}}>
   <Row >
     <Col>
   <Card className="mx-auto p-5" body inverse color="secondary" >
     <CardHeader color="success">
      <h1>
        Coding Challenge
      </h1>
      <h2>
        Coded by Kris Christopher
      </h2>
     </CardHeader>
     <CardBody>
       <Button 
       color="success"
       onClick={e => onClickHandler(e)}
       >
        Click to envoke API
       </Button>
       <Button color="danger">
         Click to reset form
       </Button>
     </CardBody>
     <CardFooter>
       
     </CardFooter>
   </Card>
   </Col>
   </Row>
   <Row>
     <Col>
     <Card>
     Code input
     </Card>
     </Col>
     <Col>
     <Card>
      STD Output
     </Card>
     </Col>
   </Row>
   <Row>
   <ApiFetch />
   </Row>
   </div>
   </>
  );
}

export default App;
