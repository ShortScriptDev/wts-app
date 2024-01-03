import React from 'react';
import { useNavigate } from 'react-router-dom';

const ClickedRecipe = (title) => {
    const navigate = useNavigate();
    navigate('/recipe');

    return(
        <div>        
            {console.log(`${title}`)}
            <p>`${title}`</p>
            
        </div>
    )
}
export default ClickedRecipe