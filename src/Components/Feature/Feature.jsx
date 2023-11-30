import React, {useContext} from 'react';
import { AppContext } from '../../Containers/Features/Features';
import './feature.css';
const Feature = () => {
  const {hidden} = useContext(AppContext);
  const featclass= 'featured-recipes';
  return (
    <div>
      <div className={`${featclass} ${hidden ? "hidden" : "featured-recipes"}`}>
        <div className="featured-images">
          <img src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=400" alt="feat1"/>
          <img src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=400" alt="feat2"/>
          <img src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=400" alt="feat3"/>
        </div>
      </div>
    </div>
  )
}

export default Feature
