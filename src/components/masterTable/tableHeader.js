import React, {PureComponent} from 'react';

export class TableHeader extends PureComponent {

	renderThead = () => this.props.thead.map( (el, i) => (
		<div className='table__cell' key={ i }>
			{ el }
		</div>
	))

	render() {
		return (
			<div className='table__row table__header'>
				<div className='table__cell'>#</div>
				{ this.renderThead() }
			</div>
		);
	}
};
