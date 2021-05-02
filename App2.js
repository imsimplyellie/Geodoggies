import './App.css'
import React from 'react'

export default class FetchDog extends React.Component {
  state = {
    loading: true,
    doggies: [],
  }

  //link API and define content
  async componentDidMount() {
    const url = 'https://dog.ceo/api/breeds/list/all'
    const response = await fetch(url)
    const data = await response.json()
    var result = Object.keys(data.message)
    result.forEach((breed) => {
      if (data.message[breed].length > 0) {
        console.log('THE BREEDS')
        const subBreeds = data.message[breed]
        console.log(subBreeds)
      }
    })
    this.setState({ doggies: result, loading: false, data: data })
  }

  //check to see if its loading
  render() {
    if (this.state.loading) {
      return <div>loading...</div>
    }

    if (!this.state.doggies) {
      return <div>didn't get a doggies</div>
    }
    //print out the stuff
    return (
      <div>
        {this.state.doggies.map((breed) => (
          <div>
            <div>{breed}</div>
            {this.state.data.message[breed].map((subBreed) => (
              <div>
                <div>{subBreed}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    )
  }
}
