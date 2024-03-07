import React from "react";

function App() {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 min-h-screen flex items-center justify-center">
      <div className="text-white text-center">
        <h1 className="text-4xl font-bold mb-4">
          Competitive Examination Platform
        </h1>
        <p className="text-lg">Click the Start Button to Begin the Exam</p>
        <button className="mt-8 bg-white text-black py-2 px-4 rounded-md shadow-md hover:shadow-lg focus:outline-none">
          Start Exam
        </button>
      </div>
    </div>
  );
}

export default App;
