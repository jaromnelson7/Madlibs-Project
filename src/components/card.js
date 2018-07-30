import React, { Component } from 'react';

import Input from './input';

class Card extends Compontent {

    constructor() {
        super()

        this.state = {
            color: '',
            pluralNoun: '',
            adjectiveOne: '',
            celebOne: '',
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({ color: 'event.target.value' })
        // console.log(this.state.color);
        console.log(this.state);
    }

    render() {

        const inputData = [
            {title: 'color', state: this.state.color, name: 'color' },
            {title: 'Plural Noun', state: this.state.pluralNoun, name: 'pluralNoun' },
            {title: 'Adjective', state: this.state.adjective, name: 'adjectiveOne' },
            {title: 'Celebrity', state: this.state.celebOne, name: 'celebOne' },
        ]

        return (
            <div className="card">
                {
                    inputData.map(data => Input(data))
                }

                {/* Input('Color', this.state.color, this.handleInputChange, 'color') }
                { Input('Plural Noun', this.state.pluralNoun, this.handleInputChange, 'pluralNoun') }
                { Input('Adjective', this.state.adjective, this.handleInputChange, 'adjectiveOne') }
                { Input('Celebrity', this.state.celebOne, this.handleInputChange, 'celebOne') }
            </div>
        )
    }
}

export default Card;