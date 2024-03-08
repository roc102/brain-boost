// App.js

import React from "react";
import Subject from "./components/Subject";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 min-h-screen flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-4xl font-bold mb-4">
            Competitive Examination Platform
          </h1>
          <p className="text-lg">Click the Start Button to Begin the Exam</p>
          <button className="mt-8 bg-white text-black py-2 px-4 rounded-md shadow-md hover:shadow-lg focus:outline-none">
            Start Exam
          </button>
          <Routes>
            <Route path="/" element={<Subject name="Math" />} />
            <Route
              path="/computer-science"
              element={<Subject name="Computer Science" />}
            />
            <Route path="/psychology" element={<Subject name="Psychology" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
