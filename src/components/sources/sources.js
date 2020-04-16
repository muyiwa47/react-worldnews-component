import React from 'react';
import PropTypes from 'prop-types';
import './sources.css';

export default class Sources extends React.Component {
    constructor(props){
        super();
        const propTypes = {
            filterArr: PropTypes.array,
            data: PropTypes.array
        }
    }

 changeCase(str) {
    return str.toUpperCase()
 }

 filterData(arr, source){
    var data = [];
    if (arr.length > 0) {
      for (var i in arr) {
       source.map(function(item){
         if (item.category === arr[i]) {
             data.push(item)
            }
       });
      }
      return data
    } else {
        return source
    }
 };


    render(){
        console.log(this.props)
        return this.filterData(this.props.filterArr, this.props.data).map((source) => {
          return (
            <div className="sources" key={source.id}>
              <div className="source_name"><strong>{source.name}</strong></div>
              <div className="source_desc">{source.description}</div>
              <div className="source_category">{this.changeCase((source.category))} | {this.changeCase(source.language)}</div>
              <a href={source.url} className="source_link" target="_blank">{source.id}</a>
            </div>
          )
        })
    }
}

