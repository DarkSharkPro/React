import React, { Component } from 'react';
import { connect } from 'react-redux';

import { mtEntityAdd } from '../../actions/masterTableEntity';
import { SelectService } from '../masterTable/selectService';
import AddEntityForm from './addEntityForm';
import { ServiseNotSelected } from './serviseNotSelected';
import { FieldGroupNavigation } from './fieldGroupNavigation';
import './style.css';

class MasterTableAddEntity extends Component {
	constructor(props){
		super(props);
		this.state = {
			currentServ: this.props.currentServ,
			navSelected: 0
		}
	}

	servChangeHandler = ({target}) => {
		const currentServ = Number(target.value);
		this.setState({
			currentServ,
			navSelected: 0
		});
	}

	navClickHandler = (navSelected) => this.setState({navSelected})

	submitHandler = (data) => this.props.submitHandler(data) || this.props.mtEntityAdd(data)

	deleteHandler = () => {
		console.log(this.props);
		const id = this.props.initialValues.id;
		if (id) {
			this.props.deleteHandler(id);
		};
	}

	render(){
		const { currentServ, navSelected } = this.state;
		const initialValues = this.props.initialValues || {
			id: null,
			service: currentServ,
			creationDate: ( new Date() ).toLocaleDateString(),
			keeping: {
				storageType: 1
			},
			docservice: {
				storageType: 1
			},
			deliveryAssets: {
				shipmentType: 2
			},
			finances: {
				paymantType: 1,
				payment: 1
			}
		};
		
		return (
			<div className='addEntity'>
				<div className='navigation'>
					<SelectService
						defaultValue={ currentServ }
						changeHandler={ this.servChangeHandler }
						services={ this.props.services }
					/>
					<FieldGroupNavigation
						currentServ={ currentServ }
						navSelected={ navSelected }
						navClickHandler={ this.navClickHandler }
					/>
				</div>
				{
					currentServ ?
					<AddEntityForm
						form='addEntityForm'
						onSubmit={ this.submitHandler }
						currentServ={ currentServ }
						navSelected={ navSelected }
						initialValues={ initialValues }
						closeAddForm={ this.props.closeAddForm }
						deleteHandler={ initialValues.id ? this.deleteHandler : null }
					/> :
					<ServiseNotSelected />
				}
			</div>
		)
	}
};

const mapStateToProps = (state, parentProps) => ({
	...parentProps
});

const mapDispatchToProps = {
	mtEntityAdd
};

export default connect(mapStateToProps, mapDispatchToProps)(MasterTableAddEntity);