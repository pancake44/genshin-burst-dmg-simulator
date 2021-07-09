import React, {Component} from 'react';
import geo from './geo.png';
import pyro from './pyro.png';
import cryo from './cryo.png';
import electro from './electro.png';
import anemo from './anemo.png';
import hydro from './hydro.png';
import CharSel from './CharSel.js';


class ElmSel extends Component {

	constructor(props){
		super(props);
		this.state = {
			element: 'geo',
			character: 'amber'
		}
		this.handleClick = this.handleClick.bind(this);
	}
	
	handleClick(event) {
		this.setState({element: event.target.value});
		document.getElementById("d1").style.display = "none";
		document.getElementById("d2").style.display = "block";
	}

	render() {
		return (
			<div>
				<h1 style={{marginTop: '10%'}}>Choose your Character<hr /></h1>
				<div id="d1" style={{display: "block"}}>
					<div>
						<input type="image" src={geo} onClick={this.handleClick} value="geo" style={{maxWidth: '15%', height: 'auto', padding: '20px'}} />			
						<input type="image" src={pyro} onClick={this.handleClick} value="pyro" style={{maxWidth: '15%', height: 'auto', padding: '20px'}} />
					</div>
					<div>
						<input type="image" src={cryo} onClick={this.handleClick} value="cryo" style={{maxWidth: '15%', height: 'auto', padding: '20px'}} />			
						<input type="image" src={electro} onClick={this.handleClick} value="electro" style={{maxWidth: '15%', height: 'auto', padding: '20px'}} />
					</div>
					<div>
						<input type="image" src={anemo} onClick={this.handleClick} value="anemo" style={{maxWidth: '15%', height: 'auto', padding: '20px'}} />			
						<input type="image" src={hydro} onClick={this.handleClick} value="hydro" style={{maxWidth: '15%', height: 'auto', padding: '20px'}} />
					</div>
				</div>
				<div id="d2" style={{display: "none"}}>
					<CharSel el={this.state.element}/>
				</div>
			</div>
		);
	}
}

export default ElmSel;
