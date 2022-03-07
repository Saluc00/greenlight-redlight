import React from "react"

const Light = (state) => {
    // const [light, setLight] = useState(false)
    const lightOff = { backgroundColor: state.color, width: '50px', height: '50px', margin: 'auto', borderRadius: "100px" }
    const lightOn = {backgroundColor: state.color, width: '50px', height: '50px', margin: 'auto', borderRadius: "100px", boxShadow: '0px 0px 3px 3px yellow' }
    return (
        <div style={state.light ? lightOn : lightOff }>
        </div>
    )
}

export default Light