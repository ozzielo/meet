import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {

    state = {
        numberOfEvents: '32',

    }

    handleInputChanged = (event) => {
        const number = event.target.value;
        if (number < 1 || number > 32) {
            this.setState({
                numberOfEvents: "",
                errorText: "Please choose a number between 1 and 32"
            });
        } else {
            this.setState({
                numberOfEvents: number,
                errorText: ""
            });
        }
        this.props.updateNumberOfEvents(event.target.value);
    };

    render() {
        return (
            <div className="NumberOfEvents">
                <ErrorAlert text={this.state.errorText} />
                <input
                    type="number"
                    className="number"
                    value={this.state.numberOfEvents}
                    onChange={this.handleInputChanged}
                />
            </div>

        )
    }
};

export default NumberOfEvents;