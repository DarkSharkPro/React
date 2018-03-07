import React from 'react';
import { TableHeader } from './tableHeader';
import { TableBody } from './tableBody';
import { EditBlock } from './editBlock';
import CouriersForm from './couriersForm';
import './style.css';

const Couriers = ({ list, editingItem, ...rest }) => {
	const couriersAdd = (data) => rest.couriersAdd(data);
	const couriersSearch = (data) => rest.couriersSearch(data);

	return(
		<div className='couriers'>
			<div className='table'>
				<TableHeader />
				<CouriersForm
					form='couriers'
					parentClass='table__row'
					onSubmit={ couriersAdd }
					onChange={ couriersSearch }
				/>
				<TableBody
					list={ list }
					couriersEdit={ rest.couriersEdit }
				/>
				{
					editingItem ?
					<EditBlock 
						editingItem={ editingItem }
						couriersEditSave={ rest.couriersEditSave }
						couriersEditReset={ rest.couriersEditReset }
						couriersDelete={ rest.couriersDelete }
					/> : null
				}
			</div>
		</div>
	);
};

export default Couriers;