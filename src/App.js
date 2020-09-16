import React from 'react';
import './App.css';
import BarChart from './BarChart';

function App() {
    
    return (
        <div className="App">
            <header className="App-header">
                <BarChart />
                <button id="download">Download</button>
            </header>
        </div>
    );
}

export default App;
