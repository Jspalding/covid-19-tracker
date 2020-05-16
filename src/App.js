import React from 'react';
import Particles from 'react-particles-js';

import SideHeader from "./components/SideHeader/SideHeader";
import DesktopWrapper from "./components/DesktopWrapper/DesktopWrapper";

const App = props => {

	let content = (
		<div className="mx-auto">
			<div className="grid grid-cols-2">
				<SideHeader />
				<DesktopWrapper />
			</div>
		</div>
	);

	return (content);
}

export default App;