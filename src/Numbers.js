import React, {Component} from 'react';
import { AwesomeButton } from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";
import Slider from '@material-ui/core/Slider';
import DoMath from './DoMath.js';
import FadeIn from 'react-fade-in';

function Numbers(props){
	
	const [atk, setAtkValue] = React.useState(10);
	const [em, setEmValue] = React.useState(0);
	const [cd, setCdValue] = React.useState(50);
	const [dmg, setDmgValue] = React.useState(0);
	const [rDmg, setRDmgValue] = React.useState(0);
	const [lvl, setLvl] = React.useState(90);

	const handleAtkChange = (event, newValue) => {
		setAtkValue(newValue);
	}

	const handleEmChange = (event, newValue) => {
		setEmValue(newValue);
	}

	const handleCdChange = (event, newValue) => {
		setCdValue(newValue);
	}

	const handleDmgChange = (event, newValue) => {
		setDmgValue(newValue);
	}

	const handleRDmgChange = (event, newValue) => {
		setRDmgValue(newValue);
	}

	const handleLvlChange = (event, newValue) => {
		setLvl(newValue);
	}

	const forward = e => {
		props.setStats({atk, em, cd, dmg, rDmg, lvl});
		props.nextPage();
	};

	const showElemental = () => {
		document.getElementById("emButton").style.display = "none";
		document.getElementById("hideButton").style.display = "block";
		document.getElementById("atk").style.display = "none";
		document.getElementById("cd").style.display="none";
		document.getElementById("dmg").style.display="none";
		document.getElementById("elementOptions").style.display = "block";
	};

	const hideElemental = () => {
		document.getElementById("emButton").style.display = "block";
		document.getElementById("hideButton").style.display="none";
		document.getElementById("atk").style.display = "block";
		document.getElementById("cd").style.display="block";
		document.getElementById("dmg").style.display="block";
		document.getElementById("elementOptions").style.display = "none";
	};



	return(
	<div>
		<div style={{marginTop: "10vh"}}>
		<FadeIn>
			<div id="atk">
				<div>
					<h3 style={{display: "inline-block"}}>Attack</h3>
					<input type="number" onChange={(e) => setAtkValue(e.target.value)} value={atk} min="1" max="5000"style={{display: "inline-block", marginLeft: "10px", width: "60px"}}/>
				</div>
				<div style={{paddingLeft: "15%", paddingRight: "15%"}}>
					<Slider
	  					value={atk}
	  					aria-labelledby="continuous-slider"
	  					step={1}
	  					min={1}
	  					max={5000}
	  					valueLabelDisplay="auto"
						onChange={handleAtkChange}
					/>	
				</div>
			</div>
			<br />
			<div id="cd">
				<div>
					<h3 style={{display: "inline-block"}}>Crit Damage</h3>
					<input type="number" onChange={(e) => setCdValue(e.target.value)} value={cd} min="50" max="350"style={{display: "inline-block", marginLeft: "10px", width: "60px"}}/>
				</div>
				<div style={{paddingLeft: "15%", paddingRight: "15%"}}>
					<Slider
	  					value={cd}
	  					aria-labelledby="continuous-slider"
	  					step={1}
	  					min={50}
	  					max={350}
	  					valueLabelDisplay="auto"
						onChange={handleCdChange}
					/>	
				</div>
			</div>
			<br />
			<div id="dmg">
				<div>
					<h3 style={{display: "inline-block"}}>Elemental Damage Bonus</h3>
					<input type="number" onChange={(e) => setDmgValue(e.target.value)} value={dmg} min="0" max="200"style={{display: "inline-block", marginLeft: "10px", width: "60px"}}/>
				</div>
				<div style={{paddingLeft: "15%", paddingRight: "15%"}}>
					<Slider
	  					value={dmg}
	  					aria-labelledby="continuous-slider"
	  					step={1}
	  					min={0}
	  					max={200}
	  					valueLabelDisplay="auto"
						onChange={handleDmgChange}
					/>	
				</div>
			</div>
			<br />

			<div id="emButton">
				<AwesomeButton type="primary" onPress={() => {showElemental()}}>Add Reaction Options</AwesomeButton>
			</div>

			<div id="elementOptions" style={{display: "none"}}>
				<div id="em">
					<div>
						<h3 style={{display: "inline-block"}}>Elemental Mastery</h3>
						<input type="number" onChange={(e) => setEmValue(e.target.value)} value={em} min="0" max="1000"style={{display: "inline-block", marginLeft: "10px", width: "60px"}}/>
					</div>
					<div style={{paddingLeft: "15%", paddingRight: "15%"}}>
						<Slider
	  						value={em}
	  						aria-labelledby="continuous-slider"
	  						step={1}
	  						min={0}
	  						max={1000}
	  						valueLabelDisplay="auto"
							onChange={handleEmChange}
						/>	
					</div>
				</div>
				<br />
				<div id="rDmg">
					<div>
						<h3 style={{display: "inline-block"}}>Reaction Damage Bonus</h3>
						<input type="number" onChange={(e) => setRDmgValue(e.target.value)} value={rDmg} min="0" max="1000"style={{display: "inline-block", marginLeft: "10px", width: "60px"}}/>
					</div>
					<div style={{paddingLeft: "15%", paddingRight: "15%"}}>
						<Slider
	  						value={rDmg}
	  						aria-labelledby="continuous-slider"
	  						step={1}
	  						min={0}
	  						max={100}
	  						valueLabelDisplay="auto"
							onChange={handleRDmgChange}
						/>	
					</div>
				</div>
				<div id="lvl">
					<form>
						Level:
						<input id="80" type="radio" value="80" name="form" style={{marginLeft: "18px"}} onChange={handleLvlChange} />
						<label for="80">80</label>
						<input id="90" type="radio" value="90" name="form" style={{marginLeft: "18px"}} onChange={handleLvlChange} defaultChecked/>
						<label for="90">90</label>
					</form>
				</div>
			</div>
			</FadeIn>
		</div>
		<div id="hideButton" style={{display: "none"}}>
			<br /><br />
			<AwesomeButton type="primary" onPress={() => {hideElemental()}}>Hide Reaction Options</AwesomeButton>
		</div>
		<div>
			<br /><br />
			<AwesomeButton type="primary" onPress={() => {props.prevPage()}}>Back</AwesomeButton>
			<AwesomeButton type="primary" onPress={() => {forward()}} style={{marginLeft: "10px"}}>Submit</AwesomeButton>
		</div>
	</div>
	);
}

export default Numbers;

