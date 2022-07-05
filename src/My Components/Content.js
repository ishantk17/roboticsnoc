import React from 'react'
import '../App.css'
function Content() {
  return (
     <div >
     <section className='first'>
      <div >
        <h1>Decarbonizing Industries</h1>
          <p>to take our world to </p>
           <p>net zero carbon emission</p>
       </div>    
     </section>
     <section className='second' >
       <h1>Net Zero carbon Future</h1>
       <p>for multiple industries</p>
       <ul>
        <li>Power plants (coal powered)</li>
        <li>Steel plants </li>
        <li>Cement plants </li>
        <li>Ships</li>
        <li>Heavy duty trucks</li>
        <li>Others</li>
        
       </ul>
     </section>
     <section className='third' >
      <h2>Benefits</h2>
      <p>nOc v/s other methods</p>
      <ul>
        <li>Efficient</li>
        <li>Works at any CO2 Concentration</li>
        <li>Small size</li>
        <li>Scalable</li>
      </ul>
     </section>
     <section className='fourth' >
     <button ><a className="nav-link active" aria-current="page" href="https://forms.gle/puAfXMbsy24iTRAp9">Contact Us</a></button>
     </section>
     </div> 
  )
}

export default Content
