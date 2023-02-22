import React from 'react'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Top from "./Top";

import Profile from './Profile';
import Skill from './Skill';
import Timeline from './Timeline';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/timeline" element={<Timeline />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
