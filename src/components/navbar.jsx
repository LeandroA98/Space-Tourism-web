import React, { useState } from "react"
import icono from "../assets/shared/logo.svg";
import closeIcon from "../assets/shared/icon-close.svg";
import openIcon from "../assets/shared/icon-hamburger.svg";
import { Link } from "react-router-dom"


const navbar = ({currentRoute}) => {
	const [isShowing, setIsShowing] = useState(false); 
	return (
		<header>
			<div 
				className="navbar__outside" 
				style={isShowing ? {display: "block"} : {display: "none"}}
				onClick = {() => setIsShowing(isShowing)}
			></div>
			<div className="logo">
				<img src={icono} alt="logo" aria-hidden="true" />
				<hr />
			</div>
			<div 
				className="bars__navbar" 
				style={isShowing ? {display: "none"} : {display: "flex"}}
			>
				<img src={openIcon} alt="open" onClick={() => {setIsShowing(!isShowing)}}/>
			</div>
			<ul 
				className="navbar" 
				style={isShowing ? { right:"0px" } : { right: "-50vh"}}
			>
				<div 
					className="close" 
				>
					<img 
						src={closeIcon} alt="close" 
						onClick={() => setIsShowing(!isShowing)} 
					/>
				</div>
				<li>
					<Link to="/" 
						style={
							currentRoute === "" 
							? {borderBottom: "2px solid white"} 
							: {borderBottom: "2px solid transparent"}
						}
					>
						<strong>0 0</strong>&nbsp; H O M E
					</Link>
				</li>
				<li>
					<Link to="/destination" 
						style={
							currentRoute === "destination" 
							? {borderBottom: "2px solid white"} 
							: {borderBottom: "2px solid transparent"}
						}
					>
						<strong>0 1</strong>&nbsp; D E S T I N A T I O N
					</Link>
				</li>
				<li>
					<Link to="/crew" 
						style={
							currentRoute === "crew" 
							? {borderBottom: "2px solid white"} 
							: {borderBottom: "2px solid transparent"}
						}
					>
						<strong>0 2</strong>&nbsp; C R E W
					</Link>
				</li>
				<li>
					<Link to="/technology" 
						style={
							currentRoute === "technology" 
							? {borderBottom: "2px solid white"} 
							: {borderBottom: "2px solid transparent"}
						}
					>
						<strong>0 3</strong>&nbsp; T E C H N O L O G Y
					</Link>
				</li>
			</ul>
		</header>
	);
}

export default navbar;