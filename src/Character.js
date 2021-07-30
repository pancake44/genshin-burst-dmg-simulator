import React, {Component} from 'react';
import { AwesomeButton } from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";
import { geo } from './public/characters/CharList.js';
import { pyro } from './public/characters/CharList.js';
import { cryo } from './public/characters/CharList.js';
import { anemo } from './public/characters/CharList.js';
import { electro } from './public/characters/CharList.js';
import { hydro } from './public/characters/CharList.js';
import { notReady } from './public/characters/CharList.js';
import images from './public/characters/index.js';
import FadeIn from 'react-fade-in';

function Character(props){

	var charList;
	var color;
	if(props.element == "geo"){
		charList = geo.chars;
		color = geo.color;
	}
	else if(props.element== "pyro"){
		charList = pyro.chars;
		color = pyro.color;
	}
	else if(props.element == "electro"){
		charList = electro.chars;
		color = electro.color;
	}
	else if (props.element == "cryo"){
		charList = cryo.chars;
		color = cryo.color;
	}
	else if(props.element== "anemo"){
		charList = anemo.chars;
		color = anemo.color;
	}
	else{
		charList = hydro.chars;
		color = hydro.color;
	}

	const forward = e => {
		if(!notReady.includes(e.target.value)){
			var cha = e.target.value;
			props.setCharacter(cha);
			cha = cha.replace(/ /g,"_");
			props.setImg(images[cha.toLowerCase()]);
			props.nextPage();
		}
	};

	const hover = e => {
		if(notReady.includes(e.target.value)){
			e.target.style.color = "#c0c0c0";
		}
		else{
			e.target.style.color = color;
		}
	}

	const endHover = e => {
		e.target.style.color = 'white';
	}

	return(
		<div style={{marginTop: "5vh"}}>
			<FadeIn>
			<h1><b>Characters</b></h1>
			</FadeIn>
			<ul style={{listStyleType: "none", paddingLeft: "0px"}}>
				<FadeIn>
					{charList.map((item) => <h2><li><option value={item} onClick={forward} style={{cursor: "pointer", display: "inline"}} onMouseOver={hover} onMouseLeave={endHover}>{item}</option></li></h2>)}
				</FadeIn>
			</ul>
			<br /><br />	
			<AwesomeButton type="primary" onPress={() => {props.prevPage()}}>Back</AwesomeButton>
		</div>
	);
}

export default Character;

