import React from 'react';
import Main from './Main';
import { ListGroup, Container, Row, Col } from 'react-bootstrap';

class WeatherAPI extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <ListGroup >
                                <ListGroup.Item action variant="primary">📅: {this.props.date}</ListGroup.Item>
                                <ListGroup.Item action variant="secondary">🤫:{this.props.decription}</ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>


            </div>
        )
    }
}
export default WeatherAPI;