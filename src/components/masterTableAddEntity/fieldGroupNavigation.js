import React from 'react';

const NAV = [
	[],
	[{0: 'Клиент'}, {10: 'Отправитель'}, {11: 'Получатель'}, {20: 'Курьер'}, {12: 'Детали отправления'}, {1: 'Финансы'}],
	[{0: 'Клиент'}, {30: 'Детали хранения'}, {1: 'Финансы'}],
	[{0: 'Клиент'}, {20: 'Курьер'}, {1: 'Финансы'}],
	[{0: 'Клиент'}, {20: 'Курьер'}, {11: 'Получатель'},  {12: 'Детали отправления'}, {1: 'Финансы'}],
	[{0: 'Клиент'}, {40: 'Детали обработки'}, {1: 'Финансы'}]
];

export const FieldGroupNavigation = ({currentServ, navSelected, navClickHandler}) => {

	const renderNav = () =>
		NAV[currentServ].map( el => {
			const key = Object.keys( el )[ 0 ];
			const fullClassName = 'nav-menu__item' + (navSelected === +key ? ' active' : '');
			const clickHandler = () => navClickHandler(+key);
			
			return(
				<span
					key={ +key }
					className={ fullClassName }
					onClick={ clickHandler }>
					{ el[key] }
				</span>
			)
		} );

	return(
		<nav className='nav-menu'>
			{ renderNav() }
		</nav>
	)
};