export const tableFields = ( currentServ ) => {
	switch ( currentServ ) {
		case 1:
			return ['operator', 'dateCreate', 'client', 'sender', 'recipient', 'dateSend', 'dateRecive', 'courier', 'shipmentType', 'paymentType', 'income', 'expense', 'comments', 'payment', 'shipmentPickup', 'shipmentReturn'];
		case 2:
			return ['operator', 'dateCreate', 'client', 'storageType', 'paymentType', 'income', 'expense', 'comments', 'payment']
		case 3:
			return ['operator', 'dateCreate', 'client', 'courier', 'paymentType', 'income', 'expense', 'comments', 'payment']
		case 4:
			return ['operator', 'dateCreate', 'client', 'courier', 'shipmentType', 'recipient', 'paymentType', 'income', 'expense', 'comments', 'payment']
		case 5:
			return ['operator', 'dateCreate', 'client', 'docProcessing', 'paymentType', 'income', 'expense', 'comments', 'payment']
		default:
			return ['operator', 'dateCreate', 'client', 'serviceName', 'paymentType', 'income', 'expense', 'comments', 'payment'];
	};
};