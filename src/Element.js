import './App.css';
import React, { useState, useEffect } from 'react'
import images  from  './public/elements/index.js'
import FadeIn from 'react-fade-in';

function Element(props) {

	const forward = e => {
		props.setElement(e.target.value);
		props.nextPage();
	};

	return (
	<div style={{position: "absolute", marginTop: "5vh"}}>
		<FadeIn delay ={100}>
			<div className="elementsRow1" >
				<input type="image" src={images.geo} onClick={forward} value="geo" style={{maxWidth: '15%', height: 'auto', padding: '20px'}} />			
				<input type="image" src={images.pyro}  onClick={forward} value="pyro" style={{maxWidth: '15%', height: 'auto', padding: '20px'}} />
			</div>
			<div className="elementsRow2">
				<div className="elementsRow2left" >
					<input type="image" src={images.cryo}  onClick={forward} value="cryo" style={{maxWidth: '45%', height: 'auto', padding: '20px'}} />	
				</div>
				<h1 className="elementsRow2insidetext">
					<b>Elements</b>
				</h1>
				<div className="elementsRow2right">
					<input type="image" src={images.electro}  onClick={forward} value="electro" style={{maxWidth: '45%', height: 'auto', padding: '20px'}} />
				</div>	
			</div>
			<div className="elementsRow3">
				<input type="image" src={images.anemo}  onClick={forward} value="anemo" style={{maxWidth: '15%', height: 'auto', padding: '20px'}} />			
				<input type="image" src={images.hydro}  onClick={forward} value="hydro" style={{maxWidth: '15%', height: 'auto', padding: '20px'}} />
			</div>
		</FadeIn>
	</div>
	);
}

export default Element;
