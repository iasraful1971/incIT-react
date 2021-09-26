import React from 'react';
import './Cart.css';

const Cart = (props) => {
 
    console.log(props.team);

    const {team} = props;
    let total = 0;
    for(const element of team){
        total =  total + element.salary;
    }

    return (
        <div>
            <h2>Your Order History</h2>
            <hr className="hr" />
            <h3> <i class="far fa-user"></i> member added: {props.team.length}</h3>
            <h5>Total cost : ${total}</h5>
            <h6> Your Hired Persons: <br />
            {
                team.map(name => <span>{name.name}</span>)
            }
            </h6>
            <button>Buy Now</button>
        </div>
    );
};

export default Cart;