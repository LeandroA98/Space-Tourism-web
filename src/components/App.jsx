import React from "react";
import { Route, useLocation } from "react-router-dom"
// COMPONENTS
import NavbarComponent from "./navbar";
import HomeComponent from "./home";
import DestinationComponent from "./destination";
import CrewComponent from "./crew";
import TechnologyComponent from "./technology";
//STYLES
import "../scss/index.scss";

const App =  () => {
	const URL = 
		"https://raw.githubusercontent.com/LeandroA98/space-web-api/gh-pages/data.json"

	const getData = async () => {
		const response = await fetch(URL);
		const data = await response.json();
		return data
	}
	const location = useLocation().pathname;
	const newClass = location.split("/")[1];
	return(
		<div className={"main " + newClass}>
			<NavbarComponent currentRoute={newClass} />
			<Route exact path="/">
				<HomeComponent />
			</Route>
			<Route path="/destination">
				<DestinationComponent data={getData()} />
			</Route>
			<Route path="/crew">
				<CrewComponent data={getData()} />
			</Route>
			<Route path="/technology">
				<TechnologyComponent data={getData()} />
			</Route>
		</div>
	);
};

export default App;