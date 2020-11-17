import './App.css';
import React from 'react';
import RestaurentList from './components/RestaurentList';
import AppTitle from './components/AppTitle';

class App extends React.Component {
  constructor(props){
    super(props);
    this.onChangeSearch = this.onChangeSearch.bind(this);
    this.onChangeDropdown = this.onChangeDropdown.bind(this);
    this.state ={
      query: "",
      list:[],
      country: ""
  }
  }
  onChangeSearch(event){
    this.setState({
      query: event.target.value
    });
    fetch('http://starlord.hackerearth.com/TopRamen')
        .then((response) => response.json())
        .then(restaurentList => {
          const filteredData = restaurentList.filter(element => {
            return element.Brand.toLowerCase().includes(this.state.query.toLowerCase());
          });
            this.setState({ list: filteredData });
        });
  }

  onChangeDropdown(event){
    this.setState({
      country: event.target.value
    });
    fetch('http://starlord.hackerearth.com/TopRamen')
        .then((response) => response.json())
        .then(restaurentList => {
          const filteredData = restaurentList.filter(element => {
            return element.Country.toLowerCase() === this.state.country.toLowerCase();
          });
            this.setState({ list: filteredData });
        });
  }

  componentDidMount() {
    fetch('http://starlord.hackerearth.com/TopRamen')
    .then((response) => response.json())
    .then(restaurentList => {
        this.setState({ list: restaurentList });
    });
}
  render() {
    return (
      <div className="App">
        <AppTitle onChangeSearch={this.onChangeSearch} onChangeDropdown={this.onChangeDropdown} value={this.state.query}/>
        <RestaurentList key={this.state.list} list={this.state.list}/>
      </div>
    );
  };
}

export default App;
