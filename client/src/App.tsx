import React, { useEffect } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

type LocationTime = {
    time: string;
};

const App = () => {
    const [tokyoTime, setTokyoTime] = React.useState<LocationTime>({ time: "Loading..." });

    const getTokyoTime = async () => {
        const response = await axios.get(`${API_URL}/time/tokyo`);
        setTokyoTime(response.data);
    };

    useEffect(() => {
        getTokyoTime();
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    The time in Tokyo is: <strong>{tokyoTime.time}</strong>
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
};

export default App;
