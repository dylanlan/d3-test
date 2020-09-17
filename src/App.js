import React, { useState } from 'react';
import './App.css';
import BarChart from './BarChart';
import CSVReader from 'react-csv-reader';

function App() {
    const sampleData = [
        { name: "Thing1", value: "12345" },
        { name: "Thing2", value: "5000" },
        { name: "Thing3", value: "1000" },
    ];
    const [data, setData] = useState(sampleData);
    
    return (
        <div className="App">
            <header className="App-header">
                <BarChart data={data} />
                <button id="download">Download</button>
                <CSVReader onFileLoaded={(fileData) => {
                    const csvData = fileData.map((row) => {
                        const name = row[0];
                        const value = row[1];
                        return {
                            name,
                            value,
                        };
                    });
                    setData(csvData);
                }}/>
            </header>
        </div>
    );
}

export default App;
