import { useState } from "react";

function CurrentTime () {
    let time = new Date();
    console.log(typeof(time.toLocaleDateString())) // string
    return(
        <p className="lead">This is the current time: {time.toLocaleDateString() + " - " + time.toLocaleTimeString()}</p>
    )
}
export default CurrentTime;