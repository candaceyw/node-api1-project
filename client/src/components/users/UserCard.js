import React from 'react'
// import { connect } from 'react-redux';
// import { setCurrent}  from '../../actions/smurfsActions';

const UserCard = (props) => {
    return (
        <li className="collection-item">
    <div key={props.id}>
        <div>
          <br />
          <span className='grey-text'>
            <span className='black-text'>Name: {props.name}</span>
            <br />
            <span className='black-text'>Bio: {props.bio}</span> 
          </span>
          
        </div>
    </div>
   </li>
   
    )
}

export default UserCard
