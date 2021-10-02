import React, { Component } from "react";
import axios from "axios";
import Card from "./card.jsx";
import "./mutualFundDetails.css"

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mutualFundList: [],
            searchMutualFundList: []
        };
    }

    componentDidMount() {
        axios.get("https://api.mfapi.in/mf").then((res) => {
            this.setState({ mutualFundList: res.data });
            // this.setState({ searchMutualFundList: res.data });
        });
    }


    searchOnChange = (e) => {
        // console.log(e.target.value)
        const { mutualFundList } = this.state;
        const searchInput = e.target.value;
        if (searchInput.length === 0) {
            // console.log(searchInput.length, "hello")
            this.setState({ searchMutualFundList: mutualFundList })
        } else {
            const newList = [];
            mutualFundList.forEach((mutualfund) => {
                (mutualfund.schemeName.toLowerCase().search(searchInput.toLowerCase()) >= 0 &&
                    newList.push(mutualfund))
            })
            // console.log(newList, "New List");
            this.setState({ searchMutualFundList: newList })

        }
    }

    render() {
        const { searchMutualFundList, mutualFundList } = this.state;
        // console.log(searchMutualFundList);
        return (
            <div style={{ width: "80vw", margin: "30px auto 10px auto" }}>
                <input style={searchInputStyle} placeholder="Search by Scheme Name" onChange={this.searchOnChange} />
                <div
                    style={cardContainer}
                >
                    {(searchMutualFundList.length > 0 ? searchMutualFundList : mutualFundList).map((fund, index) => (
                        index < 5 && <Card key={Math.random()} mutualFundDetailsContent={fund} />
                    ))}

                </div>
                {/* {mutualFundList.map((fund, index) => (
                    index < 5 && <Card mutualFundDetailsContent={fund} key={Math.random()} />
                ))} */}
            </div>
        );
    }
}

export default Home;

const searchInputStyle = {
    width: "70%",
    height: "40px",
    margin: "30px 15%",
    padding: "0px 10px",
    backgroundColor: "#d3d3d3",
    border: "1px solid black",
    outline: "none",
    fontSize: "24px",
    borderRadius: "5px"

};


const cardContainer = {
    display: "flex",
    flexWrap: "wrap",
    margin: "0px auto",
    padding: "10px 0 20px 0",
    justifyContent: "center",
}