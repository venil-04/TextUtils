import React , {useState} from 'react'

export default function About(props) {

    // const light = ()=> {
    //     if(mystyle.color==='white'){
    //         nextstyl({
    //             color:'black',
    //             backgroundColor:'white'
    //         })
    //         nexttext('Enable Dark')
    //     }
    //     else{
    //         nextstyl({
    //             color:'white',
    //             backgroundColor:'black'
    //         })
    //         nexttext('Enable Light')
    //     }
    // }

// const [text,nexttext]=useState('Enable Dark')
    
// const [mystyle,nextstyl]=useState({
//     color:'white',
//     backgroundColor:'black'
// });

let mystyle={
  backgroundColor:props.mode==='light'?'white':'#0d6efd',
  color:props.mode==='light'?'black':'white'
}
    
  return (
    <>


    <h3 className='my-3' style={{color:props.mode==='light'?'black':'white'}}>About Us</h3>


<div className="accordion" id="accordionExample" >
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        About Company
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        Branded company with Branded people.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Founder & CEO
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>venil savaliya</strong>. <br />
        completed B.Tech From Vishwakarma Government Engg. College-Chandkheda <br />
        react js developer

      </div>
    </div>
  </div>
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header" >
      <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Contact
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        No need To contact. <br />
        <strong>THANK YOU.</strong>
      </div>
    </div>
  </div>
</div>




    </>
  )
}
