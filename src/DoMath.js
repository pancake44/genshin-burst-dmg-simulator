// rDmgMultiplier  should be calculated bc its different for swirl,overloadd, melt etc.

import {burst} from './Burst.js'; 


const DoMath = (character, element, stats) => {
	var base;
	var c;
	for(c in burst){
		if(burst[c]['name'] == character){
			base = burst[c]['bdmg'];
		}
	}

	var nonEm;
	nonEm = stats.atk * (base/100) * (1+(stats.dmg)/100) * (1+(stats.cd/100));

	var amplifying;
	//amplifying = (1 + (2.78 * (stats.em/(stats.em + 1400)) * 100));
	amplifying = (2.78 * (stats.em/(stats.em + 1400)));

	var rDmgMultiplier;
	rDmgMultiplier = stats.rDmg/100;

	var vapeModifier = 1;
	var meltModifier = 1;
	if(element == "pyro"){
		vapeModifier = 1.5;
		meltModifier = 2;
	}
	else if(element == "cryo"){
		meltModifier = 1.5;
	}
	else if(element == "hydro"){
		vapeModifier = 2;
	}
	
	//var meltDmg = stats.atk * (base/100) * (1+((stats.dmg + (meltModifier * amplifying))/100)) * (1+(stats.cd/100));
	var meltDmg = stats.atk * (base/100) * (meltModifier * (1 + amplifying + rDmgMultiplier)) * (1+(stats.cd/100));
	//var vapeDmg = stats.atk * (base/100) * (1+((stats.dmg + (vapeModifier * amplifying))/100)) * (1+(stats.cd/100));
	var vapeDmg = stats.atk * (base/100) * (vapeModifier * (1 + amplifying + rDmgMultiplier)) * (1+(stats.cd/100));

	var trans;
	trans = (16 * (stats.em/(stats.em + 2000)));

	var overloadMultiplier80 = 1893;
	var overloadMultiplier90 = 2406;

	var shatteredMultiplier80 = 1420;
	var shatteredMultiplier90 = 1804;

	var electrochargedMultiplier80 = 1136;
	var electrochargedMultiplier90 = 1443;

	var swirlMultiplier80 = 568;
	var swirlMultiplier90 = 722;

	var overloadDmg;
	overloadDmg = (stats.lvl == 90) ?  (overloadMultiplier90 * (1 + trans + rDmgMultiplier)) : (overloadMultiplier80 * (1 + trans + rDmgMultiplier));

	var shatteredDmg;
	shatteredDmg = (stats.lvl == 90) ?  (shatteredMultiplier90 * (1 + trans + rDmgMultiplier)) : (shatteredMultiplier80 * (1 + trans + rDmgMultiplier));
	
	var electrochargedDmg;
	electrochargedDmg = (stats.lvl == 90) ?  (electrochargedMultiplier90 * (1 + trans + rDmgMultiplier)) : (electrochargedMultiplier80 * (1 + trans + rDmgMultiplier));
	
	var swirlDmg;
	swirlDmg = (stats.lvl == 90) ?  (swirlMultiplier90 * (1 + trans + rDmgMultiplier)) : (swirlMultiplier80 * (1 + trans + rDmgMultiplier));

	return [ parseInt(nonEm), parseInt(meltDmg), parseInt(vapeDmg), parseInt(overloadDmg), parseInt(shatteredDmg), parseInt(electrochargedDmg), parseInt(swirlDmg) ];

};

export default DoMath;
