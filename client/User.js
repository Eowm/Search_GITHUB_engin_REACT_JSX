import React from 'react';
import ReacrDOM from 'react-dom';
import PropTypes from 'prop-types';
import style from './styles.css';

class User extends React.Component {
	render() {
		return (
			<div className={style.user}>
				<img src={this.props.user.avatar_url} className={style.img}/>
				<a href={this.props.user.html_url} target="_blank" className={style.name}>{this.props.user.login}</a>
			</div>
			)
	}
}

export default User;