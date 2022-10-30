import React from 'react';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="Thisweek">
        <label>This week</label>
        <label className="Thismonth">This month</label>
        <label className="Thisdate">This date</label>
      </div>
    </nav>
  )
}

export default Navbar;
