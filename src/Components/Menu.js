import React, { useState } from 'react';
import Header from './Header2';
import '../Home.css';
import axios from 'axios';

function Menu() {
    const [response, setResponse] = useState('');
    
    const handleSubmit = async (e) => {
        try{
        e.preventDefault();
        const text = e.target.elements.text.value;
        const apiKey = '';
        const res = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
            prompt: text,
            api_key: apiKey,
        });
        setResponse(res.data.choices[0].text);
        } catch (error){
            setResponse("The connection with the server is lost try later !")
            console.log(error);
        }
    };

return (
    <>
        {
            <>
                <div className="home-container">
                    {/* App Header */}
                    <Header />
                    <p>Menu page is underconstruction</p>
                </div>
                <div className="openai-form-container">
                    <form onSubmit={handleSubmit} className="openai-form">
                        <input type="text" name="text" className="openai-input"/>
                        <button type="submit" className="openai-submit-button">Submit</button>
                    </form>
                    <p className="openai-response">{response}</p>
                </div>
            </>
        }
    </>
  );
}

export default Menu;
