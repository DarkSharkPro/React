import React, { Component } from 'react';
import { connect } from 'react-redux';
import Autosuggest from 'react-autosuggest';

import actions from '../../actions';
import './style.css';

const {
	suggestionRequest,
	suggestionReset,
	entityFormAddValToHiddenField,
	entityFormAddSuggestion
} = actions;

const getSuggestionValue = suggestion => suggestion.clients_name;

const renderSuggestion = suggestion => (
	<div>
		{suggestion.clients_name}
	</div>
);

class AutoComplete extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: props.initValue,
			suggestions: [],
			entity: props.entity || ''
		};
	}

	onChange = (event, { newValue }) => {
		const entity = this.state.entity;
		const field = this.props.linkField;
		this.setState({
			value: newValue
		});
		if (field){
			this.props.entityFormAddValToHiddenField({ entity, field, value: newValue });	
		}
	}

	getSuggestions = (value) => {
		const { entityStore, suggestions } = this.props;
		const entity = entityStore === this.state.entity ? entityStore : false;

		if (entity){
			const inputValue = value.trim().toLowerCase();
			const inputLength = inputValue.length;

			return suggestions.filter( el =>
				el.clients_name.toLowerCase().slice(0, inputLength) === inputValue
			);
		} else {
			return [];
		}
	}

	onSuggestionsFetchRequested = ({value = ''}) => {
		const { entity } = this.state;
		this.props.suggestionRequest({entity, value: value.trim() });
		this.setState({
			suggestions: this.getSuggestions(value)
		});
	}

	onSuggestionsClearRequested = () => {
		this.setState({
			suggestions: []
		});
	}

	onSuggestionSelected = (event, {suggestion, method}) => {
		if( process.env.NODE_ENV !== "production" ){
			console.log(this.props)
		}
		const { entity } = this.state;
		if (method === 'click' && entity){
			this.props.entityFormAddSuggestion({suggestion, entity});
		}
	}

	render() {
		const { value, suggestions } = this.state;
		const { placeholder } = this.props;
		const inputProps = {
			placeholder,
			value,
			onChange: this.onChange
		};
		return (
			<Autosuggest
				suggestions={suggestions}
				onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
				onSuggestionsClearRequested={this.onSuggestionsClearRequested}
				onSuggestionSelected={this.onSuggestionSelected}
				getSuggestionValue={getSuggestionValue}
				renderSuggestion={renderSuggestion}
				inputProps={inputProps}
			/>
		);
	}
};

const mapStateToProps = ({autoSuggestion, form}, ownProps) => {
	const storForm = form.addEntityForm.values;
	const {entity, linkField} = ownProps;
	const initValue = entity in storForm && linkField in storForm[entity] ? storForm[entity][linkField] : '';
	return {
		...ownProps,
		initValue,
		suggestions: autoSuggestion.suggestions,
		entityStore: autoSuggestion.entity
	}
};

const mapDispatchToProps = {
	suggestionRequest,
	suggestionReset,
	entityFormAddSuggestion,
	entityFormAddValToHiddenField
};

export default connect(mapStateToProps, mapDispatchToProps)(AutoComplete);