import React from 'react';
import { NotifierItem } from './notifierItem';
import './style.css';

const Notifiers = ({ list, timeout, ...rest }) => {
	const noteCloseHandler = (id) => {
		const timerID = setTimeout( () => rest.notifierDelete(id), timeout );
	};

	return(
		<div className='notifier'>
			<NotifierItem list={ list } noteCloseHandler={ noteCloseHandler } />
		</div>
)};

export default Notifiers;