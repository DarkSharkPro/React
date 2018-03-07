import React from 'react';
import {
	SupportContainer,
	MasterTableContainer,
	ClientsContainer,
	AddresseesContainer,
	CouriersContainer } from './containers';
import { Route, Redirect, Switch } from 'react-router-dom';
import { PATH } from './const/config';

const Routes = () => (
	<Switch>
		<Route path={`${PATH}clients`} render={() => <ClientsContainer /> } />
		<Route path={`${PATH}addressees`} render={() => <AddresseesContainer /> } />
		<Route path={`${PATH}couriers`} render={() => <CouriersContainer/> } />
		<Route path={`${PATH}table`} render={() => <MasterTableContainer/> } />
		<Route path={`${PATH}logout`} render={ () => <Redirect to={`${PATH}/`} /> } />
		<Route path={`${PATH}test`} render={() => <SupportContainer /> } />
		<Route path={PATH} render={ () => <Redirect to={`${PATH}table`} /> } />
	</Switch>
);

export default Routes;