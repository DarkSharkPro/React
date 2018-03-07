import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Colgroup } from '../common/colgroup';

export class TableBodyRow extends PureComponent{

    static propTypes = {
        clientsEditCallback: PropTypes.func.isRequired,
        index: PropTypes.number.isRequired,
        company: PropTypes.string.isRequired,
        client_inn: PropTypes.string,
        contract_id: PropTypes.string,
        adress: PropTypes.string,
        contact_face: PropTypes.string,
        phone: PropTypes.string.isRequired,
        email: PropTypes.string,
        comments: PropTypes.string
    }

    static defaultProps = {
        company: 'No name',
        client_inn: '',
        contract_id: '',
        adress: '',
        contact_face: '',
        phone: '',
        email: '',
        comments: ''
    }

	doubleClickHandler = () => {
		const { clientsEditCallback, index, ...rest } = this.props;
		clientsEditCallback( rest );
	}

	render(){

		const p = this.props;

		return (
			<div
				className='table__row'
				onDoubleClick={this.doubleClickHandler}
				title={p.comments}>

				<div className='table__cell'>{p.index}</div>
				<div className='table__cell'>{p.company}</div>
				<div className='table__cell'>{p.client_inn}</div>
				<div className='table__cell'>{p.contract_id}</div>
				<div className='table__cell'>{p.adress}</div>
				<div className='table__cell'>{p.contact_face}</div>
				<div className='table__cell'>{p.phone}</div>
				<div className='table__cell'>{p.email}</div>
			</div>
		)
	}
};