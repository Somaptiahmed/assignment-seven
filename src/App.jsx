import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Schedules from './Components/Schedules/Schedules';
import Selected from './Components/Selected/Selected';
import Footer from './Components/Footer/Foter';


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
     
     <Router>
     <Header biddingMoney={biddingMoney}  claimMoney={claimMoney}  handleAddToClaimMoney={ handleAddToClaimMoney}></Header>
    <div className='flex'>
    <Blogs handleAddToSchedules={handleAddToSchedules} handleAddToBiddingMoney={handleAddToBiddingMoney}></Blogs>
    <div>
    <Schedules schedules={schedules}></Schedules>
    
    </div>
    </div>
  <Footer></Footer>
    
    
    <ToastContainer
        position="top-center"
       
        closeButton={true}
        hideProgressBar={false}
        
        theme="colored"

      />
      
      <Routes>
                <Route path="/selected" element={<Selected />} />
            </Routes>
        </Router>
   
      
    </>
  )
}

export default App;
