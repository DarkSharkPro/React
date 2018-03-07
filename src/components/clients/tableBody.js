import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { TableBodyRow } from './tableBodyRow';
import { Colgroup } from '../common/colgroup';

export class TableBody extends Component{

	static propTypes = {
		clientsEdit: PropTypes.func.isRequired,
		list: PropTypes.array.isRequired
	}


	mapRow = (el, i) => (
		<TableBodyRow
			{ ...el }
			clientsEditCallback={ this.props.clientsEdit }
			index={ i + 1 }
			key={ el.id }
		/>
	)

	render(){

		const { list } = this.props;

		if( list === null ){
			return <Colgroup />;
		}

		return list.length ? list.map( this.mapRow ) : <Colgroup text='Записи отсутствуют' />;
	}
}