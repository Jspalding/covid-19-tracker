import React, { useState, useEffect } from 'react';

import SideHeader from "./components/SideHeader/SideHeader";
import DesktopWrapper from "./components/DesktopWrapper/DesktopWrapper";
import MobileWrapper from "./components/MobileWrapper/MobileWrapper";

const App = props => {
	
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
	}, []);

	let width = windowWidth;
	let mobile = width <= 900;
	let content

	if (mobile) {
		content = (
			<div className="">
				<MobileWrapper />
			</div>
		);
	} else {
		content = (
			<div className="">
				<SideHeader />
				<DesktopWrapper />
			</div>
		);
	};

	return (content);
}

export default App;