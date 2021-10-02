import React from 'react';
import "./ListingHeader"
import ListingHeader from './ListingHeader';
import MutualFundDetails from "./../MutualFundDetails/index"

const ListingPage = ({ loginStatus }) => {
    return (<div>
        <ListingHeader />
        This is listing Page
        <MutualFundDetails />
    </div>);
}

export default ListingPage;
