import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Mount function to start the app
const mount = (el) => {
	ReactDOM.render(<App />, el);
};

if (process.env.NODE_ENV === 'development') {
	const devroot = document.querySelector('#_marketing-dev-root');
	if (devroot) {
		mount(devroot);
	}
}

// We are running through container
// and we should export the mount function
export { mount };
