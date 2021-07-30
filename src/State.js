import { useState } from 'react';

import { createContainer } from 'react-tracked';

import images from './public/monsters/index.js';


function getImg(){
	var im;
	var x = Math.floor(Math.random() * 11);
	var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k' ];
	im = arr[x];

	console.log(im);
	return images[im];
}


const initialState = {
	element: 'geo',
	character: 'amber',
	img: getImg()
};

const useValue = () => useState(initialState);

export const { Provider, useTracked } = createContainer(useValue, true);
