import React, {Component} from 'react';

class card extends Component {

    render() {
        return <div className="card" onClick={() => this.props.newPopup(this.props.recipeInfo)}>
            <img class="image" src={this.props.recipeInfo.image}/>
            <div className="info">
                <div className="title"><span>{this.props.recipeInfo.name}</span></div>
                <div className="rate"><span>{this.props.recipeInfo.price}</span></div>
            </div>
            <div className="descript"><span>{this.props.recipeInfo.description}</span></div>
        </div>
    }
}

export default card;