import React, {Component} from 'react';
import { geo } from './CharList.js';
import { pyro } from './CharList.js';
import Slider from '@material-ui/core/Slider';
import { useTracked } from './State.js';
import hu_tao from './characters/hu_tao.png';

const DmgPage = () => {

	const [state, dispatch] = useTracked();

	const handleButtonClick = () => {
		document.getElementById("d6").style.display = "none";
		document.getElementById("d5").style.display = "block";
	}

	return(
		<div>
			<div>
				<img src={hu_tao} alt="hu tao" style={{maxWidth: "60%", height: "auto"}}/>
			</div>
			<div>
				<button onClick={handleButtonClick}>x</button>
			</div>
		</div>
	);
}

export default DmgPage;

