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


    return (<div onClick={showCardDetails} style={{ backgroundColor: "#fff", boxShadow: "0 0 2px 2px lightgray", padding: "8px 4px", width: "100%", margin: "8px 4px", borderRadius: "10px" }}>
        <p style={{ margin: "1px" }}>{mutualFundDetailsContent.schemeName}</p>
    </div>);
}

export default Card;