import React from 'react';

import StopInfo from './StopInfo';


class StopListItem extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            open:false,
            activitiesList:['activity 1', ],
        }
        this.toggleItem = this.toggleItem.bind(this);
    }

    toggleItem(e){
        this.setState({open: !this.state.open})
    }

    render() {
        return (
            <div>
                <div onClick={(e)=>this.toggleItem(e)} className='collapsed'>
                    Item
                </div>
                    {this.state.open ? 
                        (<StopInfo/>) 
                        : null
                    }

            </div>
        );
    }

}

export default StopListItem;
