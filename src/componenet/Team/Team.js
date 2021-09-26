import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Singleteam from './Singleteam/Singleteam';
import './Team.css';

const Team = () => {
    const [teams , setTeams] = useState([]);
    const[cart , setCart] =useState([]);

    useEffect(() => {
        fetch('team.JSON')
        .then(res => res.json())
        .then(data => setTeams(data));
    },[]);

    // handdle add to cart button 
        const handleAddToCart = team => {
           const newCart = [...cart, team];
           setCart(newCart);
        }
    return (
        <div className="team py-5">
            <div className="container">
              <div className="row">
              <div className="col-lg-8">
                    <div className="team-container">
                        {
                            teams.map(team => <Singleteam
                            key={team.key}
                            team ={team}
                            handleAddToCart ={handleAddToCart}
                            ></Singleteam>)
                        }
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="team-aside">
                       <Cart team ={cart}></Cart>
                    </div>
                </div>
              </div>
            </div>
            
        </div>
    );
};

export default Team;