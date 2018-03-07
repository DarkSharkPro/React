import React, { Component } from 'react';
import { TableHeader } from './tableHeader';
import { TableBody } from './tableBody';
import { Assets } from './assets';
import MasterTableAddEntity from '../masterTableAddEntity';
import { tableFields } from '../../utils/masterTableFormater';
import './style.css';

export default class MasterTable extends Component {
	constructor (props) {
		super (props);
		this.state = {
			currentServ: 1,
			search: false,
			add: false
		};
	}

	componentDidMount() {
		const service = this.state.currentServ;
		this.getTableEntry(service);
	}

	getTableEntry = (service) => {
		this.props.masterTableGetEntry({service});
	}

	searchClickHandler = () => {
		const search = !this.state.search;
		search && this.props.mtEditableEntryClose();
		this.setState({ search, add: false });
	}

	addClickHandler = () => {
		const add = !this.state.add;
		add && this.props.mtEditableEntryClose();
		this.setState({ add, search: false });
	}

	closeAddForm = () => {
		this.setState({ add: false });
	}

	servChangeHandler = ({ target }) => {
		const val = Number(target.value);
		this.setState({ currentServ: val });
		this.getTableEntry(val);
	}

	dblClickHeandler = (id) => {
		this.setState({
			search: false,
			add: false
		});
		this.props.mtFetchEntryID(id);
	}

	render(){
		const { tableHeader, tableEntry, editingItem, services, mtEntrySearch, ...rest } = this.props;
		const { currentServ, search, add } = this.state;
		const fields = tableFields(currentServ);
		const thead = tableHeader ? fields.map( (el) => tableHeader[el] ) : [];

		return (
			<div className='master-table' data-search-show={ search } data-add-show={ add } >
				<Assets
					currentServ={ currentServ }
					services={ services }
					servChangeHandler={ this.servChangeHandler }
					searchClickHandler={ this.searchClickHandler }
					addClickHandler={ this.addClickHandler }
					mtEntrySearch={ mtEntrySearch }
				/>

				{
					this.state.add ?
					<MasterTableAddEntity
						currentServ={currentServ}
						services={services}
						closeAddForm={this.closeAddForm}
					/> : null
				}

				<div className='table' data-service={ currentServ } >
					<TableHeader thead={ thead } />
					<TableBody
						list={ tableEntry }
						fields={ fields }
						dblClickHeandler={ this.dblClickHeandler }
					/>
				</div>
				{
					editingItem ?
					<MasterTableAddEntity 
						initialValues={ editingItem }
						currentServ={ editingItem.service }
						services={services}
						submitHandler={ rest.mtEditableEntrySave }
						closeAddForm={ rest.mtEditableEntryClose }
						deleteHandler={ rest.mtEditableEntryDelete }
					/> : null
				}
			</div>
		)
	}
};
