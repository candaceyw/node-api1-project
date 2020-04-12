import React from 'react'
import { connect } from 'react-redux';
import { deleteUser, setCurrent}  from '../../actions/userActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const UserCard = (props) => {

    // console.log("check user", users, id)

    // const user = users[id]

  const onDelete = () => {
    props.deleteUser(props.id);
    M.toast({ html: 'user deleted' });
  };


    return (
        <li className="collection-item">
        <div key={props.id}>
        {/* <a href='#edit-user-modal' className='modal-trigger' onClick={() => setCurrent(user)}><h2>{name}</h2></a>
       */}
        <div>
        <div>
          <br />
          <span className='grey-text'>
            <span className='black-text'>Name: {props.name}</span>
            <br />
            <span className='black-text'>Bio: {props.bio}</span> 
          </span>
          <a href='#!' onClick={onDelete} className='secondary-content'>
            <i className='material-icons grey-text'>delete</i>
          </a>
        </div>
    </div>
    </div>

   </li>
   
    )
}

export default connect(null, {deleteUser, setCurrent})(UserCard);