import React,{ useState } from "react"

export default function TextForm(props) {
    const handleUpClick = () => {
    // console.log("Uppercase was Clicked !"+ text);
      let NewText = text.toUpperCase()
      setText(NewText)
      props.showAlert('Converted to UpperCase','Success')
    }  
    const handleLowClick = () => {
      let NewText = text.toLowerCase()
      setText(NewText)
      props.showAlert('Converted to LowerCase','Success')
    }  

    const handleClearClick = () => {
      let NewText = ('')
      setText(NewText)
      props.showAlert('Clear the Text','Success')
    }  

    const handleCopy = () => {
      let text = document.getElementById('mybox')
      text.select()
      navigator.clipboard.writeText(text.value)
      props.showAlert('Copied to Clipboard','Success')
    }  

    const handleOnChange = (event) => {
    // console.log("On Change");
      setText(event.target.value);
    }  
    const [text,setText]= useState('');     // text = Variable, setText = function
    //text = 'New text'; // Wrong way to change the text
    //setText('New text');  // Correct way to change the text
    return (
    <>
      <div className="container" style = {{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange = {handleOnChange} style = {{backgroundColor: props.mode==='dark'?'grey':'white', 
        color : props.mode==='dark'?'white':'#042743'}} id="mybox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to UpperCase</button>
        <button className='btn btn-primary mx-1' onClick={handleLowClick}>Convert to LowerCase</button>
        <button className='btn btn-primary mx-1' onClick={handleClearClick}>Clear</button>
        <button className='btn btn-primary mx-1' onClick={handleCopy}>Copy To Clipboard</button>
    </div>
    <div className="container my-2" style = {{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>Your Text Summary.</h1>
        <p> {text.split(' ').length} words and {text.length} characters </p>
        <p> Read in {0.08 * text.split(' ').length} minutes </p>
        <h2>Preview  </h2>
        <p>{text.length>0? text : "Enter something in the Text Box to preview it here."}</p>
    </div>
    </>
  )
}
