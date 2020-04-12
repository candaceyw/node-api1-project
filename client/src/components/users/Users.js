import React, { useEffect } from 'react'
import { connect } from 'react-redux';

import { getUser } from '../../actions/userActions';
import UserCard from './UserCard';
const Users = ({users, loading, getUser}) => {

    useEffect(() => {
        getUser();
        //eslint-disable-next-line
      }, []);

      if (loading || users === null) {
        return "Loading...";
      }
    return (
        <div>         
         <h1 className='center'>User List</h1>
        <div>

        {!loading && users.length === 0 ? (
          <p className='center'>No User available... </p>
        ) : (
          users.map(user => <UserCard name={user.name} bio={user.bio} id={user.id} key={user.id} />)
        )}
            </div> 
            
        </div>
    )
}

const mapStateToProps = state => {
    return {
        users: state.users,
        error: state.error
    };
      };

export default connect (mapStateToProps, {getUser})(Users)
