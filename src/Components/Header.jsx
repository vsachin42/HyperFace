import React, { useState } from 'react';
import "../Header.css";

const Header = () => {
    const [name, setName] = useState("Sachin");
  return (
    <div>
        <div>
            
            <div className='greetProfile'><h1>Hey {name }</h1>
            <img src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg" alt="avatar" />
            </div>
            <div className='motivationQuote'>
               <p>It's a nice day to learn something new.</p>
            </div>
        </div>

        <div className='communityConnect'>
            <p>Join and help us to building Airvoice!</p>
            <button><img src="https://www.freepnglogos.com/uploads/discord-logo-png/discord-logo-vector-download-0.png" alt="avtarDiscord" /> <h4>Community</h4></button>

        </div>
    </div>
  )
}

export default Header;