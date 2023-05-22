import React, {useState} from "react"
import "./HeaderDesktop.css"
import logo from "../assets/image.png"
import ChevronClose from "../assets/chevron-close.png"
import ChevronOpen from "../assets/chevron-open.png"


const HeaderDesktop = ({money, changeMoney, moneyArr}) => {
	const menuLinks = ["OSRS Gold", "RS3 Gold", "Sell RS Gold", "OSRS Items", "OSRS Account", "Reward Chest"];
	
	const [activeItem, setActiveItem] = useState(menuLinks[0]);
	
	const [dropdownVisible, setDropdownVisible] = useState(false)
	return (
		<div className="header__container">
			<div className="header__image"><img src={logo}/></div>
			<ul className="header__links">
				{menuLinks.map((item, index) => {
					return (
						<div>
							<li key={index} className={activeItem == item ? "header__item active" : "header__item"} onClick={() => {
								setActiveItem(menuLinks[index])
							}}>{item}</li>
							{activeItem == item ? 
								<span className="header__underline"></span> : null
							}
						</div>
					)
				})}
			</ul>
			<div className="header__auth">
				<div class="header__money">
					<div onClick={() => {
							setDropdownVisible(!dropdownVisible)
						}}
						style={{cursor: "pointer", display: "flex", alignItems: "center"}}
					>	
						<img src={money.img}/>
						<span className={dropdownVisible ? "money__current" : ""} style={{margin: "0 5px"}}>{money.title}</span>
						<div style={{position: "relative"}}>{dropdownVisible ? <img src={ChevronOpen} style={{position: "absolute", top: "-4px"}}/> : <img src={ChevronClose} style={{position: "absolute", top: "-4px"}}/>}</div>
					</div>
					<ul className={dropdownVisible ? "header__dropdown visible" : "header__dropdown"}>
						{moneyArr.map((item, index) => {
							return (
								<div className={(money.title == item.title) ? "money__item active" : "money__item"} onClick={() => {
										changeMoney(moneyArr[index])
										setDropdownVisible(false)
									}}>
									<img src={item.img} style={{width: "16px", height: "16px", margin: "0 8px"}}/>
									<li>{item.title}</li>	
								</div>
							)
						})}
					</ul>
				</div>
				<div className="header__signup">Sign up</div>
				<div className="header__login">Login</div>
			</div>
		</div>
	)
}

export default HeaderDesktop;