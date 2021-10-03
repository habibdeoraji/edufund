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

        });
    }


    searchOnChange = (e) => {
        const { mutualFundList } = this.state;
        const searchInput = e.target.value;
        if (searchInput.length === 0) {
            this.setState({ searchMutualFundList: mutualFundList })
        } else {
            const newList = [];
            mutualFundList.forEach((mutualfund) => {
                (mutualfund.schemeName.toLowerCase().search(searchInput.toLowerCase()) >= 0 &&
                    newList.push(mutualfund))
            })
            this.setState({ searchMutualFundList: newList })

        }
    }

    render() {
        const { searchMutualFundList, mutualFundList } = this.state;
        return (
            <div style={{ width: "80vw", margin: "30px auto 10px auto" }}>
                {searchMutualFundList.length === 0 && mutualFundList.length === 0 && (
                    <div style={{ width: "100vw", textAlign: "center" }}>
                        <img
                            src="https://cutewallpaper.org/21/loading-gif-transparent-background/Tag-For-Loading-Bar-Gif-Transparent-Loading-Gif-.gif"
                            alt=""
                            style={{ width: "15vh", marginTop: "50%", marginRight: "30%" }}
                        />
                    </div>
                )}
                {(searchMutualFundList.length > 0 || mutualFundList.length > 0) && <input className="search_input_style" placeholder="Search by Scheme Name" onChange={this.searchOnChange} />}
                <div
                    style={cardContainer}
                >

                    {(searchMutualFundList.length > 0 ? searchMutualFundList : mutualFundList).map((fund, index) => (
                        index < 5 && <Card key={Math.random()} mutualFundDetailsContent={fund} />
                    ))}

                </div>

            </div>
        );
    }
}

export default Home;


const cardContainer = {
    display: "flex",
    flexWrap: "wrap",
    margin: "0px auto",
    padding: "10px 0 20px 0",
    justifyContent: "center",
}