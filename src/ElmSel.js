import React, {Component} from 'react';
import geo from './geo.png';
import pyro from './pyro.png';
import cryo from './cryo.png';
import electro from './electro.png';
import anemo from './anemo.png';
import hydro from './hydro.png';
import CharSel from './CharSel.js';
import {useTracked} from './State.js';
import H from './H.js';


const ElmSel = () => {

	const [state, dispatch] = useTracked();
	

	const handleClick = (event) => {
		dispatch({element: event.target.value});
		document.getElementById("d1").style.display = "none";
		document.getElementById("d2").style.display = "block";
	};


	return (
		<div>
			<div id="d0">
				<H />
			</div>
			<div id="d1" style={{display: "block"}}>
				<div>
					<input type="image" src={geo} onClick={handleClick} value="geo" style={{maxWidth: '15%', height: 'auto', padding: '20px'}} />			
					<input type="image" src={pyro} onClick={handleClick} value="pyro" style={{maxWidth: '15%', height: 'auto', padding: '20px'}} />
				</div>
				<div>
					<input type="image" src={cryo} onClick={handleClick} value="cryo" style={{maxWidth: '15%', height: 'auto', padding: '20px'}} />			
					<input type="image" src={electro} onClick={handleClick} value="electro" style={{maxWidth: '15%', height: 'auto', padding: '20px'}} />
				</div>
				<div>
					<input type="image" src={anemo} onClick={handleClick} value="anemo" style={{maxWidth: '15%', height: 'auto', padding: '20px'}} />			
					<input type="image" src={hydro} onClick={handleClick} value="hydro" style={{maxWidth: '15%', height: 'auto', padding: '20px'}} />
				</div>
			</div>
			<div id="d2" style={{display: "none", textAlign: "center"}}>
				<CharSel />
			</div>
		</div>
	);
	
}

export default ElmSel;
