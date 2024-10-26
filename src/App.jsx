import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Schedules from './Components/Schedules/Schedules'
import Footer from './Components/Footer/Foter'
import './App.css'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [schedules, setSchedules] = useState([]);
  const [biddingMoney, setBiddingMoney] = useState(0);

  
  const [claimMoney, setClaimMoney] = useState(0);
  

  const handleAddToSchedules = blog => {
    const newSchedules = [...schedules, blog];
    setSchedules(newSchedules);
    
  };

  const handleAddToClaimMoney = () => {
    const taka = 6000000;
    const currentClaim = claimMoney + taka;
    setClaimMoney(currentClaim);
    setBiddingMoney(currentClaim);
    toast.success("Added the claim money successfully."); 
    
  };

  const handleAddToBiddingMoney = price => {
    const newBiddingMoney = biddingMoney - price;
    setBiddingMoney(newBiddingMoney);
    toast.warning("Bidding amount updated."); 
  };

  return (
    <>
     
      
     <Header biddingMoney={biddingMoney}  claimMoney={claimMoney}  handleAddToClaimMoney={ handleAddToClaimMoney}></Header>
    <div className='flex'>
    <Blogs handleAddToSchedules={handleAddToSchedules} handleAddToBiddingMoney={handleAddToBiddingMoney}></Blogs>
    <Schedules schedules={schedules}></Schedules>
    </div>
    <Footer></Footer>
    <div>
    <ToastContainer
        position="top-center"
       
        closeButton={true}
        hideProgressBar={false}
        
        theme="colored"
      />
    </div>
      
    </>
  )
}

export default App;
