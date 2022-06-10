import React, { useState } from 'react';
import data from './data';
function App() {
  
  const [count,setCount]=useState(0);
  const [text,setText]=useState([]);

  const handleSubmit=(e)=>{
    e.preventDefault();
    let amount=parseInt(count);
    if (count<=0){
      amount=1;
    }
    if(count>8){
      amount=8;
    }

    setText(data.slice(0,amount));
  }
  return (
  <section className='section-center'>
    
    <h3>tired of boring lorem ipsum?</h3>

    <form action="lorem-form" onSubmit={handleSubmit}>
      <label htmlFor="amount">

        Paragraph:

      </label>
      <input type="number" name="amount" id="amount" value={count} onChange={(e)=>setCount(e.target.value)}/>

      <button type="submit" className="btn">Genereate</button>

    </form>


    {
      text.map((paragraph,index)=>{

return (
    <article className="lorem-text" key={index}>

      <p>{paragraph}</p>
    </article>
)

      })

    }

  </section>
    )
}

export default App;
