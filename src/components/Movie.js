import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
class Movie extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={this.props.image_url} alt={this.props.title} />
                                <Card.Body style={{ background: "#f699CD" }}>
                                    <Card.Title style={{ background: "#F79AC0" }}>{this.props.title}</Card.Title>
                                    <Card.Text style={{ background: "#f699CD" }}>{this.props.overview}</Card.Text>
                                    <Card.Text style={{ background: "#F79AC0" }}> ✔️: {this.props.average_votes}         🎶: {this.props.total_votes}  </Card.Text>
                                    <Card.Text style={{ background: "#F79AC0" }}> ❤️: {this.props.popularity}</Card.Text>
                                    <Card.Text style={{ background: "#F79AC0" }}> 🗓️: {this.props.released_on}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default Movie;