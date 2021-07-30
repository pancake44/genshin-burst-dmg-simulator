import React, {Component} from 'react';
import { AwesomeButton } from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";
import FadeIn from 'react-fade-in';
import DoMath from './DoMath.js';

function Result(props){
	
	var [damage, meltDmg, vapeDmg, overloadDmg, shatteredDmg, electrochargedDmg, swirlDmg] = DoMath(props.character, props.element, props.stats);


	switch (props.element){

		case "pyro":
			return(
				<div style={{marginTop: "5vh"}}>
					<FadeIn>
						<h1>Damge is {damage}</h1>
						<h1>Melt Damge is {meltDmg}</h1>
						<h1>Vape Damge is {vapeDmg}</h1>
						<h2>Overload Damage is {overloadDmg}</h2>
					</FadeIn>
					<br /><br />
					<AwesomeButton type="primary" onPress={() => {props.prevPage()}}>Back</AwesomeButton>
					<AwesomeButton type="primary" onPress={() => {props.homePage()}} style={{marginLeft: "10px"}}>Home</AwesomeButton>
				</div>
			);

		case "cryo":
			return(
				<div style={{marginTop: "5vh"}}>
					<FadeIn>
						<h1>Damge is {damage}</h1>
						<h1>Melt Damge is {meltDmg}</h1>
					</FadeIn>
					<br /><br />
					<AwesomeButton type="primary" onPress={() => {props.prevPage()}}>Back</AwesomeButton>
					<AwesomeButton type="primary" onPress={() => {props.homePage()}} style={{marginLeft: "10px"}}>Home</AwesomeButton>
				</div>
			);
		
		case "hydro":
			return(
				<div style={{marginTop: "5vh"}}>
					<FadeIn>
						<h1>Damge is {damage}</h1>
						<h1>Vape Damge is {vapeDmg}</h1>
						<h2>Electrocharged Damage is {electrochargedDmg}</h2>
					</FadeIn>
					<br /><br />
					<AwesomeButton type="primary" onPress={() => {props.prevPage()}}>Back</AwesomeButton>
					<AwesomeButton type="primary" onPress={() => {props.homePage()}} style={{marginLeft: "10px"}}>Home</AwesomeButton>
				</div>
			);

		case "electro":
			return(
				<div style={{marginTop: "5vh"}}>
					<FadeIn>
						<h1>Damge is {damage}</h1>
						<h2>Overloaded Damge is {overloadDmg}</h2>
						<h2>Electrocharged Damage is {electrochargedDmg}</h2>
					</FadeIn>
					<br /><br />
					<AwesomeButton type="primary" onPress={() => {props.prevPage()}}>Back</AwesomeButton>
					<AwesomeButton type="primary" onPress={() => {props.homePage()}} style={{marginLeft: "10px"}}>Home</AwesomeButton>
				</div>
			);

		case "anemo":
			return(
				<div style={{marginTop: "5vh"}}>
					<FadeIn>
						<h1>Damge is {damage}</h1>
						<h2>Swirl Damge is {swirlDmg}</h2>
					</FadeIn>
					<br /><br />
					<AwesomeButton type="primary" onPress={() => {props.prevPage()}}>Back</AwesomeButton>
					<AwesomeButton type="primary" onPress={() => {props.homePage()}} style={{marginLeft: "10px"}}>Home</AwesomeButton>
				</div>
			);

		case "geo":
			return(
				<div style={{marginTop: "5vh"}}>
					<FadeIn>
						<h1>Damge is {damage}</h1>
						<h2>Shattered Damge is {shatteredDmg}</h2>
					</FadeIn>
					<br /><br />
					<AwesomeButton type="primary" onPress={() => {props.prevPage()}}>Back</AwesomeButton>
					<AwesomeButton type="primary" onPress={() => {props.homePage()}} style={{marginLeft: "10px"}}>Home</AwesomeButton>
				</div>
			);
	}
}

export default Result;

