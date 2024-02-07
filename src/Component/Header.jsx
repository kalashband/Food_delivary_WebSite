import { useEffect, useState, lazy } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Button from '@mui/material/Button';
import Login from "./Login";


const Header = () => {
  // let btnName = "login";
  const [btnName, setBtnName] = useState("Login");

  // if no dependancy array useeffect is called on every Componenet render
  // if dependency array is empty =[] => useEffect is called on initial render (just once) 
  // if dependency array is [btnName] => called every time btnName is update

  useEffect(() => {
    console.log("useEfffect 1");
    // Login();
  }, [btnName]);

  const onlineStatus = useOnlineStatus()

  return (
    <>
      <div className='Header'>
        <div className='logo-container'>
         
          <img className="logo"
            src="https://icons.iconarchive.com/icons/sonya/swarm/256/Fast-Food-icon.png"
            alt='img-logo' />
        </div>
        <div className='nav_items'>
          <ul>
            <li>Internet Status :{onlineStatus ? "✅" : "🔴"}</li>
            <li> <Link to="/">Home </Link>  </li>
            <li><Link to="/about">About </Link> </li>
            <li><Link to="/contact">Contact</Link></li>
            <li> Cart  </li>
            <Button variant="contained" className="login"
              onClick={() => { btnName === "Login" && Login() ? setBtnName("LogOut") : setBtnName("Login") }}> {btnName}  </Button>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header