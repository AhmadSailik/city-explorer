import React from 'react';
import Movie from './Movie';
import WeatherAPI from './WeatherAPI';
import { CardColumns, Accordion } from 'react-bootstrap';
class Main extends React.Component {
    render() {
        return (
            <div>
                

                    <CardColumns>
                        {this.props.movieState.map((item, idx) => {
                            return (
                                <Movie
                                    title={item.title}
                                    overview={item.overview}
                                    average_votes={item.average_votes}
                                    total_votes={item.total_votes}
                                    popularity={item.popularity}
                                    released_on={item.released_on}
                                    image_url={item.image_url}
                                />)
                        })}
                    </CardColumns>

                    
                           
                        
                    {this.props.weatherStatAPI.map((item, idx) => {
                        return (
                            <WeatherAPI
                                date={item.date}
                                decription={item.decription}
                            />
                        )
                    })}
                
                
                
            </div>
                )
    }
}
export default Main;