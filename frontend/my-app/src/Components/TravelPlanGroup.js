import React, { useState } from 'react';

import Plan from './Plan';
import '../styling/style.css';

class TravelPlanGroup extends React.Component {
    
    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <div className='travel-group'>
                <Plan stops={this.props.stops}/>
            </div>
        )
    }
}

export default TravelPlanGroup;