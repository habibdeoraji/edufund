import React from 'react';
import { useHistory } from 'react-router-dom';
// import "./card.css"



const Card = (props) => {

    const history = useHistory()
    const { mutualFundDetailsContent } = props;


    const showCardDetails = () => {
        const { schemeCode } = mutualFundDetailsContent;
        history.push({
            pathname: `/mutual-funds-detail-page/${schemeCode}`,
            state: props.mutualFundDetailsContent
        })
    }


    return (<div onClick={showCardDetails} style={{ backgroundColor: "#fcf", boxShadow: "0 0 2px 2px lightblue", padding: "3px 2px", width: "50vh", margin: "4px" }}>
        <p style={{ margin: "1px" }}>{mutualFundDetailsContent.schemeName}</p>
    </div>);
}

export default Card;