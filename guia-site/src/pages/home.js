import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './home.css'; // Make sure to create and import a CSS file for styling

const Home = () => {
    const [query, setQuery] = useState('');
    const [data, setData] = useState('');

    

    useEffect(() => {
        const fetchData = async () => {
            //const query = encodeURIComponent("What is social echo?");
            //const response = await fetch(`http://localhost:8000/api?query=${query}`);
            //const data = await response.json();
            const fakeResponse = {
                response: "Social echo refers to the amplification and dissemination of information across social media platforms, often leading to widespread visibility and influence."
            };
            setData(data.response); 
            //setData(fakeResponse.data); 
        }
        fetchData();
    }, []);

    return (
        <div className="home-container">
            <div className="lesson-box">
                <h1>create a request</h1>
                                {/* Render the fetched data here */}
                                {data && (
                    <div className="response">
                        <h2>Response:</h2>
                        <p>{data}</p>
                    </div>
                )}
                <div className='field'>
                    <input 
                        type="text" 
                        placeholder="Teach Ali about the SpringBoot structure and setup in jarvis-portal." 
                        className="lesson-input" 
                    />
                    <button className="submit-button">submit</button>
                </div>
            </div>
        </div>
    );
}

export default Home;

