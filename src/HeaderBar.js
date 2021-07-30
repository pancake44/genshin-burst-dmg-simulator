import React, {useState} from 'react';
import './App.css';


class HeaderBar extends React.Component {

	/*
	constructor() {
		super();
		this.state = {
			open:false 
		};
  	}

	handleClick() {
		let { open } = this.state;
    	this.setState({
			open: !open
		});
		if(!open){
			document.getElementById("Over").style.display = "block";

		}
		else{
			document.getElementById("Over").style.display = "none";
		}
	}
	*/

	render() {
		return (
			<div className="HeaderBar">
				<h1>Genshin Bust Damage Simulator</h1>
			</div>
		);
	}
};

export default HeaderBar;
