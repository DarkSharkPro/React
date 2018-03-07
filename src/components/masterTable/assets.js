import React from 'react';
import { IcoSearch, IcoADD } from '../icons';
import { SelectService } from './selectService';
import SearchForm from './searchForm';

export const Assets = (props) => {
	const {
		currentServ,
		services,
		servChangeHandler,
		searchClickHandler,
		mtEntrySearch,
		addClickHandler
	} = props;
	const searchFormChange = (data) => mtEntrySearch(data);

	return (
		<div className='assets'>
			<div className='assets__item'>
				<SelectService
					defaultValue={ currentServ }
					changeHandler={ servChangeHandler }
					services={ services }
				/>
			</div>
			
			<div className='assets__item'>
				<span onClick={ addClickHandler }>
					<IcoADD />
				</span>
			</div>

			<div className='assets__item'>
				<span onClick={ searchClickHandler }>
					<IcoSearch />
				</span>
			</div>

			<SearchForm
				form='searchForm'
				parentClass='table__row search'
				onChange={ searchFormChange }
			/>
		</div>
	)
};