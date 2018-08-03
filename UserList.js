import React from 'react';
import ReacrDOM from 'react-dom';
import PropTypes from 'prop-types';
import User from './User';

class UsserList extends React.Component {
	get users() {
		return.this.props.users.map(user => <User key={user.id} user={user}/>);
	}

	render() {
		return(
			<div>
				{this.users}
			</div>
			);
	}
}

export default UserList;