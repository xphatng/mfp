// import { mount, mounttest } from 'sales/SalesBoot';
import MarketingApp from './components/marketingApp';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';
import React, { useRef, useEffect } from 'react';
console.log(mounttest);

export default () => {
	const ref = useRef(null);

	useEffect(() => {
		mount();
	});
	return (
		<div style={{ display: 'flex' }}>
			{/* <div style={{ width: '50%' }}>
				<app-root></app-root>
			</div> */}
			<div style={{ width: '50%' }}>
				<MarketingApp />
			</div>
		</div>
	);
};
