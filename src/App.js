import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

const App = () => {
  const [dogName, setDogName] = useState([])
  const [dogPic, setDogPic] = useState([])

  const fetchData = () => {
    const dogAPI = 'https://dog.ceo/api/breeds/list/all'
    const DogPic = 'https://dog.ceo/api/breed/hound/images'

    const getDogType = axios.get(dogAPI)
    const getDogPic = axios.get(dogPic)

    //grab data all at once
    axios.all([getDogBreed, getDogPic]).then(axios.spread((...allData) => {}))
  }
  return <div className='App'></div>
}

export default App
