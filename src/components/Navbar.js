
import React, {useState} from 'react'

export default function Navbar(props) {

  const [Dark ,setDark] = useState("🌞 Dark Mode")
   const darkmode = ()=> {
   if(document.body.style.backgroundColor!= "black") 
    {
      document.body.style.backgroundColor= "black"; 
    setDark("🌜 Light Mode");
    
    }


    else{
      document.body.style.backgroundColor= "white";
setDark("🌞 Dark Mode");
    }
   }
        return (
    <nav class={"navbar navbar-expand-lg navbar-dark bg-dark"}>
  <div class="container-fluid">
    <a class="navbar-brand" href="#">{props.title}</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">{props.about}</a>
        </li>
      </ul>
      <form className="d-flex mx-5">
        <input className="from-control me-3" type="search" placeholder="search" aria-label="search"></input>
        <button class="btn btn-outline-success" type="submit" >search</button>

      
      </form>
        <button className="btn btn-sm btn-primary mx-5"  type="submit"onClick={ darkmode} >{Dark}</button>
    </div>
    
  </div>
  <br />
</nav>
)
}
Navbar.defaultProps={
    title: "set the title",
    about: 'set about here'
}
