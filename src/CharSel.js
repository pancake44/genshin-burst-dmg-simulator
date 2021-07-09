import React, {Component} from 'react';
import { geo } from './CharList.js';
import { pyro } from './CharList.js';
import { cryo } from './CharList.js';
import { anemo } from './CharList.js';
import { electro } from './CharList.js';
import { hydro } from './CharList.js';
import Num from './Num.js';
import {useTracked} from './State.js';

const CharSel = () => {

	const [state, dispatch] = useTracked();

	var charList;
	if(state.element == "geo")
		charList = geo;
	else if(state.element== "pyro")
		charList = pyro;
	else if(state.element == "electro")
		charList = electro;
	else if (state.element == "cryo")
		charList = cryo;
	else if(state.element== "anemo")
		charList = anemo;
	else
		charList = hydro;

	const handleButtonClick = () => {
		document.getElementById("d2").style.display = "none";
		document.getElementById("d1").style.display = "block";
	}

	const handleItemClick = (event) => {
		dispatch({character: event.target.value});
		document.getElementById("d3").style.display = "none";
		document.getElementById("d4").style.display = "block";
	}
	
	return(
		<div>
			<div id="d3">
				<ul style={{listStyleType: "none", paddingLeft: "0px"}}>
					{charList.map((item) => <li><option value={item} onClick={handleItemClick}>{item}</option></li>)}
				</ul>
				<button onClick={handleButtonClick}>Return</button>
			</div>
			<div id="d4" style={{display: "none"}}>
				<Num />
			</div>
		</div>
	);
}

export default CharSel;

