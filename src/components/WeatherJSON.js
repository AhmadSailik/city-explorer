import React from 'react';
import { ListGroup, Container, Row, Col } from 'react-bootstrap';

class WeatherJSON extends React.Component{
    render(){
        return(
            <div>
                {this.props.jsonshow && 
                  <Container>
                    <Row>
                        <Col style={{height:'1rem'}}></Col>
                    </Row>
                    <Row>
                        <Col>
                            <ListGroup >
                                <ListGroup.Item action variant="primary">📅 JSON :{this.props.date}</ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col>
                            <ListGroup >
                                <ListGroup.Item action variant="secondary">🤫 JSON :{this.props.decription}</ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>
                }
            </div>
        )
    }
}

export default WeatherJSON;