import * as React from "react";
import { Provider} from "./State.js";
import './App.css';
import ElmSel from './ElmSel';
import images from './public/monsters/index.js';


function getImg(){
	var im;
	var x = Math.floor(Math.random() * 11);
	var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k' ];
	im = arr[x];

	console.log(im);
	return images[im];
}

function App() {
  return (
  	<Provider>
    <div className="App">
			<div className="column1">
        		<img src={getImg()} alt="monster" style={{ maxWidth: '100%', height: 'auto'/*, marginLeft: '20px'*/}}/>
			</div>
			<div className="column2" style={{textAlign: "center", minWidth: "50%"}}>
				<ElmSel />
			</div>
	</div>
	</Provider>
  );
}

export default App;
