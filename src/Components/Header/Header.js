import { useState } from "react";
import img from "../../image/cooking-daires.png";
import Footer from "../Footer/Footer";
import PageSideBar from "../sideBar/pageSideBar";
import "../../scss/main.scss";


const Header=()=>{
  const [colors,setColors]=useState('grey');
  const handleDropDown=(e)=>{
    setColors(e.target.value);   
  }
  console.log(colors);
return(
<div>
<ul style={{backgroundColor:colors}} id="headers">
    <li><img src={img} alt="logo" /></li>
  <li> <h3>Cooking Dairies</h3></li>  
  <li><a href="/">Home</a></li>
  <li><a href="/">Recipies</a></li>
  <li><a href="/">Healthy</a></li>
  <li><a href="/">Global</a></li>
  <li><a href="/">About Us</a></li>
   <select id="color-theme" name="color-theme" value={colors}  onChange={handleDropDown}>
      {/* //<option>Theme color</option> */}
      <option value="none" selected hidden>Select an Option</option>
      <option value="CornflowerBlue" style={{backgroundColor:"CornflowerBlue"}}>CornflowerBlue</option>
      <option value="Purple" style={{backgroundColor:"Purple"}} >Purple</option>
      <option value="DeepPink" style={{backgroundColor:"DeepPink"}}>DeepPink</option>
      <option value="Coral" style={{backgroundColor:"Coral"}}>Coral</option>
      </select>
</ul>
      <PageSideBar/>
      <Footer styled={colors}/>
</div>
);
}
export default Header;