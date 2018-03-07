import React, { PureComponent } from 'react';

export class SelectService extends PureComponent {

	static defaultProps = {
		defaultValue: 0,
		changeHandler: null,
		services: []
	}

	options = (el, i) => (
		<option key={ i } value={ el.id }>
			{ el.name }
		</option>
	)

	render() {
		const {
			defaultValue,
			changeHandler,
			services
		} = this.props;

		return(
			<React.Fragment>
				<label htmlFor='services'>
					Вид услуги:&nbsp;
				</label>
				<select
					value={ defaultValue }
					onChange={ changeHandler }
					id='services'
					children={ services ? services.map( this.options ) : null }
				/>
			</React.Fragment>
		)
	}
}