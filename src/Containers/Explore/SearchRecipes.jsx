import React, { useState } from 'react';
import '../../Pages/Home/home.css'
import './searchrecipes.css'
import Category from '../../Components/Category/Category';
import Searched from '../../Pages/Searched/Searched';
import { CategoryMenu } from '../../Props';
import logo from '../../Containers/Header/logo.png';
import Features from '../../Containers/Features/Features';
import Recommended from '../../Components/Feature/Recommended';
import Nav from '../../Components/Nav/Nav'


function SearchRecipes({ componentToShow, className }) {
  const [sharedState, setSharedState] = useState('chicken');
  const [hidden, setHidden] = useState(false);

  return (
    <div>
      {componentToShow === 'Category' ? (
        <div className="search-recipes-container">
        <div className="search-recipes-header">
            <div className="logo-container"><img src={logo} alt="logo"/></div>
            <input type="search" id="add" className="search-page-search-bar" placeholder="Search Recipes.."/>
            <div className="slider">
                <div className="slider-img1">
                    <h2 className="slide-title"> ENJOY THE BEST RECIPES FOR YOUR NEXT MEAL</h2>
                </div>
                <div className="slide-dots">
                    <p className="slide-dot currentslide"></p>
                    <p className="slide-dot"></p>
                    <p className="slide-dot"></p>
                </div>
            </div>
            <div className={`${className} ${hidden ? "hide" : "categories-container"}`}>
                <CategoryMenu hidden={hidden} setHidden={setHidden} />
                <Category hidden={hidden} sharedState={sharedState} setSharedState={setSharedState} />
            </div>
            
            <div className="featured-recipe">
                    <div className="recipe-info">
                    <img  className="recipe-image" src="https://edamam-product-images.s3.amazonaws.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDZg3fMd7Jgrxd0XLQHkVHnhJD%2FPvfG7IgsfhTM%2Bdqq6AIhAKRUid%2BW1jVVgpJOI6QXoCpkiKVyx%2BMpQUzAqOImIjQSKrkFCFoQABoMMTg3MDE3MTUwOTg2IgyObH7DXgJyFYDdxS4qlgWkXH141tzqV3PnBvEL37BQx7DLnljulnzQRgs8JIQNw0zE2B%2BQ963GNrE24xJmh9X9VJy1DLEkRoTUEBN%2FzA5KcSrvyCeVGsSVqkOeO%2FFHsUEfV9POVzDf6Yx%2F7v%2F8xKOu9QDp8VhbzmM77FExPDWl2OZDSfiRfcC2VVzMrkkY1zH3URpLSekm94opx9AcG8XyqujTBJR08mnq66lj5psFs2y9JWm5LxtQxDlZNaxrumsmuiH5E%2B9CdtUvk5K5Wq23vf9SOCmF6uRR572%2FND1D118w940J5O6lMrurRu6uYLCa69GJtthX02JYNcKJQxXJO44vgXLaqUp%2BVqAa36cbf4NEkqZsfFS%2B1YUZIEFPPs0C37K9IloYvPLJecDjH6vWrFasWHwSo4KDpugx9CLOE7n1nHLs7NK%2F4rSqaL%2Bfk2kLBq%2FtDGAy3cHntEZ2i8V7%2FkNx%2FrN0%2FtCVWRu8GPTfe%2F%2FQbwLT0DIQ5ATeAfwmq5wsTFnH%2Fj9qcwnv6Tq0CZG15q7SRIsfjNusj0JFUAMDtR4mUliOLPXCMI124oXqUbqz3%2B5u8cIJwQYblhJ8QYpYrv7u9QVt6qViiCMcQ%2BIm83kq8sntUXRZ07naevh7CxraB3xlagdmzziKa1FsWKExnvEHU7OP7X2X2x%2FUQYdUNQBHGv3LWfapNzbhNfcCrcxkdYWfq0VDK75BJiFpLrgq6JVaBXcT00bVdddeNNWFunIAspERf8CKx9PlJDYXshFrTvlcxKeb7BehRzdSQWLjBa%2FiLgNYC0B4JVW9RXpIqYZgvMw4faaDU42CYAlcuBObBODPZludBfgPmtKR59bP1xtyGnOL8E62VrGmw4Im3f1VUNhWOK89lTFdRSeR3bfJ4nUHlDDkwNSsBjqwAVyKYKHawrFClJVU7HYKfnqyRNYs%2Bzco5ymVBF7OSplJqxwD5VimyQ5s5J2eNbu1QA0b5TY9ejodqhXOHfcjIFUVTorC%2BMof74xap5%2B2IS2znDtBEBx6nJORXcU%2Bjz0d25S4eFx6PhBv5qhnWrOXQTv0BZgu8AWUZaNvyBy0AgKEmD0C%2BXCNd1s7vlgGhteMhjfZaMacrCJyOg5U9tG%2B6oCwePibXHLo49w7kdfB22V4&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Date=20240103T090523Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Credential=ASIASXCYXIIFG4ZSUXGO%2F20240103%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Signature=558c9fbf734a4c67821696e3a2bb1f05e1200ad734d5cbc79aa757c6dd2eeab7" alt=""/>
                        <p className="recipe-description">Savory Chicken Vesuvio: Golden-brown chicken, crispy potatoes, and aromatic herbs unite.</p>
                    </div>
                    <div className="recipe-info">
                    <img className="recipe-image" src="https://edamam-product-images.s3.amazonaws.com/web-img/69a/69a185e15ae107444f63acfeef439fdd.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIFF7KevSIqh1DFj0ZB2%2FF9I6rEfLgdb8js%2B9ushEp33xAiA67BzLHyMElUPRM0xYDefkh3gOP91XgG5L1O82ZtefzCq5BQhZEAAaDDE4NzAxNzE1MDk4NiIM9wzSptLPPCHPuCuPKpYFUG8k3jLYFpEQ%2FWSwZ90ui8zQz49sSjRUYl%2BWgSDN6rCDTojG0rMbsCNlshoE5nrI45Lz5qEZvulTS8%2BHqU6nBRHuWv%2BTbT0QfJ0ejzD3sVqo3XFA2vBmXR9WbD%2FQlwsRiCMhRZjdREoPVOQmxKyDBsG%2FNaR%2FEg3sYUWxqwJWfGJlsVyIJGjAQuHAtJ5pea1vn45FlCDGP4t2Q48c5hZHNTvA50teSMi6qRtpgTyiaeWHrossz4Y5hJuMIJdBs01HreUahrPep10E5lZCIK0c%2B7FVazw1wycwXRmu3TDfJmR9zFZ2wrqXLzvOFNOd1iLjNJpWD9wGVJfOWA7VRNcXEaaEJJowisq%2FPOgbMorBnwqIf0muR%2F%2FVlgk0J1qZZjPXsL%2BpFdxaioraPzCmTUKm4uiBnMo5yV7suQbnwwJmnG%2B36bxAENWnQihtm7J%2Fiel73m%2F%2BucF2zynLHsUEoL%2BFbAz%2BK%2BHtqVEZaYMqfaWUx%2B2sPnR6eZpV3GVt3XSijN3trArFWvZqMN3AD6ZeeiCgbdN4c5JkdGm3q88yOB%2B7Hr55LBHs1lp9cKSXILecdraWzfC0wwUIA7VzldTRdSCwYawYm%2B2VK71OPg%2FTt9UwwI%2BoNJJvIh6K99R0zGyTsuaCZGrhDv73FRAvJr39PxCtJuAhUvl0EUgTpSZgLcQRTT1dbTpwSsVT9uW0hyADeeLuwXmx54GixfYnRAOfW%2Frq2bcv2vl7%2BfCQqyy2%2BU8Jr1cPQ4RRaHWI4hclzjC5CoyepMobBLW97TJN%2FgjXLbErX4onFrC7BWRdq1aCVElL18bVg5Wxl1fvL5QkchsbOWOvefJeX6%2F5%2FILKxaHKOF9WOKJNzFZQhVwrCFd3SjZ%2F6dAcfL5%2Fgd0wg7DUrAY6sgFiYq%2FadGPLXbsn0lUy0P8ZzWRd6q9Keti96RPI8tG1eO7%2BtwASTrrPcvrZKmE%2BUV7ioKv2Yh6%2FNFdTUw%2FW%2F1qRQu%2FFpRk124FfeZyNe4ARf4Pv0vnFLyP7MZXk38ysoL4XUpk87CcPtaK2DPfM%2BhEitpnmx7F2pMQ30egxhYhTh23Ww7mTSq1Y%2Bi6rTQFxJh3dIK0sY346WPM3bGJ1dvHkHaSMuwZfgQSbLN3CFKlCoPKE&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Date=20240103T091057Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Credential=ASIASXCYXIIFJMBASSBX%2F20240103%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Signature=7a65352546dd589677e06964afefc45dfc1e7b559913119fa1cb58a3e10af473" alt=""/>
                     <p className="recipe-description">Zesty Salt & Pepper Steak: Succulent beef seasoned, seared to perfection.</p>
                    </div>
                    <div className="recipe-info">
                    <img className="recipe-image" src="https://edamam-product-images.s3.amazonaws.com/web-img/ceb/ceb4321441febed3b05d541f879c14ca.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDZg3fMd7Jgrxd0XLQHkVHnhJD%2FPvfG7IgsfhTM%2Bdqq6AIhAKRUid%2BW1jVVgpJOI6QXoCpkiKVyx%2BMpQUzAqOImIjQSKrkFCFoQABoMMTg3MDE3MTUwOTg2IgyObH7DXgJyFYDdxS4qlgWkXH141tzqV3PnBvEL37BQx7DLnljulnzQRgs8JIQNw0zE2B%2BQ963GNrE24xJmh9X9VJy1DLEkRoTUEBN%2FzA5KcSrvyCeVGsSVqkOeO%2FFHsUEfV9POVzDf6Yx%2F7v%2F8xKOu9QDp8VhbzmM77FExPDWl2OZDSfiRfcC2VVzMrkkY1zH3URpLSekm94opx9AcG8XyqujTBJR08mnq66lj5psFs2y9JWm5LxtQxDlZNaxrumsmuiH5E%2B9CdtUvk5K5Wq23vf9SOCmF6uRR572%2FND1D118w940J5O6lMrurRu6uYLCa69GJtthX02JYNcKJQxXJO44vgXLaqUp%2BVqAa36cbf4NEkqZsfFS%2B1YUZIEFPPs0C37K9IloYvPLJecDjH6vWrFasWHwSo4KDpugx9CLOE7n1nHLs7NK%2F4rSqaL%2Bfk2kLBq%2FtDGAy3cHntEZ2i8V7%2FkNx%2FrN0%2FtCVWRu8GPTfe%2F%2FQbwLT0DIQ5ATeAfwmq5wsTFnH%2Fj9qcwnv6Tq0CZG15q7SRIsfjNusj0JFUAMDtR4mUliOLPXCMI124oXqUbqz3%2B5u8cIJwQYblhJ8QYpYrv7u9QVt6qViiCMcQ%2BIm83kq8sntUXRZ07naevh7CxraB3xlagdmzziKa1FsWKExnvEHU7OP7X2X2x%2FUQYdUNQBHGv3LWfapNzbhNfcCrcxkdYWfq0VDK75BJiFpLrgq6JVaBXcT00bVdddeNNWFunIAspERf8CKx9PlJDYXshFrTvlcxKeb7BehRzdSQWLjBa%2FiLgNYC0B4JVW9RXpIqYZgvMw4faaDU42CYAlcuBObBODPZludBfgPmtKR59bP1xtyGnOL8E62VrGmw4Im3f1VUNhWOK89lTFdRSeR3bfJ4nUHlDDkwNSsBjqwAVyKYKHawrFClJVU7HYKfnqyRNYs%2Bzco5ymVBF7OSplJqxwD5VimyQ5s5J2eNbu1QA0b5TY9ejodqhXOHfcjIFUVTorC%2BMof74xap5%2B2IS2znDtBEBx6nJORXcU%2Bjz0d25S4eFx6PhBv5qhnWrOXQTv0BZgu8AWUZaNvyBy0AgKEmD0C%2BXCNd1s7vlgGhteMhjfZaMacrCJyOg5U9tG%2B6oCwePibXHLo49w7kdfB22V4&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Date=20240103T092611Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Credential=ASIASXCYXIIFG4ZSUXGO%2F20240103%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Signature=faf71255e7e074b85386ef166dd0390c100853161384ab7c9eb435f29d8ea6a0" alt=""/>
                    <p className="recipe-description">Sweet & Sour Shrimp: Succulent shrimp in tangy, flavorful harmony.</p>
                    </div>
                </div>
                <Features/>
                    <div className="desserts-feature">
                        <div className="desserts-feature-section">
                            <h2 className="desserts-feature-title">Delicious Desserts!</h2>
                            <p className="desserts-feature-description">A delicious way to finish a meal</p>
                        </div>
                        <div className="desserts-feature-image-section">
                            <img className="desserts-feature-image" src="https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=300"alt="icon-img"/>
                        </div>
                    </div>
                <Recommended/>
            </div>
            <Nav/>
        </div>
        ) : (
        <div>
        <Searched sharedState={sharedState} setSharedState={setSharedState}/>
        </div>
      )}

    </div>
  );
}

export default SearchRecipes;
//<img className="recipe-image" alt="recipeimage" src="https://placehold.co/400x400/000000/FFFFFF/png"/>