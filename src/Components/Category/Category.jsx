import React from 'react'
import './category.css'

function Category(props){
  return (
    <div className="category">
        <div className="category-section">
            <img className="category-icon" src='https://images.pexels.com/photos/101533/pexels-photo-101533.jpeg?auto=compress&cs=tinysrgb&w=400' alt="breakfastimage"/>
            <><p className="category-titles">Breakfast</p></></div>
        <div className="category-section">
          <img className="category-icon" src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=400" alt="lunchimage"/>
          <p className="category-titles">Lunch</p></div>
        <div className="category-section">
          <img className="category-icon" src="https://images.pexels.com/photos/2116094/pexels-photo-2116094.jpeg?auto=compress&cs=tinysrgb&w=400" alt="dinnerimage"/>
          <p className="category-titles">Dinner</p></div>
        <div className="category-section">
          <img className="category-icon" src="https://images.pexels.com/photos/1893563/pexels-photo-1893563.jpeg?auto=compress&cs=tinysrgb&w=400" alt="veganimage"/>
          <p className="category-titles">Vegan</p></div>
        <div className="category-section">
          <img className="category-icon"src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400" alt="italianimage"/>
          <p className="category-titles">Italian</p></div>
        <div className="category-section">
          <img className="category-icon" src="https://npr.brightspotcdn.com/dims4/default/0de2487/2147483647/strip/true/crop/1024x631+0+26/resize/880x542!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fsites%2Fwunc%2Ffiles%2F201505%2Fsoul_food.jpg" alt=""soulfoodimage/>
          <p className="category-titles">Soul Food</p></div>
        <div className="category-section">
          <img className="category-icon" src="https://images.pexels.com/photos/2611917/pexels-photo-2611917.jpeg?auto=compress&cs=tinysrgb&w=400" alt="chickenimage"/>
          <p className="category-titles">Chicken</p></div>
        <div className="category-section">
          <img className="category-icon" src="https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=400" alt="heartyimage"/>
          <p className="category-titles">Hearty</p></div>
    </div>
  )
}
export default Category
