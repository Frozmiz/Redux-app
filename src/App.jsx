import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Posts from './pages/Posts';
import PostPage from './pages/PostPage';
import Menu from "./components/Menu";

import './App.css';

function App() {
  return (
    <Router>
      <Menu/>
      <Routes>
        <Route exact path='/' component={Home} />
        <Route exact path='/posts' component={Posts}/>
        <Route exact path='/posts/:postId' component={PostPage}/>
        {/* react-router-dom v5: <Redirect to="/" /> */}
        <Route  render={() => <redirect to= "/" />} /> 
      </Routes>
    </Router>
  );
}

export default App;
