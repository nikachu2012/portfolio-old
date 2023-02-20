import React from 'react'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Top from "./Top";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Top />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
