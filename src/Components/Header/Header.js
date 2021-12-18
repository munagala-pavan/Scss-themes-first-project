import img from "../cooking-daires.png";
import "./Header.css";


const Header=()=>{
return(
<div>
<ul>
    <li><img src={img} alt="logo" /></li>
  <li> <h3>Cooking Dairies</h3></li>  
  <li><a href="/">Home</a></li>
  <li><a href="/">Recipies</a></li>
  <li><a href="/">Healthy</a></li>
  <li><a href="/">Global</a></li>
  <li><a href="/">About Us</a></li>
  <select>
      <option>theme 1</option>
      <option>theme 2</option>
      <option>theme 3</option>
      <option>theme 4</option>
      </select>
</ul>
</div>
);
}
export default Header;