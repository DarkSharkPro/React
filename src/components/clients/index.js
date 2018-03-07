import React from 'react';
import ClientsForm from './clientsForm';
import { TableHeader } from './tableHeader';
import { TableBody } from './tableBody';
import { EditBlock } from './editBlock';
import './style.css';

const Clients = ({ list, editingItem, ...rest }) => {
	const clientsAdd = (data) => rest.clientsAdd(data);
	const clientsSearch = (data) => rest.clientsSearch(data);

	return(
		<div className='clients'>
			<div className='table'>
				<TableHeader />
				<ClientsForm
					parentClass='table__row'
					onSubmit={ clientsAdd }
					onChange={ clientsSearch }
					noteField={ false }
					mngBtn={ false }
					form='ClientsForm'
				/>
				<TableBody
					list={ list }
					clientsEdit={ rest.clientsEdit }
				/>
			</div>
			{
				editingItem ?
				<EditBlock 
					editingItem={ editingItem }
					clientsEditReset={ rest.clientsEditReset }
					clientsEditSave={ rest.clientsEditSave }
					clientsDelete={ rest.clientsDelete }
				/> : null
			}
		</div>
)};

export default Clients;