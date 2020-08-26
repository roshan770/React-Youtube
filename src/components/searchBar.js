import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video Search</label>
            <div style={{ display: "flex" }}>
              <input
                type="text"
                value={this.state.term}
                onChange={this.onInputChange}
              />

              <button className="ui primary button">Search</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
