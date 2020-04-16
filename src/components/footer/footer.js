import React from 'react';
import './footer.css';

export default class Footer extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="footer">
                <div><strong>News API : https://newsapi.org | Banji Oguntade</strong> </div>
            </div>
        )
    }
}