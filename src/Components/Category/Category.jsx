import React from 'react'
import './category.css'

function Category(props){
  return (
    <div className="category">
        <div class="category-section">
            <><p className="category-icon">cat1</p></>
            <><p className="category-titles">Categor</p></>
            </div>
        <div class="category-section"><p className="category-icon">cat1</p><p className="category-titles">Lunch</p></div>
        <div class="category-section"><p className="category-icon">cat1</p><p className="category-titles">Dinner</p></div>
        <div class="category-section"><p className="category-icon">cat1</p><p className="category-titles">Vegan</p></div>
        <div class="category-section"><p className="category-icon">cat1</p><p className="category-titles">Italian</p></div>
        <div class="category-section"><p className="category-icon">cat1</p><p className="category-titles">Soul Food</p></div>
        <div class="category-section"><p className="category-icon">cat1</p><p className="category-titles">Chicken</p></div>
        <div class="category-section"><p className="category-icon">cat1</p><p className="category-titles">Hearty</p></div>
    </div>
  )
}
export default Category
