import './App.css';
import React, { useState, useEffect } from 'react'
import Element from './Element.js';
import Character from './Character.js';
import Numbers from './Numbers.js';
import Result from './Result.js';

function Form(props) {

	const [page, setPage] = useState(1);
	const [element, setElement] = useState('');
	const [character, setCharacter] = useState('');
	const [stats, setStats] = useState({});

	const nextPage = () => {
		setPage(page + 1);
	}

	const prevPage = () => {
		setPage(page - 1);
	}

	const homePage = () => {
		setPage(1);
	}

	switch(page){

		case 1:
		return (
  			<div>
				<Element nextPage={nextPage} setElement={setElement}/>
			</div>
		);
		case 2:
		return (
			<div>
				<Character nextPage={nextPage} prevPage={prevPage} setImg={props.setImg} element={element} setCharacter={setCharacter}/>	
			</div>
		);
		case 3:
		return (
			<div>
				<Numbers nextPage={nextPage} prevPage={prevPage} element={element} character={character} setStats={setStats}/>	
			</div>
		);
		case 4:
		return (
			<div>
				<Result prevPage={prevPage} homePage={homePage} character={character} element={element} stats={stats}/>
			</div>
		);
	}
}

export default Form;
