import './App.css';
import React, { useState, useEffect } from 'react'
import Form from './Form.js';
import Img from './Img.js';
import images from './public/monsters/index.js';
import HeaderBar from './HeaderBar.js';
import ClipLoader from 'react-spinners/ClipLoader';

function getImg(){
	var arr = ['a', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k' ];
	return images[arr[Math.floor(Math.random() * 10)]];
}

function App() {

	const [img, setImg] = useState(getImg());
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, []);

	return (
    	<div className="App">
			<HeaderBar />
			{
				loading ? ( 
					<div style={{width: "100%", height: "100vh", alignItems: "center", justifyContent: "center", display: "flex"}}>
						<ClipLoader
							size={90}
							color={"#123abc"}
							loading={loading}
						/>
					</div>
				)
				: (
					<div className="Container">
						<div className="Item">
							<Img img={img}/>
						</div>
						<div className="Item">
							<Form setImg={setImg}/>
						</div>
					</div>
				)
			}
	   	</div>
  );
}

export default App;
