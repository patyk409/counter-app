import React, { Component } from 'react'
import './Clock.css'

class Clock extends Component {
    constructor(props) {
        super(props)

        this.state = { date: new Date() }
        console.log('initialization lifeCycle: constructor(props)');
    }

    componentDidMount() {
        this.timeId = setInterval(() => {
            this.tickTack()
        }, 1000)

        console.log('mounting lifeCycle: componentDidMount()');
    }

    componentDidUpdate() {
        console.log('updation lifeCycle: componentDidUpdate()');
    }

    componentWillUnmount() {
        clearInterval(this.timeId)

        console.log('unmounting lifeCycle: componentWillUnmount()');
    }

    tickTack = () => {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div className="clock">
                <h4>Time: {this.state.date.toLocaleTimeString()}<span onClick={this.props.toggleClockMethod}>X</span></h4>
            </div>
        )
    }
}

export default Clock
