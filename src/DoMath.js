import {burst} from './Burst.js'; 



const DoMath = (character, atk, em, cd, dmg) => {
	
	var base;
	var c;
	for(c in burst){
		if(burst[c]['name'] == character)
			base = burst[c]['bdmg'];
	}

	console.log("atk"+atk);
	console.log("cd"+cd);
	console.log("dmg"+dmg);
	console.log("base"+base);
	var nonCrit;
	nonCrit = (((atk * base)/100) * (1+dmg)/100);
	var nonEm;
	nonEm =	((nonCrit * (1+cd))/100);
	
	return (nonEm);

};

export default DoMath;
