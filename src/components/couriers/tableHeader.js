import React, {PureComponent} from 'react';

export class TableHeader extends PureComponent {

	renderCell = (el, i) => (
		<div className='table__cell' key={i + ""}>
			{el}
		</div>
	);

	render() {
		return (
			<div className='table__row table__header'>
				{ this.props.title.map( this.renderCell ) }
			</div>
		);
	}
};

TableHeader.defaultProps = {
	title: ['#', 'ФИО', 'Авто', 'Телефон', 'Примечание']
};