import React from 'react'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Top from "./Top";

import Profile from './Profile';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
