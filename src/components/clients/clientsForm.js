import React from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { IcoADD } from '../icons';
import { validateField, required } from '../../utils/validate';

let ClientsForm = props => {
	const {
		handleSubmit,
		parentClass = '',
		noteField = true,
		submitField = true,
		mngBtn = false,
		clientsDelete = null,
		clientsEditReset = null
	} = props;

	return(
		<form className={`form ${parentClass}`}>
			{
				submitField ?
				<div className='table__cell'>
					<div className='ico__add' onClick={ handleSubmit } title='Добавить клиента'>
						<IcoADD />
					</div>
				</div> : null
			}
			<div className='table__cell'>
				<Field
					component={ validateField }
					type='text'
					name='clients_name'
					placeholder='Наименование'
					validate={[ required ]}
				/>
			</div>
			<div className='table__cell'>
				<Field
					component='input'
					type='text'
					name='client_inn'
					placeholder='ИНН'
				/>
			</div>
			<div className='table__cell'>
				<Field
					component='input'
					type='text'
					name='contract_id'
					placeholder='Договор'
				/>
			</div>
			<div className='table__cell'>
				<Field
					component='input'
					type='text'
					name='adress'
					placeholder='Адрес'
				/>
			</div>
			<div className='table__cell'>
				<Field
					component='input'
					type='text'
					name='contact_face'
					placeholder='Контактное лицо'
				/>
			</div>
			<div className='table__cell'>
				<Field
					component='input'
					type='text'
					name='phone'
					placeholder='Телефон'
				/>
			</div>
			<div className='table__cell'>
				<Field
					component='input'
					type='text'
					name='email'
					placeholder='Email'
				/>
			</div>
			{
				noteField ?
				<div className='table__cell'>
					<Field
						component='input'
						type='text'
						name='comments'
						placeholder='Примечание'
					/>
				</div> : null
			}
			{
				mngBtn ?
				<div className='mng__btn'>
					<span className='btn --save' onClick={ handleSubmit }>Сохранить</span>
					<span className='btn --delete' onClick={ clientsDelete }>Удалить</span>
					<span className='btn --cancel' onClick={ clientsEditReset }>Отмена</span>
				</div> : null
			}
		</form>
)};

const submitSuccess = (result, dispatch, {form}) =>	dispatch( reset(form) );

export default reduxForm({
	form: ['text'],
	onSubmitSuccess: submitSuccess,
	enableReinitialize: true
})( ClientsForm );