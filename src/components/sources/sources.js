import React from 'react';
import './sources.css';

export default class Sources extends React.Component {
    constructor(props){
        super();
    }

 changeCase(str) {
    return str.toUpperCase()
 }

 filterData(arr, source){
  var data = [];
    if (arr.length > 0) {
     arr.forEach((itemObject) => {
       source.forEach((item) => {
         if (item.category === itemObject) {
             data.push(item)
            }
         });
       });
        return data
    } else {
        return source
    }
 };

  render(){
      return this.filterData(this.props.filterArr, this.props.data).map((source) => {
        return (
          <div className="sources" key={source.id}>
            <div className="source_name"><strong>{source.name}</strong></div>
            <div className="source_desc">{source.description}</div>
            <div className="source_category">{this.changeCase((source.category))} | {this.changeCase(source.language)}</div>
            <a href={source.url} className="source_link" target="_blank" rel="noopener noreferrer">{source.id}</a>
          </div>
        )
      })}
}