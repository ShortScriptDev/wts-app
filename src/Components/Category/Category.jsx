import React from 'react';
import './category.css';
import { useNavigate } from 'react-router-dom';

function Category({hidden,  sharedState, setSharedState }){
  const navigate = useNavigate();
  const catclass = 'category';

  return (
    <div className={` ${catclass} ${hidden ? "hidden" : "category"}`}>
          <div className="category-section" onClick={()=>{setSharedState('Breakfast');navigate('/recipesearch'); }}>
              <img 
              className="category-icon" src='https://images.pexels.com/photos/101533/pexels-photo-101533.jpeg?auto=compress&cs=tinysrgb&w=400' alt="breakfastimage"/>
              <><p className="category-titles">Breakfast</p></>
          </div>
        <div className="category-section" onClick={()=>{setSharedState('Lunch'); navigate('/recipesearch'); }}>
          <img 
          className="category-icon" src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=400" alt="lunchimage"/>
          <p className="category-titles">Lunch</p></div>
        <div className="category-section" onClick={()=>{setSharedState('Dinner'); navigate('/recipesearch');}}>
            <img 
            className="category-icon" src="https://images.pexels.com/photos/2116094/pexels-photo-2116094.jpeg?auto=compress&cs=tinysrgb&w=400" alt="dinnerimage"/>
          <p className="category-titles">Dinner</p></div>
        <div className="category-section" onClick={()=>{setSharedState('Vegan'); navigate('/recipesearch');}}>
          <img 
          className="category-icon" src="https://images.pexels.com/photos/1893563/pexels-photo-1893563.jpeg?auto=compress&cs=tinysrgb&w=400" alt="veganimage"/>
          <p className="category-titles">Vegan</p></div>
        <div className="category-section" onClick={()=>{setSharedState('Italian'); navigate('/recipesearch');}}>
          <img 
          className="category-icon"src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400" alt="italianimage"/>
          <p className="category-titles">Italian</p></div>
        <div className="category-section" onClick={()=>{setSharedState('Soul food'); navigate('/recipesearch');}}>
          <img 
          className="category-icon" src="https://npr.brightspotcdn.com/dims4/default/0de2487/2147483647/strip/true/crop/1024x631+0+26/resize/880x542!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fsites%2Fwunc%2Ffiles%2F201505%2Fsoul_food.jpg" alt="soulfoodimage"/>
          <p className="category-titles">Soul Food</p></div>
        <div className="category-section" onClick={()=>{setSharedState('Chicken'); navigate('/recipesearch');}}>
          <img 
          className="category-icon" src="https://images.pexels.com/photos/2611917/pexels-photo-2611917.jpeg?auto=compress&cs=tinysrgb&w=400" alt="chickenimage"/>
          <p className="category-titles">Chicken</p>
          </div>
        <div className="category-section" onClick={()=>{setSharedState('Hearty'); navigate('/recipesearch');}}>
          <img 
           className="category-icon" src="https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=400" alt="heartyimage"/>
          
          <p className="category-titles">Hearty</p>
          </div>
    </div>
  )
}
export default Category;

/*
function Category({hidden,  sharedState, setSharedState }){
  const navigate = useNavigate();
  const catclass = 'category';
  
  return (
    <div className={` ${catclass} ${hidden ? "hidden" : "category"}`}>
          <div className="category-section" onClick={()=>{setSharedState('Breakfast'); console.log(sharedState)}}>
              <img 
              className="category-icon" src='https://images.pexels.com/photos/101533/pexels-photo-101533.jpeg?auto=compress&cs=tinysrgb&w=400' alt="breakfastimage"/>
              <><p className="category-titles">Breakfast</p></>
          </div>
        <div className="category-section" onClick={()=>{setSharedState('Lunch'); navigate('/page2');}}>
          <img 
          className="category-icon" src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=400" alt="lunchimage"/>
          <p className="category-titles">Lunch</p></div>
        <div className="category-section" onClick={()=>{setSharedState('Dinner'); navigate('/page2');}}>
            <img 
            className="category-icon" src="https://images.pexels.com/photos/2116094/pexels-photo-2116094.jpeg?auto=compress&cs=tinysrgb&w=400" alt="dinnerimage"/>
          <p className="category-titles">Dinner</p></div>
        <div className="category-section" onClick={()=>{setSharedState('Vegan'); navigate('/page2');}}>
          <img 
          className="category-icon" src="https://images.pexels.com/photos/1893563/pexels-photo-1893563.jpeg?auto=compress&cs=tinysrgb&w=400" alt="veganimage"/>
          <p className="category-titles">Vegan</p></div>
        <div className="category-section" onClick={()=>{setSharedState('Italian'); navigate('/page2');}}>
          <img 
          className="category-icon"src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400" alt="italianimage"/>
          <p className="category-titles">Italian</p></div>
        <div className="category-section" onClick={()=>{setSharedState('Soul food'); navigate('/page2');}}>
          <img 
          className="category-icon" src="https://npr.brightspotcdn.com/dims4/default/0de2487/2147483647/strip/true/crop/1024x631+0+26/resize/880x542!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fsites%2Fwunc%2Ffiles%2F201505%2Fsoul_food.jpg" alt="soulfoodimage"/>
          <p className="category-titles">Soul Food</p></div>
        <div className="category-section" onClick={()=>{setSharedState('Chicken'); navigate('/page2');}}>
          <img 
          className="category-icon" src="https://images.pexels.com/photos/2611917/pexels-photo-2611917.jpeg?auto=compress&cs=tinysrgb&w=400" alt="chickenimage"/>
          <p className="category-titles">Chicken</p>
          </div>
        <div className="category-section" onClick={()=>{setSharedState('Hearty'); navigate('/page2');}}>
          <img 
           className="category-icon" src="https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=400" alt="heartyimage"/>
          
          <p className="category-titles">Hearty</p>
          </div>
    </div>
  )
}
*/
//        <Link className="link" to="/recipesearch">
//          </Link>
