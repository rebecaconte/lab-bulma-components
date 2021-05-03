import 'bulma/css/bulma.css';
import React from 'react'


const CoolButton = props => {
    const { isDanger, ...other } = props;
    
    //I get a warning message saying React does not regonize the prop on a DOM element
    //ask how to apply classes correctly for both 
    const className = isDanger !== undefined ? "isSmall isInfo" : "isSmall isSuccess"

    return (
        <div>
            <span className={className} {...other}>{props.children} </span>
        </div>
    )
}



export default CoolButton