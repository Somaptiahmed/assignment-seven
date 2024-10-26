import PropTypes from 'prop-types'; 
import { IoFlagSharp } from "react-icons/io5";
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


      const Blog = ({blog, handleAddToSchedules, handleAddToBiddingMoney}) => {
    const {name, country, rounder, image, role, battingType, bowlingType, biddingPrice, button} = blog;

 
    const [clickCount, setClickCount] = useState(0);
    
   
    const handleClick = (event) => {
        event.preventDefault(); 
        
        if (clickCount === 0) {
            toast.success("Congratulations! Player has been added to the team." );
            handleAddToSchedules(blog);
        } else if (clickCount === 1) {
            toast.info("This player is already in the team." );
        }

        setClickCount(clickCount + 1);
    };
    
    
   

    return (
        <div>
            <div className='bg-slate-100 w-[420px] px-5 py-5 rounded-xl border-2'>
            <img src={image} alt="" className='w-[380px] h-[240px] rounded-xl' />
            <div className='space-y-5 mt-5'>
            <h2 className='text-3xl font-bold'> {name}</h2>
            <div className='flex justify-between font-semibold border-b-2 pb-3'>
            
            <p><IoFlagSharp />{country}</p>
            
            <button className='bg-slate-300 w-32 h-8 rounded-xl'>{rounder}</button>
            </div>
            <p className='font-semibold'>{role}</p>
            <div className='flex justify-between font-semibold'>
            <p>{battingType}</p>
            <p className='text-slate-600'>{bowlingType}</p>
            </div>
            <div className='flex justify-between'>
            <button
       onClick={() => handleAddToBiddingMoney(biddingPrice)}
       
       className='font-semibold border-2 rounded-xl'>Price: {biddingPrice}
      </button>
 
            


    <button
                    onClick={handleClick}
                    disabled={clickCount >= 2}  
                    className='bg-slate-300 w-36 h-8 rounded-xl font-semibold'
                >
                    {button}
                </button>
                
    
            </div>
            
        </div>
        
        </div>
        
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    
    handleAddToSchedules: PropTypes.func,
    handleAddToBiddingMoney: PropTypes.func
}

export default Blog;