import {Component} from 'react'
import Header from '../Header'

import appContext from '../../Context/appContext'
import Footer from '../Footer'
// import LoadingElement from '../LoaderElement'
import PopularItem from '../PopularItem'

class Popular extends Component {
  //   state = {searchInput: ''}

  render() {
    return (
      <appContext.Consumer>
        {value => {
          const {username} = value
          console.log('username from Home', {username})

          return (
            <>
              <div className="home-container" testid="popular">
                <Header />
                <PopularItem />
                <Footer />
              </div>
            </>
          )
        }}
      </appContext.Consumer>
    )
  }
}

export default Popular
