import React from 'react';
import './filter.css';

export default class Filter extends React.Component {
    constructor(props){
        super(props)
        console.log(this.props)
    }

    changeCase(str) {
        return str.toUpperCase()
     }

    render(){
        return (
            <div className="filter">
                {  this.props.data.map((item) => {
                    return (
                       <div key={item} className="checkbox-genre">
                           <label for={item}><strong>{this.changeCase(item)}</strong>
                           <input type="checkbox" id={item} name={item} onClick={this.props.genreList} />
                           </label>
                        </div>
                       )
                })}
            </div>
        )
    }
}


// return (
//     <div><input type="checkbox" id="scales" name="scales"><label for="scales">Scales</label></div>
//   )