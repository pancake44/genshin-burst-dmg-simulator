import './App.css';
import React, { useState } from 'react'
import Form from './Form.js';
import Img from './Img.js';
import images from './public/monsters/index.js';
import HeaderBar from './HeaderBar.js';

function getImg(){
	var arr = ['a', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k' ];
	return images[arr[Math.floor(Math.random() * 10)]];
}

function App() {

	const [img, setImg] = useState(getImg());

	return (
    	<div className="App">
			<HeaderBar />
			<div className="Container">
				<div className="Item">
					<Img img={img}/>
				</div>
				<div className="Item">
					<Form setImg={setImg}/>
				</div>
			</div>
   		</div>
  );
}

export default App;
