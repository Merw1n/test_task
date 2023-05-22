import React, {useState} from "react"
import ChevronClose from "../assets/chevron-close.png"
import ChevronOpen from "../assets/chevron-open.png"
import Close from "../assets/close.png"

const LeftBar = ({money, moneyArr, changeMoney, leftbar, changeVisibility}) => {
	const menuLinks = ["OSRS Gold", "RS3 Gold", "Sell RS Gold", "OSRS Items", "OSRS Account", "Reward Chest"];
	const [dropdownVisible, setDropdownVisible] = useState(false)
	return (
		<div className="leftbar__container">
			<div style={{width: "100%", display: "flex", justifyContent: "start"}}>
				<img src={Close} style={{width: "18px", height: "18px", margin: "32px 23px", cursor: "pointer"}} onClick={() => changeVisibility(false)}/>
			</div>
			<ul className="leftbar__list">
				{menuLinks.map((item) => {
					return (
						<div>
							<span className="line"></span>
							<li className="leftbar__item">{item}</li>
							<span className="line"></span>
						</div>
					)
				})}
				<div onClick={() => {
							setDropdownVisible(!dropdownVisible)
						}}
						style={{cursor: "pointer", display: "flex", alignItems: "center", position: "relative", flexDirection: "column"}}>
					<div style={{display: "flex", alignItems: "center", width: "100%"}}>
						<img src={money.img}/>
						<span className={dropdownVisible ? "money__current" : ""} style={{margin: "0 5px"}}>{money.title}</span>
						<div style={{position: "relative"}}>{dropdownVisible ? <img src={ChevronOpen} style={{position: "absolute", top: "-4px"}}/> : <img src={ChevronClose} style={{position: "absolute", top: "-4px"}}/>}</div>
					</div>
					<ul className={dropdownVisible ? "leftbar__dropdown visible" : "leftbar__dropdown"}>
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
			</ul>
			<div className="leftbar__auth">
				<div className="leftbar__signup">Sign up</div>
				<div className="leftbar__login">Login</div>
			</div>
		</div>
	)
}

export default LeftBar;