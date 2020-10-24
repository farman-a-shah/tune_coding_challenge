import React from 'react';
import './App.css';
import UsersDashboard from './modules/UsersDashboard';
import Header from "./layout";

function App() {
  return (
    <div className="App">
		<Header />
		<UsersDashboard/>
    </div>
  );
}

export default App;
