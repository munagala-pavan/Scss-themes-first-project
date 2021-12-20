import { useState } from "react";
import img from "../../image/cooking-daires.png";
import Footer from "../Footer/Footer";
import PageSideBar from "../sideBar/pageSideBar";
import "./Header.css";


const Header=()=>{
  const [colors,setColors]=useState('grey');
  const handleDropDown=(e)=>{
    setColors(e.target.value);   
  }
  console.log(colors);
return(
<div>
<ul style={{backgroundColor:colors}}>
    <li><img src={img} alt="logo" /></li>
  <li> <h3>Cooking Dairies</h3></li>  
  <li><a href="/">Home</a></li>
  <li><a href="/">Recipies</a></li>
  <li><a href="/">Healthy</a></li>
  <li><a href="/">Global</a></li>
  <li><a href="/">About Us</a></li>
   <select id="color-theme" name="color-theme" value={colors} style={{backgroundColor:colors}} onChange={handleDropDown}>
      <option value="red" >theme 1</option>
      <option value="blue">theme 2</option>
      <option value="green">theme 3</option>
      <option value="yellow">theme 4</option>
      </select>
</ul>
      <PageSideBar/>
      <Footer styled={colors}/>
</div>
);
}
export default Header;