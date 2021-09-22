import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../css/searchbar.css";

type State = any;

class SearchBar extends Component<{}, State> {
    constructor(props: {}) {
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
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <form className="abs searchContainer" onSubmit={this.handleSubmit}>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <input className="searchText" type="text" value={this.state.search} placeholder="Search" onChange={this.handleChange} />                
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <button className="abs searchButton" type="submit">
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <FontAwesomeIcon className="abs centered" icon="search" />
                </button> 
            </form>
      );
    }
}

export default SearchBar;