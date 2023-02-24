import React from 'react'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Top from "./Top";

import './index.css'
import Profile from './Profile';
import Skill from './Skill';
import Timeline from './Timeline';
import Works from './Works';
import Social from './Social';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path='/works' element={<Works />} />
          <Route path='/social' element={<Social />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
