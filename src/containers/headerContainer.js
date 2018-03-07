import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
import { Header } from '../components';

const { getMainHeader, logout } = actions;

class HeaderContainer extends Component {
	componentDidMount(){
		const { auth, getMainHeader } = this.props;
		auth && getMainHeader();
	}

	render(){
		return  <Header {...this.props } />
	}
};

const mapStateToProps = ( state ) => ({
	...state.authorization,
	...state.header,
	...state.router
});

const mapDispatchToProps = {
	getMainHeader,
	logout
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);