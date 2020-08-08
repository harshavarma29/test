import React, {Component} from 'react';
import RecipeCards from './RecipeCards';

class recipe extends Component {

    constructor() {
        super();
        this.state = {
            recipeData: "",
            textValue: ""
        }
    }

    componentDidMount() { 
        var request = new XMLHttpRequest();

        request.open("GET", "http://starlord.hackerearth.com/recipe");

        request.send();

        request.onload = () => {
            this.setState({
                recipeData: JSON.parse(request.response)
            })
        }

    }

    textValue = (event) => {
        this.setState({
            textValue: event.target.value
        })
    }
    
    render() {
        var data = this.state.recipeData;
        var indeces = Object.keys(this.state.recipeData).filter(index => {
            var names=this.state.recipeData[index].name;
            if(names.toLowerCase().includes(this.state.textValue.toLowerCase())) return this.state.recipeData[index]
        })

        return <div>
                <input className="search" onChange={this.textValue} placeholder="Search recipe"/>
                <div className="recipeDetails">
                    {
                        indeces.map(item => {
                            return <RecipeCards newPopup={this.props.popupPage} recipeInfo={data[item]}/>
                        })
                    }
                </div>
            </div>
    }
}

export default recipe;