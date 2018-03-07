import React from 'react';
import { reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import { SupportCell } from './supportCell';
import './style.css';

let SupportBlock = ({ handleSubmit }) => (
	<form onSubmit={ handleSubmit } className='_support'>
		<SupportCell name='route' label='Route' />
		<SupportCell name='val' label='Values' />
		<div>
			<button type='submit'>Send route</button>
		</div>
	</form>
);

SupportBlock = reduxForm({ form: 'supportblock' })( SupportBlock );

export default SupportBlock;

SupportBlock.propTypes = {
	handleSubmit: PropTypes.func.isRequired
};