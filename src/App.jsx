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
        <Route path='/' element={<Home/>} />
        <Route path='/posts' element={<Posts/>}/>
        <Route path='/posts/:postId' element={<PostPage/>}/>
        {/* react-router-dom v5: <Redirect to="/" /> */}
        <Route path='*' element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
