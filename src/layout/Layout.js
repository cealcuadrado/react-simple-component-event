import React from 'react';

class Layout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };

        this.addToCounter = this.addToCounter.bind(this);
    }

    addToCounter() {
        var count = this.state.count;
        count++;
        this.setState({ count: count });
    }

    render() {
        return (
            <div>
                <button className="btn btn-success" onClick={this.addToCounter}>
                    <i className="fa fa-plus fa-fw"></i>
                </button>
                <hr />
                <p>Counter: {this.state.count}</p>
            </div>
        );
    }
}

export default Layout;