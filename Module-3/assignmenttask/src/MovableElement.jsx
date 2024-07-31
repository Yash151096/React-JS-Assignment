import React, { useEffect, useState } from 'react'

const MovableElement = () => {
    const [position, setPosition] = useState({x:0, y:0});

    useEffect(() => {
        const handleMouseMove = (event) => {
            setPosition({x:event.clientX, y:event.clientY});
        }
        // Add event listener
        window.addEventListener('mousemove', handleMouseMove);
        // Clean up the event listener on component unmount
        return() => {
            window.removeEventListener('mousemove', handleMouseMove);
        }
    },)
    return (
        <div>
            <h3>Movable Element</h3>
            <div style={{position:'absolute', 
                left:`${position.x}px`, 
                top:`${position.y}px`, 
                width:'50px', 
                height:'50px', 
                backgroundColor:'blue'}}></div>
        </div>
    )
}

export default MovableElement