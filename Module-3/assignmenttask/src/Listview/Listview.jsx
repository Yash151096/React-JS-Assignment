import React from 'react'

const Listview = () => {
    let array = [
        "Use Array.map",
        "Not a for loop",
        "Give each item a unique key",
        "Avoid using array index as the key"
    ]
    let k = 1;
    return (
        <ul>
            {
                array.map((i) => (
                    <li key={k++}>{i}</li>
                ))
            }
        </ul>
    )
}

export default Listview