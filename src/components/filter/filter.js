import React from 'react';
import './filter.css';

export default class Filter extends React.Component {
    changeCase(str) {
        return str.toUpperCase()
    }

    showMenu(e){
        if (e.target.className === 'container') {
            e.target.children[0].classList.toggle("slideout");
        }
    }

    render(){
        return (
          <div className="container" onClick={this.showMenu}>
            <div className="filter">
                {  this.props.data.map((item) => {
                    return (
                       <div key={item} className="checkbox-genre">
                            <input type="radio" id={item} value={item} name="genre"
                            className="menu-radio" onChange={this.props.genreList} />
                            <label htmlFor={item}><strong>{this.changeCase(item)}</strong>
                            </label>
                        </div>
                       )
                })}
              </div>
            </div>
        )
    }
}