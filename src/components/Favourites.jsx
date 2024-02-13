import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { useSelector } from "react-redux";


const Favourites = () => {
 const favourites = useSelector((state) => state.favourites);
 console.log(favourites);
 return (
  <Container className=" mt-5">
   <Row>
    <Col>
     <ListGroup>
      {favourites.favourites.map((favourite, i) => (
       <ListGroupItem className="bg-light text-warning" key={i}>
        <a href={favourite.url}> {favourite.company_name}</a>
       </ListGroupItem>
      ))}
     </ListGroup>
    </Col>
   </Row>
  </Container>
 );
};

export default Favourites;
