import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpclick = () => {
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('conver to Uppercase', 'success');
  };

  const handleLoclick = () => {
    console.log("Uppercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('conver to Lowercase', 'success');
  };

  const handleonchange = (event) => {
    console.log("onchanged");
    setText(event.target.value);
  };

  const copyClipboard = () => {
    navigator.clipboard.writeText(text)
    props.showAlert('Copied to Clipboard', 'success');
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
  }

  const clearText = () => {
    let newText1 = "";
    setText(newText1);
    props.showAlert('Clear All Text', 'success');
  }

  const [text, setText] = useState("Enter Text Here");
  return (
    <>
      <div className="Container my-3" style={{color : props.mode === 'dark' ? 'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">Example Text-area</label>
          <textarea className="form-control" value={text} id="myBox" style={{backgroundColor : props.mode === 'dark' ? 'gray':'white', color : props.mode === 'dark' ? 'white':'black'}}  onChange={handleonchange} rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpclick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoclick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={clearText}>Clear</button>
        <button className="btn btn-primary mx-2" onClick={copyClipboard}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
      
      <div className="container" style={{color : props.mode === 'dark' ? 'white':'black'}}>
        <h1>Your text Summary</h1>
        <p>{text.split(" ").length} word and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ?text:"Enter Something above to preview here"}</p>
      </div>
    </>
  );
}
