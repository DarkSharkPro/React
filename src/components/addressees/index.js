import React from 'react';
import { TableModel } from './tableModel';
import { TableBody } from './tableBody';
import { TableHeader } from './tableHeader';
import { EditBlock } from './editBlock';
import AddresseesForm from './addresseesForm';
import './style.css';

const Addressees = ({ list, ...rest }) => {
	const addresseesAdd = (data) => rest.addresseesAdd(data);
	const addresseesSearch = (data) => rest.addresseesSearch(data);

	return(
		<div className='addressees'>
			<div className='table'>
				<TableHeader />
				<AddresseesForm
					parentClass='table__row'
					onSubmit={ addresseesAdd }
					onChange={ addresseesSearch }
					noteField={ false }
					mngBtn={ false }
					form='AddresseesForm'
				/>
				<TableBody
					list={ list }
					addresseesEdit={ rest.addresseesEdit }
				/>
			</div>
			{
				rest.editingItem ?
				<EditBlock
					editingItem={ rest.editingItem }
					addresseesEditSave={ rest.addresseesEditSave }
					addresseesDelete={ rest.addresseesDelete }
					addresseesEditReset={ rest.addresseesEditReset }
				/> : null
			}
		</div>
)};

export default Addressees;