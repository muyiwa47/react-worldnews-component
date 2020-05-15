import React from 'react';
import './sources.css';

export default class Sources extends React.Component {
    constructor(props){
        super();
    }

 changeCase(str) {
    return str.toUpperCase()
 }

 filterData(genre, source){
  let data = [];
    if (genre === ''){
      return source
     } else {
      data = source.filter(item => item.category === genre)
      return data
    }
 };

  render(){
      return this.filterData(this.props.genre, this.props.data).map((source) => {
        return (
          <div className="sources" key={source.id}>
            <div className="source_name"><strong>{source.name}</strong></div>
            <div className="source_desc">{source.description}</div>
            <div className="source_category">{this.changeCase((source.category))} | {this.changeCase(source.language)}</div>
            <a href={source.url} className="source_link" target="_blank" rel="noopener noreferrer"><strong>{source.id}</strong></a>
          </div>
        )
      })}
}