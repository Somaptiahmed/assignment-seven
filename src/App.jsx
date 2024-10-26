import { useEffect, useState } from 'react';
import Header from './Components/Header/Header';
import Blogs from './Components/Blogs/Blogs';
import Schedules from './Components/Schedules/Schedules';
import Selected from './Components/Selected/Selected';
import Footer from './Components/Footer/Foter';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
    const [schedules, setSchedules] = useState([]);
    const [biddingMoney, setBiddingMoney] = useState(0);
    const [claimMoney, setClaimMoney] = useState(0);
    const [showBlogs, setShowBlogs] = useState(true); 

    const handleAddToSchedules = (blog) => {
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

    const handleAddToBiddingMoney = (price) => {
        const newBiddingMoney = biddingMoney - price;
        setBiddingMoney(newBiddingMoney);
        toast.warning("Bidding amount updated.");
    };

    return (
        <>
            <Header biddingMoney={biddingMoney} claimMoney={claimMoney} handleAddToClaimMoney={handleAddToClaimMoney} />
            <div className='flex justify-between' >
                {showBlogs && (
                    <Blogs 
                        handleAddToSchedules={handleAddToSchedules} 
                        handleAddToBiddingMoney={handleAddToBiddingMoney} 
                    />
                )}
                <Schedules 
                    schedules={schedules} 
                    setShowBlogs={setShowBlogs} 
                />
            </div>
            <Footer />
            <Router>
                <Routes>
                    <Route path="/selected" element={<Selected />} />
                </Routes>
            </Router>
            <ToastContainer position="top-center" closeButton={true} hideProgressBar={false} theme="colored" />
        </>
    );
}

export default App;

