import logo from './logo.svg';
import './App.css';
import sadge from './Sadge.jpeg'
import react from 'react'

var running = false;

class App extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      running: false
    }

    setTimeout(() => {
      window.location.href = 'https://www.youtube.com/watch?v=f-A989FqyxI';
    }, 1250);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <b>Hasan Piker is a Leftist Grifter</b>
        </header>
        <div className="main">
          <u><b><h2>Background:</h2></b></u>
          <div className="background">
            <img src={sadge} className="has" />
            <div className="about">
              <p>Hasan D Piker is a Leftist twitch streamer and former member of the Leftist YouTube channel The Young Turks (TYT). In early 2019, his Twitch audience started to grow expedentially as the 2020 election cycle started to gain speed. In 2020, he strongly advocated for Democratic canadite Bernie Sanders. In 2021, he streamed toe January 6th insurection at the capital, which holds his personal record for largest amount of concurrent viewers.</p>
            </div>
          </div>
          <u><b><h2>Capitalist in Socialist Clothing</h2></b></u>
          <p>We will prove the following to you during the course of this webside:</p>
          <ul>
            <b><p>Hasan Piker does not live up to the ideas he advocated for</p></b>
            <b><p>Hasan Piker owns multipe shadow corperations without his communities knowledge.</p></b>
            <b><p>Hasan Piker is no better than the Right-wing grifters that he constantly talks about.</p></b>
          </ul>
        </div>


      </div>
    );
  }
}

export default App;
