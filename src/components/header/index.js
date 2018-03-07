import React, { PureComponent } from 'react';
import HeaderItem from './headerItem';
import './style.css';

export default class Header extends PureComponent {

	renderList = (el,i) => (
		<HeaderItem
			{ ...el }
			logout = { this.props.logout }
			key = { i }
		/>
	)

	render() {
		const shortLogin = this.props.login[0].toUpperCase();
		return (
			<ul className='header'>
				<li className='header__item --login' title={ this.props.login }>
					{ shortLogin }
				</li>
				{ this.props.items.map(this.renderList) }
			</ul>
		);
	}
};

Header.defaultProps = {
	items: [],
	login: 'Unknown user'
};