import React, {Component} from 'react';
import { geo } from './CharList.js';
import { pyro } from './CharList.js';
import Slider from '@material-ui/core/Slider';
import DmgPage from './DmgPage.js';
import { useTracked} from './State.js';
import DoMath from './DoMath.js';

const Num = () => {

	const [state, dispatch] = useTracked();
	
	const [atkValue, setAtkValue] = React.useState(10);
	const [emValue, setEmValue] = React.useState(0);
	const [cdValue, setCdValue] = React.useState(50);
	const [dmgValue, setDmgValue] = React.useState(0);

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


	const handleButt = () => {
		var x = DoMath(state.character, atkValue, emValue, cdValue, dmgValue);
		console.log(x);
		//document.getElementById("d0").style.display = "none";
		document.getElementById("d5").style.display = "none";
		document.getElementById("d6").style.display = "block";
	}

	const handleButtonClick = () => {
		document.getElementById("d4").style.display = "none";
		document.getElementById("d3").style.display = "block";
	}

	return(
	<div>
		<div id="d5">
			<div>
				<h3>Attack</h3>
				<div style={{paddingLeft: "15%", paddingRight: "15%"}}>
					<Slider
	  					value={atkValue}
	  					aria-labelledby="continuous-slider"
	  					step={1}
	  					min={1}
	  					max={5000}
	  					valueLabelDisplay="auto"
						onChange={handleAtkChange}
					/>	
				</div>
				<div>
					<input type="number" onChange={(e) => setAtkValue(e.target.value)} value={atkValue} min="1" max="5000"/>
				</div>
			</div>
			<div>
				<h3>EM</h3>
				<div style={{paddingLeft: "15%", paddingRight: "15%"}}>
					<Slider
	  					value={emValue}
	  					aria-labelledby="continuous-slider"
	  					step={1}
	  					min={0}
	  					max={1000}
	  					valueLabelDisplay="auto"
						onChange={handleEmChange}
					/>	
				</div>
				<div>
					<input type="number" onChange={(e) => setEmValue(e.target.value)} value={emValue} min="0" max="1000"/>
				</div>
			</div>
			<div>
				<h3>Crit</h3>
				<div style={{paddingLeft: "15%", paddingRight: "15%"}}>
					<Slider
	  					value={cdValue}
	  					aria-labelledby="continuous-slider"
	  					step={1}
	  					min={50}
	  					max={350}
	  					valueLabelDisplay="auto"
						onChange={handleCdChange}
					/>	
				</div>
				<div>
					<input type="number" onChange={(e) => setCdValue(e.target.value)} value={cdValue} min="50" max="350"/>
				</div>
			</div>
			<div>
				<h3>DMG</h3>
				<div style={{paddingLeft: "15%", paddingRight: "15%"}}>
					<Slider
	  					value={dmgValue}
	  					aria-labelledby="continuous-slider"
	  					step={1}
	  					min={0}
	  					max={200}
	  					valueLabelDisplay="auto"
						onChange={handleDmgChange}
					/>	
				</div>
				<div>
					<input type="number" onChange={(e) => setDmgValue(e.target.value)} value={dmgValue} min="0" max="200"/>
				</div>
			</div>
			<div>
				<button onClick={handleButt}>ok</button>
				<button onClick={handleButtonClick}>Return</button>
			</div>
		</div>
		<div id="d6" style={{display: "none"}}>
			<DmgPage />
		</div>
	</div>
	);
}

export default Num;

