import React, { useEffect, useState} from "react";

// COMPONENT CHILD
import SliderComponent from "./technology.slider";
// ICON
import LoadingIcon from "../assets/shared/loading-icon.png"

const technology = ( {data} ) => {
	const [technology, setTechnology] = useState(null);
	const [currentItem, setcurrentItem] = useState(null);
	const [currentIndex, setcurrentIndex] = useState(0);
	const setItem = (i) => {
		const current = technology.filter((item, index) => index === i);
		setcurrentItem(current);
		setcurrentIndex(i)
	};
	useEffect(() => {
		setData();
	}, []);
	const setData = async () => {
		data.then((res) => {
			const current = res.technology.filter((item, index) => index === 0)
			setcurrentItem(current);
			setTechnology(res.technology);
		});
	};
	return (
		<>
		{ currentItem ? (
			<SliderComponent 
			current={currentItem} 
			index={currentIndex} 
			setItem={setItem}/>
		) : (
		<span className="loading">
			<img src={LoadingIcon} alt="" />
		</span>
		)
	}
		</>
	)
}

export default technology;