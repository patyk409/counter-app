import React, { useState, useEffect } from 'react'
import './ClockFunctional.css'

const ClockFunctional = (props) => {
    const [date, setDate] = useState(new Date())

    const tickTack = () => setDate(new Date())
    console.log('initialization lifeCycle: setting state [date, setDate]')

    useEffect(() => {
        let timerId = setInterval(() => {
            tickTack()
        }, 1000)
        console.log('mounting & updating lifeCycle: componentDidMount() & componentDidUpdate()')

        return (() => {
            clearInterval(timerId)
            console.log('unmounting lifeCycle: componentWillUnmount()')
        })
    }, [date])

    return (
        <div className="clock">
            {<h4>Time: {date.toLocaleTimeString()}<span onClick={props.toggleClockMethod}>X</span></h4>}
        </div>
    )
}

export default ClockFunctional
