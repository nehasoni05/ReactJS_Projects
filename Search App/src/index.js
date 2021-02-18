import React from 'react';
import Search from './search/index.js'
import ReactDOM from 'react-dom';

class Cq extends React.Component
 {
	render() {
      
		return (
			  <div>
				  <Search/>
              </div>
		)
	}
}
ReactDOM.render(
	<Cq />,
	document.getElementById('root')
);
