import React from 'react';
import Jumbotron from '../components/cards/Jumbotron';
import NewArrivals from '../components/home/NewArrivals';
import BestSellers from '../components/home/BestSellers';
import CategoryList from '../components/category/CategoryList';
import SubList from '../components/sub/SubList';

const Home = () => {
    return (
        <>
            <div className="jumbotron text-danger h1 font-weight-bold text-center">
                <Jumbotron text={["Latest Products", "New Arrivals", "Best Sellers"]} />
            </div>

            <h3 className="text-center p-3 mt-5 mb-5 display-5 jumbotron">New Arrivals</h3>
            <NewArrivals />

            <br />
            <br />

            <h3 className="text-center p-3 mt-5 mb-5 display-5 jumbotron">Best Sellers</h3>
            <BestSellers />

            <h3 className="text-center p-3 mt-5 mb-5 display-5 jumbotron">Categories</h3>
            <CategoryList />

            <h3 className="text-center p-3 mt-5 mb-5 display-5 jumbotron">Sub Categories</h3>
            <SubList />

        </>
    );
};

export default Home;
