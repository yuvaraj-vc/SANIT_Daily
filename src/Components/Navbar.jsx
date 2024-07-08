import React, { useState } from 'react';

const Navbar = ({setCategory}) => {
    const [isHovered, setIsHovered] = useState(false);
  return (
    
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-5">SANIT Daily</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("technology")} style={{  cursor: isHovered ? 'pointer' : 'default' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>Technology</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("business")} style={{  cursor: isHovered ? 'pointer' : 'default' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>Business</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("health")} style={{  cursor: isHovered ? 'pointer' : 'default' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>Health</div>
        </li>
        <li className="nav-item">
          <div className="nav-link " onClick={()=>setCategory("sports")} style={{  cursor: isHovered ? 'pointer' : 'default' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>Sports</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("entertainment")} style={{  cursor: isHovered ? 'pointer' : 'default' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>Entertainment</div>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
    
  )
}

export default Navbar