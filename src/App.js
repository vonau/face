import './App.css';
import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';


const app = new Clarifai.App({
  apiKey: '486d156fee8c4a388773bf00c37c5aa6'
});

const ParticleOptions = {
  particles: {
    line_linked: {
      shadow: {
        enable: true,
        color: "#000000",
        blur: 5
      }
    }
  }
}

class App extends Component { 
  constructor() {
    super();
    this.state = {
      input: '',
      imageURL: ''
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageURL: this.state.input})
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input)
      .then(response => {
        console.log('hi', response)
        // if (response) {
        //   fetch('http://localhost:3000/image', {
        //     method: 'put',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify({
        //       id: this.state.user.id
        //     })
        //   })
        //     .then(response => response.json())
        //     .then(count => {
        //       this.setState(Object.assign(this.state.user, { entries: count}))
        //     })

        // }
        // this.displayFaceBox(this.calculateFaceLocation(response))
      })
      .catch(err => console.log(err));
  }
  

  render() {
    return (
      <div className="App">
        <Particles className = 'particles' params = {ParticleOptions}/>
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange = {this.onInputChange} onButtonSubmit = {this.onButtonSubmit }/>
        <FaceRecognition imageURL = {this.state.imageURL}/>
      </div>
    );
  }
}

export default App;
