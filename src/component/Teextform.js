import React ,{useState} from 'react'

export default function Textform(props) {

    const handelonclick=()=>{
        let nexttext=text.toUpperCase();
        updatedtext(nexttext);
        props.showalert("Text Succesfully coverted to upper case!","success");
    }
    const handelloclick=()=>{
        let nexttext=text.toLowerCase();
        updatedtext(nexttext);
        props.showalert("Text Succesfully coverted to lower case!","success");
    }
    const handelonclear=()=>{
      let nexttext='';
      updatedtext(nexttext);
      props.showalert("Text Succesfully clear up!","success");
    }

    const handelonchange=(event)=>{
        updatedtext(event.target.value)
    }

    const [text,updatedtext] = useState('');
  return (
    <>
   
<div className="mb-3">
  <h1 className={`container text-${props.mode==='light'?'dark':'light'}`}>TextArea</h1>
  <textarea className="form-control" value={text} onChange={handelonchange} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
  <button className="btn btn-primary " onClick={handelonclick}>To UpperCase</button>
  <button className="btn btn-primary mx-3 " onClick={handelloclick}>To LowerCase</button>
  <button className="btn btn-primary" onClick={handelonclear}>Clear</button>

  <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
      <h2>Text Summary</h2>
      <p>This Text Has {text.length} character and {text.split(" ").filter((element)=>{return element.length!==0}).length} words</p>
  </div>
    </>
    
  )
}
