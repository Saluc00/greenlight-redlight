import React, { useState } from 'react'
import Light from '../light/Light'

const TrafficLight = () => {

    const [red, setRed] = useState(false)
    const [orange, setOrange] = useState(false)
    const [green, setGreen] = useState(false)

    function sleep(ms) {
        return new Promise((resolve) => {
          setTimeout(resolve, ms);
        });
      }

    const redLight = async () => {
        setRed(false)
        setOrange(false)
        setGreen(true)
        await sleep(1000)
        setGreen(false)
        setOrange(true)
        await sleep(1000)
        setOrange(false)
        setRed(true)
        await sleep(1000)
        setRed(false)
        setOrange(false)
        setGreen(false)
    }

    const greenLight = async () => {
        setOrange(false)
        setRed(true)
        setGreen(false)
        await sleep(1000)
        setGreen(true)
        setRed(false)
        await sleep(1000)
        setRed(false)
        setOrange(false)
        setGreen(false)
    }

    return (
        <div style={{ margin: '10px auto', width: '30%'}}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <div style={{ width: '70px', backgroundColor: "#555555", margin: 'auto', padding: '0.5em 0em', borderRadius: '5px'}}>
                    <Light color="Red" light={red} />
                    <Light color="Orange" light={orange} />
                    <Light color="Green" light={green} />
                </div>
                <div style={{ padding: "0.5em", margin: 'auto'}}>
                    <button onClick={redLight}>Passage au rouge</button>
                    <button onClick={greenLight}>Passage au vert</button>
                </div>
            </div>
        </div>
    )
}

export default TrafficLight