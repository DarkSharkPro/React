import React, { PureComponent } from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import { generateID } from '../../utils/generateID';

export class SupportCell extends PureComponent{

    static propTypes = {
        name: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
    }

	uid = generateID();

	render(){
		const { name, label } = this.props;
		return (
			<div className="_support__cell">
				<label htmlFor={this.uid}>{label}</label>
				<Field
					component="input"
					type="text"
					name={name}
					id={this.uid}
				/>
			</div>
		);
	}
};