import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
import { MasterTable } from '../components';

const {
	getMasterTableHeader,
	masterTableGetEntry,
	mtFetchEntryID,
	mtEditableEntryClose,
	mtEntrySearch,
	masterTableReset,
	mtEditableEntrySave,
	mtEditableEntryDelete
} = actions;

class MasterTableContainer extends Component {
	componentDidMount(){
		const { tableHeader } = this.props;
		if ( tableHeader === null ){
			this.props.getMasterTableHeader();
		}
	}

	componentWillUnmount(){
		this.props.masterTableReset();
	}

	render(){
		const { auth, ...rest } = this.props;
		return <MasterTable { ...rest } />
	}
};

const mapStateToProps = state => ({
	...state.masterTable
});

const mapDispatchToProps = {
	getMasterTableHeader,
	masterTableGetEntry,
	mtFetchEntryID,
	mtEntrySearch,
	masterTableReset,
	mtEditableEntryClose,
	mtEditableEntrySave,
	mtEditableEntryDelete
};

export default connect(mapStateToProps, mapDispatchToProps)(MasterTableContainer);