import React, { Component } from "react"
import RadialMenu from "react-radial-menu"

const items = [
	{"href": "http://facebook.com", "image":"url(./geo.png)"},
	{"href": "http://facebook.com", "image":"url(./geo.png)"},
	{"href": "http://facebook.com", "image":"url(./geo.png)"},
	{"href": "http://facebook.com", "image":"url(./geo.png)"},
	{"href": "http://facebook.com", "image":"url(./geo.png)"},
	{"href": "http://facebook.com", "image":"url(./geo.png)"}
];

const center = {
	"image": "url(./geo.png)"
};

export default class RadMenu extends Component{
	render() {

		return <RadialMenu
			items={[{"href": "http://facebook.com", "image":"url(./g.jpg)"},
	{"href": "http://facebook.com", "image":"url(./g.jpg"},
	{"href": "http://facebook.com", "image":"url(./geo.png)"},
	{"href": "http://facebook.com", "image":"url(./geo.png)"},
	{"href": "http://facebook.com", "image":"url(./geo.png)"},
	{"href": "http://facebook.com", "image":"url(./geo.png)"}]}
			center={{"image":"url(./g.jpg)"}}
		/>
	}
}


