import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../css/searchbar.css";

type State = any;

class SearchBar extends Component<any, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            search: "",
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange= (event: any) => {
        this.setState({search: event.target.value});
    }
    handleSubmit = (event: any) => {
        event.preventDefault();
        (this.props as any).updateSearchValue(this.state.search);
    }

    render() {
        return (
            <form className="abs searchContainer" onSubmit={this.handleSubmit}>
                <input className="searchText" type="text" value={this.state.search} placeholder="Search" onChange={this.handleChange} />                
                <button className="abs searchButton" type="submit">
                    <FontAwesomeIcon className="abs centered" icon="search" />
                </button> 
            </form>
      );
    }
}

export default SearchBar;