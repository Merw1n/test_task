import React, {useState} from "react"
import "./HeaderMobile.css"
import Burger from "../assets/burger.png"
import logo from "../assets/image.png"
import LeftBar from "./LeftBar.jsx"

const HeaderMobile = ({money, moneyArr, changeMoney}) => {
	const [leftBar, setLeftBar] = useState(false)
	return (
		<div>
			{leftBar ? <LeftBar money={money} changeMoney={changeMoney} moneyArr={moneyArr} leftBar={leftBar} changeVisibility={setLeftBar}/> : 
			<div className="mobile__container">
				<img src={Burger} style={{marginLeft: "16px", cursor: "pointer"}} onClick={() => setLeftBar(!leftBar)}/>
				<img src={logo}/>
				<div className="mobile__login" style={{height: "33px"}}>Login</div>
			</div>
		}
		</div>
	)
}

export default HeaderMobile;