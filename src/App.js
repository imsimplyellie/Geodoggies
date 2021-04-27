import './App.css'
import React from 'react'

export default class FetchDog extends React.Component {
  state = {
    loading: true,
    doggies: [],
  }

  async componentDidMount() {
    const url = 'https://dog.ceo/api/breeds/list/all'
    const response = await fetch(url)
    const data = await response.json()
    this.setState({ doggies: data.message, loading: false })
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>
    }

    if (!this.state.doggies) {
      return <div>didn't get a doggies</div>
    }

    return (
      <div>
        {JSON.stringify(this.state.doggies)}
      </div>
    )
  }
}
