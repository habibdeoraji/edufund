import React from 'react';
import "./ListingHeader"
import ListingHeader from './ListingHeader';
import MutualFundDetails from "./../MutualFundDetails/index"

const ListingPage = ({ loginStatus }) => {
    return (<div style={{ height: "100vh", backgroundColor: "lightgrey" }}>
        <ListingHeader />
        <MutualFundDetails />
    </div>);
}

export default ListingPage;
