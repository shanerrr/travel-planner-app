import React from 'react';

import './style.css';

class PlanOverview extends React.Component{

	constructor(props){
		super(props);
		this.secondsToDhms = this.secondsToDhms.bind(this);
	}

	secondsToDhms(seconds) {
		if(seconds === 0){
			return "0 minutes";
		}
		seconds = Number(seconds);
		const d = Math.floor(seconds / (3600*24));
		const h = Math.floor(seconds % (3600*24) / 3600);
		const m = Math.floor(seconds % 3600 / 60);
		
		const dDisplay = d > 0 ? d + (d === 1 ? " day, " : " days, ") : "";
		const hDisplay = h > 0 ? h + (h === 1 ? " hour, " : " hours, ") : "";
		const mDisplay = m > 0 ? m + (m === 1 ? " minute, " : " minutes, ") : "";
		return dDisplay + hDisplay + mDisplay;
	}

	render(){
		return(
			<div className='plan-overview'>
				<p className="overview-stat">duration: {this.secondsToDhms(this.props.duration)}</p>
				<p className="overview-stat">distance: {(this.props.distance/1000).toFixed(1)} km</p>
				<p className="overview-stat">stops: {this.props.stopCount}</p>
			</div>
			)
		}
	}

	
export default PlanOverview;
	