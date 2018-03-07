import React from 'react';
import { Field, FormSection } from 'redux-form';

import { validateField, validateSelectField, required } from '../../utils/validate';
import { ServicePostalFields } from './servicePostalFields';
import { ServiceAddresseesFields } from './serviceAddresseesFields';

export const ServiceDeliveryRFFields = ({navSelected}) => (
	<React.Fragment>
		<ServicePostalFields navSelected={ navSelected } />

		<ServiceAddresseesFields navSelected={ navSelected } name='recipient' />

		<FormSection name='deliveryAssets'>
			<div className={'formgroup' + (navSelected === 12 ? ' active' : ' hidden')}>
				<div className='formgroup__cell'>
					<label>
						Тип отправления:&nbsp;
						<Field
							name="shipmentType"
							component={ validateSelectField }
							validate={[ required ]}>
							<option value={1}>Письмо</option>
							<option value={2}>Бандероль</option>
							<option value={3}>Посылка</option>
						</Field>
					</label>
				</div>
			</div>
		</FormSection>
	</React.Fragment>
)