import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { HeaderContainer, AuthorizationContainer, NotifiersContainer } from './containers';
import Routes from './routes';
import actions from './actions';

class App extends Component{
	componentWillMount(){
		this.props.checkToken();
	}

	render(){
		const { auth, location } = this.props;
		return (
			<div className='container'>
				<NotifiersContainer />
				{
					auth ?
					<Fragment>
						<HeaderContainer />
						<Routes />
					</Fragment> :
					<AuthorizationContainer />
				}
			</div>
		)
	}
};

const mapStateToProps = ({authorization, router}) => ({
	auth: authorization.auth,
	location: router.location
});

const mapDispatchToProps = dispatch => ({
	checkToken: () => dispatch( actions.checkToken() )
});

export default connect(mapStateToProps, mapDispatchToProps)(App);