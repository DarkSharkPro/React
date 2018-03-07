import React from 'react';
import { NavLink } from 'react-router-dom';
import { PATH } from '../../const/config';

const HeaderItem = ({ name, description = '', ...rest }) => {
	const className = 'header__item' + ` --${name || ''}`;
	return (
		<li className={ className }>

			<NavLink
				to={ `${PATH}${name}` }
				activeClassName='selected'
				exact
				onClick={ rest[name] || null } >
				{ description }
			</NavLink>

		</li>
	);
};

export default HeaderItem;