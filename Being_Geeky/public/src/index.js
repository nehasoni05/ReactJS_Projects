import React from 'react';
import ReactDOM from 'react-dom';
import TopNav from "./SPA/navbar.js";
import BeingGeeky from "./SPA/beingGeeky.js";
import Tutorial from "./SPA/tutorial.js";
import Video from "./SPA/video.js";
import Lectures from "./SPA/lectures.js";
import Coupons from "./SPA/coupons.js";
import Footer from "./SPA/footer.js";

class Cq extends React.Component {
	render() {
		return (
            <>
			<TopNav/>
            <BeingGeeky/>
            <Tutorial/>
            <Video/>
            <Lectures/>
            <Coupons/>
            <Footer/>
            </>
		)
	}
}

ReactDOM.render(
	<Cq />,
	document.getElementById('root')
);
