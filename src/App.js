import React from "react";
import axios from "axios";
import Main from "./components/Main";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import ShowForm from "./components/ShowForm";


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      locationResult: 'a',
      errloc: false,
      Map: false,
      weatherShowAPI:false,
      listItemsWeath: '',
      movie: [],
      WeatherOfAPI: [],
      showMovies: false,
    }
  }



  generatLocation = async (event) => {
    event.preventDefault();

    let key = process.env.REACT_APP_APIofLocation;
    let location = event.target.addlocation.value;


    let sharchLoc = `https://api.locationiq.com/v1/autocomplete.php?key=${key}&q=${location}&format=json`;
    let movieURL = `https://city-weathe.herokuapp.com/dataOfmovie?query=${location}`;



    try {
      let result = await axios.get(sharchLoc);
      this.setState({
        locationResult: result.data[0],
        Map: true,
        errloc: false,

      });
    }
    catch(error) {
      this.setState({
        errloc: true,
        Map: false,
      });
    }

    try {
      let resultOfMovie = await axios.get(movieURL);
      this.setState({
        movie: resultOfMovie.data,
        showMovies: true,
      });
    } catch(error) {
      this.setState({
        movie: error.message,
        showMovies: false
      })
    }

    try {
      let weatherLocAPI = `https://city-weathe.herokuapp.com/dataOfWeatherAPI?lat=${this.state.locationResult.lat}&lon=${this.state.locationResult.lon}`;
      console.log('ahmad');
      let resultOfWeather = await axios.get(weatherLocAPI);

      this.setState({
        WeatherOfAPI: resultOfWeather.data,
        weatherShowAPI:true,
      });

      console.log(resultOfWeather.data);
    } catch(error) {
      this.setState({
        WeatherOfAPI: error.response,
        weatherShowAPI:false,
      });
    }
  };

  render() {
    let keys = process.env.REACT_APP_APIofLocation;

    return (

      <div>
        <Container>
          <Row>
            <Col>
              <Form onSubmit={this.generatLocation}>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="disabledTextInput" style={{ backgroundColor: 'pink', width: '100%', height: '4rem', textAlign: 'center', padding: '.5rem', fontWeight: 'bolder', fontSize: '2rem' }}>Location Input</Form.Label>
                  <Form.Control id="addlocationId" name="addlocation" placeholder="Location" />
                </Form.Group>
                <Button type="submit" variant="secondary" style={{ width: '100%' }}>Submit</Button>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col>
              <h1>react axios</h1>
            </Col>
          </Row>
        </Container>

        <ShowForm
          name={this.state.locationResult.display_name}
          lat={this.state.locationResult.lat}
          lon={this.state.locationResult.lat}
        />

        <Main
          movieState={this.state.movie}
          weatherStatAPI={this.state.WeatherOfAPI}
        />

        {this.state.Map && <img src={`https://maps.locationiq.com/v3/staticmap?key=${keys}&center=${this.state.locationResult.lat},${this.state.locationResult.lon}`} alt='map' />}

      </div>
    )
  }
}
export default App;


