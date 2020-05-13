import React from 'react';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Sources from './components/sources/sources';
import Filter from './components/filter/filter';


class App extends React.Component {
  constructor(props){
     super(props)
      this.state = { data : [], filterArr : [], genre : [], genrelist : '' };
}

    componentDidMount(){
        const apiKey = 'cbbf845e87d94bfa99f0f1419fbe6b00';
        fetch(`https://newsapi.org/v2/sources?apiKey=${apiKey}`)
          .then((response) => { return response.json(); })
            .then((data) => { this.setState({ data: [...data.sources]});
               return this.state.data;
        }).then((data) => {
          let genre = new Set();
            data.forEach(item =>  genre.add(item.category) )
              return genre
        }).then((genre) => {
          this.setState({ genre: [...genre]})
        });
    }

    genreList = (e) => {
        return this.setState({ genrelist : e.target.id})
    }

    render(){
      return (
        <div className="App">
          <Header />
          <Filter data={this.state.genre} genreList={this.genreList} />
          <Sources data={this.state.data} genre={this.state.genrelist} />
          <Footer />
        </div>
      );
    }
}

export default App;