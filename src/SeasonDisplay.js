import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    summer : {
        seasonText : "Lets hit the beach",
        iconText : 'sun'
    },
    winter : {
        seasonText : 'Burr, its cold',
        iconText : 'snowflake'
    }
};

const getSeason = (lat, month) => {
    if(month > 2 && month < 9){
        return lat > 0 ? 'summer' : 'winter';
    }
    else{
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) => {

    const season = getSeason(props.lat, new Date().getMonth());
    const {seasonText, iconText} = seasonConfig[season];
    
    return(
        <div className={`season-display ${season}`}>
           <i className={`icon-left massive ${iconText} icon`}/>
           <h1>{seasonText}</h1>
           <i className={`icon-right massive ${iconText} icon`}/>
        </div>
    );
};

export default SeasonDisplay;