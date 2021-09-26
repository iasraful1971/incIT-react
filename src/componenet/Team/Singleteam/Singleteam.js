import React from 'react';
import './singleTeam.css';

const Singleteam = (props) => {
    const {name , img , designation, country , age, salary} = props.team;
    return (
        <div className="team">
            <img style={{width: '150px' , height:"150px"}} src={img} alt="" />
            <h3>Name: {name}</h3>
            <h6> Rule: {designation}</h6>
            <h6>Location: {country}</h6>
            <h6>Age: {age}</h6>
            <h5>Salary: ${salary}</h5>
            <button onClick={() => props.handleAddToCart(props.team)}> <i class="fas fa-shopping-cart"></i> add to cart</button>
            <div className="social">
            <i class="fab fa-twitter"></i>
            <i class="fab fa-stack-overflow"></i>
            <i class="fab fa-quora"></i>
            <i class="fab fa-github"></i>
            </div>
        </div>
    );
};

export default Singleteam;