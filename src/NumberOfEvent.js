import React, { Component } from 'react';

class NumberOfEvents extends Component {

    state = {
        numberOfEvents: '32',
    }

    handleInputChanged = (event) => {
        const number = event.target.value;
        if (number < 1 || number > 32) {
            this.setState({
                numberOfEvents: ""
            });
        } else {
            this.setState({
                numberOfEvents: number
            });
        }
        this.props.updateNumberOfEvents(event.target.value);
    };

    render() {
        return (
            <div className="NumberOfEvents">
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