function menu(event){
    let parentDiv = document.querySelector('.App');
    let createChildDiv = document.createElement('div');
    parentDiv.prepend(createChildDiv);
    createChildDiv.setAttribute('className', 'menu-expand');
    let childDiv = document.querySelector('.menu-expand');
    createChildDiv.innerHTML =  '<p>"WoW" Something Smells Great!</p>\
    <p>Dinner Ideas</p>\
    <p>10 Most Popular Foods</p>\
    <p>Breakfast Receipes</p>\
    <p>Lunch Receipes</p>\
    <p>Vegan Receipes</p>\
    <p>Family Receipes</p>\
    <p>Easy To Cook Receipes</p>\
    <p>Less Than 10 Ingredients</p>\
    <div>\
     <img/>\
     <h2>Next Dinner Idea</h2>\
     <p> add some receipe preview</p>\
    </div>\
     <div>\
     <img/>\
     <h2>Kids Lunch Ideas</h2>\
     <p>add some receipe preview</p>\
    </div>\
      <i></i>';
    createChildDiv.style.width = "70%";
    createChildDiv.style.height = "100vh";
    createChildDiv.style.backgroundColor = "rgb(88, 141, 88)";
    createChildDiv.style.overflow = "hidden";
    createChildDiv.style.position = "absolute";
    createChildDiv.style.alignContent = "right";
    createChildDiv.style.right = "0";
}


export default menu;