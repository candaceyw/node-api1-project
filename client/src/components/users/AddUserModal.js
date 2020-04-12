import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addUsers } from '../../actions/userActions';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddUserModal = ({ addUsers}) => {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');

  const onSubmit = () => {
    if (name === '' || bio === '' ) {
      M.toast({ html: 'Please enter name, and bio' });
    } else {
      const newUser = {
        name,
        bio
      };

      addUsers(newUser);

      // Clear Fields
      setName('');
      setBio('');
    }
  };

  return (
    <div id='add-user-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Enter New User</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='name'
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <label htmlFor='name' className='active'>
              User Name
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
          <input
          type='text'
          name='bio'
          value={bio}
          onChange={e => setBio(e.target.value)}
        />
        <label htmlFor='name' className='active'>
          User Bio
        </label>
          </div>
        </div>

    
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect blue waves-light btn'
        >
          Enter
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: '75%',
  height: '75%'
};

export default connect(null, { addUsers })(AddUserModal);
