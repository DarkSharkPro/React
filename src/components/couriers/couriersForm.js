import React from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { IcoADD } from '../icons';
import { validateField, required } from '../../utils/validate';

let CouriersForm = props => {
	const {
		handleSubmit,
		parentClass = '',
		submitField = true,
		mngBtn = false,
		couriersDelete = null,
		couriersEditReset = null
	} = props;

	return(
		<form className={`form ${parentClass}`}>
			{
				submitField ?
				<div className='table__cell'>
					<div className='ico__add' onClick={ handleSubmit } title='Добавить курьера'>
						<IcoADD />
					</div>
				</div> : null
			}
			<div className='table__cell'>
				<Field
					component={ validateField }
					validate={[ required ]}
					type='text'
					name='fio'
					placeholder='ФИО'
				/>
			</div>
			<div className='table__cell'>
				<Field
					component='input'
					type='text'
					name='car'
					placeholder='Авто'
				/>
			</div>
			<div className='table__cell'>
				<Field
					component={ validateField }
					validate={[ required ]}
					type='text'
					name='phone'
					placeholder='Телефон'
				/>
			</div>
			<div className='table__cell'>
				<Field
					component='input'
					type='text'
					name='comments'
					placeholder='Примечание'
				/>
			</div>
			{
				mngBtn ?
				<div className='mng__btn'>
					<span className='btn --save' onClick={ handleSubmit }>Сохранить</span>
					<span className='btn --delete' onClick={ couriersDelete }>Удалить</span>
					<span className='btn --cancel' onClick={ couriersEditReset }>Отмена</span>
				</div> : null
			}
		</form>
)};

const submitSuccess = (result, dispatch, {form}) =>  dispatch( reset(form) );

export default reduxForm({
	form: ['text'],
	onSubmitSuccess: submitSuccess,
	enableReinitialize: true
})( CouriersForm );