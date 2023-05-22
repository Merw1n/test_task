import logo from './logo.svg';
import './App.css';
import React, {useState} from "react"
import HeaderDesktop from "./HeaderDesktop/HeaderDesktop"
import USD from "./assets/USD.png"
import EUR from "./assets/EUR.svg"
import GBP from "./assets/GBP.png"
import CAD from "./assets/CAD.png"
import AUD from "./assets/AUD.png"
import Calculator from "./Calculator/Calculator"
import HeaderMobile from "./HeaderMobile/HeaderMobile"

function App() {
  const moneyArr = [
    {title: "USD",
     img: USD
    },
    {title: "EUR",
     img: EUR
    },
    {title: "GBP",
     img: GBP
    },
    {title: "CAD",
     img: CAD
    },
    {title: "AUD",
     img: AUD
    },
  ];
  const [money, setMoney] = useState(moneyArr[0]);
  const screenWidth = window.screen.width;
  console.log(screenWidth)
  return (
    <div className="App">
        {screenWidth > 640 ? <HeaderDesktop money={money} changeMoney={setMoney} moneyArr={moneyArr}/> : <HeaderMobile money={money} changeMoney={setMoney} moneyArr={moneyArr}/>}
        
        <Calculator money={money}/>
    </div>
  );
}

export default App;
