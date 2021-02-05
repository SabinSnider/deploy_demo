import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Trending from './components/Trending';
import NowPlaying from './components/NowPlaying';
import NowPlayingDetails from './components/NowPlayingDetail.js';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container-fluid">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/trending" component={Trending}/>
        <Route exact path="/nowPlaying" component={NowPlaying}/>
        <Route exact path="/nowPlaying/:id" component={NowPlayingDetails}/>

      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
