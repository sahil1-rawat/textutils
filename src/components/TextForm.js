import React, { useState } from 'react';

export default function TextForm(props) {
    const [text,setText]=useState('')
    let upperText=text.toUpperCase();
    let lowerText=text.toLowerCase();
    const handleOnChange=(event)=>{
        setText(event.target.value);
        
    }
    const changeUpperCase=()=>{
        setText(upperText);
        props.showAlert("Converted to uppercase!","success")
    }
    const changeLowerCase=()=>{
        setText(lowerText);
        props.showAlert("Converted to lowercase!","success")

    }
    const clearText=()=>{
        setText("");
        props.showAlert("Text Cleared!","success")
    }
    const copyText=()=>{
        navigator.clipboard.writeText(text.valueOf())
        props.showAlert("Copied to clipboard!","success")
    }
    const removeExtraSpace=()=>{
        setText(text.split(/[ ]+/).join(" "))
        props.showAlert("Extra spaces Removed!","success")

    }
    
  return (
    <>
    <div className={`container text-${(props.mode==='light')?'dark':'light'} my-3`}>
      <h1>{props.heading}</h1>
      <div className='mb-3'>
        <textarea className={`form-control `} value={text} onChange={handleOnChange} id='myBox' rows='8' style={{backgroundColor:props.mode==='light'?'#fff':'rgba(4,39,67,0.7)',color:props.mode==='light'?'#000':'#fff'}}></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={changeUpperCase}>Convert to Uppercase</button>
      <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={changeLowerCase}>Convert to Lowercase</button>
      <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={clearText}>Clear Text</button>
      <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={copyText}>Copy Text</button>
      <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={removeExtraSpace}>Remove Extra Spaces</button>
    </div>
    <div className={`container my-3 text-${(props.mode==='light')?'dark':'light'}`}>
        <h1>Your text summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 *text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read.</p>
        <h1>Preview</h1>
        <p>{text.length>0?text:'Nothing to Preview!'}</p>
    </div>

    </>
  );
}
