import React from 'react';
import { Colgroup } from '../common/colgroup';

export const TableBody = ({ list, fields, dblClickHeandler }) => {

	if ( list === null ) {
		list = <Colgroup />
	} else {
		list = list ? list.map( (el, i) => (
			<div
				className='table__row'
				key={ el.id }
				data-id={ el.id }
				onDoubleClick={ (e) => dblClickHeandler(el.id) }>

				<div className='table__cell' key={ 0 } >
					{ ++i }
				</div>
				{
					fields.map( (field, j) => (
						<div className={ `table__cell  --${field}` } key={ ++j } >
							{ el[field] }
						</div>
					))
				}
			</div>
		)) : <Colgroup text='Записи отсутствуют' />
	}

	return <div className='table__body'>{ list }</div>;
};