import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Schedules from './Components/Schedules/Schedules'
import Footer from './Components/Footer/Foter'
import './App.css'
import { useState } from 'react'

function App() {
  const [schedules, setSchedules] = useState([]);
  const [biddingMoney, setBiddingMoney] = useState(0);
  const [claimMoney, setClaimMoney] = useState(0);
  

 const handleAddToSchedules = blog => {
  const newSchedules = [...schedules, blog];
  setSchedules(newSchedules);
 }

 const handleAddToClaimMoney = () => {
  const taka = 6000000;
  const currentClaim =claimMoney + taka;
    setClaimMoney(currentClaim);
    setBiddingMoney(currentClaim);
  }

  const handleAddToBiddingMoney = price => {
  
    const newBiddingMoney = biddingMoney - price;
    setBiddingMoney(newBiddingMoney);
  };

 




  return (
    <>
     
      
     <Header biddingMoney={biddingMoney}  claimMoney={claimMoney}  handleAddToClaimMoney={ handleAddToClaimMoney}></Header>
    <div className='flex'>
    <Blogs handleAddToSchedules={handleAddToSchedules} handleAddToBiddingMoney={handleAddToBiddingMoney}></Blogs>
    <Schedules schedules={schedules}></Schedules>
    </div>
    <Footer></Footer>
      
    </>
  )
}

export default App;
