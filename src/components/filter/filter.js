import React from 'react';
import './filter.css';

export default class Filter extends React.Component {
    changeCase(str) {
        return str.toUpperCase()
    }

    render(){
        return (
            <div className="filter">
                {  this.props.data.map((item) => {
                    return (
                       <div key={item} className="checkbox-genre">
                            <label htmlFor={item}><strong>{this.changeCase(item)}</strong>
                            <input type="radio" id={item} value={item} name="genre" onChange={this.props.genreList} />
                            </label>
                        </div>
                       )
                })}
            </div>
        )
    }
}