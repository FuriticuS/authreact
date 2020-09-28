import React from 'react';
import {Link} from "react-router-dom";
const Home = () => {
    return (
       <div>

           <h1> Главная</h1>

           <ul>
               <li><Link to={'/'}>Home</Link></li>
               <li><Link to={'/auth'}>Auth</Link></li>
               <li><Link to={'/register'}>Register</Link></li>
           </ul>

       </div>
    );
};

export default Home;
