import {Component} from 'react'
import Header from '../Header'

import appContext from '../../Context/appContext'
import Footer from '../Footer'
// import LoadingElement from '../LoaderElement'
import MovieItem from '../MovieItem'

class MovieItemDetails extends Component {
  render() {
    return (
      <appContext.Consumer>
        {value => {
          const {username} = value
          console.log('username from movieItemDetails', {username})

          return (
            <>
              <div className="home-container">
                <Header />
                <MovieItem />
              </div>
              <Footer />
            </>
          )
        }}
      </appContext.Consumer>
    )
  }
}
export default MovieItemDetails
