import { useState } from 'react'
import pussy from '../Images/Gemini_Generated_Image_xuwn2xxuwn2xxuwn-removebg-preview.png'

const ImageManipulation = () => {

    const [height, setHeight] = useState(300)
    const [width, setWidth] = useState(300)
    const [red, setRed] = useState(230)
    const [green, setGreen] = useState(30)
    const [blue, setBlue] = useState(130) 
    const [angle, setAngle] = useState(45) 

    function incHeight() {
        setHeight(height + 10)
    }
    function incWidth() {
        setWidth(width + 10)
    }
    function decHeight() {
        setHeight(height - 10)
    }
    function decWidth() {
        setWidth(width - 10)
    }

    const changeBG = () => {
        setRed((Math.random() * 255))
        setGreen((Math.random() * 255))
        setBlue((Math.random() * 255))
        console.log(`${red},${green},${blue}`);
    }

    const rotate = () => {
        setAngle(angle+15)
    }

    return (

        <div >
            <h2 style={{ color: 'deeppink' }}>Image-Manipulation using React</h2>

            <div style={{ height: '300px', width: '300px', border: '2px solid deeppink', backgroundColor: `rgb(${red},${green},${blue})`,transform:`rotate(${angle}deg)` }}>
                <img src={pussy} height={height} width={width} ></img>
            </div>
            <div style={{padding:'5px',gap:'3px'}}>
                <h2>Pussy Height:{height}</h2>
                <h2>Pussy Width:{width}</h2>
                <button onClick={incHeight}> Enhance Height +</button>
                <button onClick={incWidth}>Enhance Width +</button>
                <button onClick={decHeight}> Enhance Height -</button>
                <button onClick={decWidth}>Enhance Width -</button>
                <button onClick={changeBG}>Change BG</button>
                <button onClick={rotate}>Rotate </button>
            </div>

        </div>
    )
}

export default ImageManipulation
