import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const alinks = links.map(link => <a href={'#' + link} key={link}>{link}</a>)

  return <nav>{alinks}</nav>;
}



export default NavBar;
