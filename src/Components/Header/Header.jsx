import profile from '../../assets/assets/logo.png'
import banner from '../../assets/assets/banner-main.png'
import PropTypes from 'prop-types'
import './Header.css'



                const Header = ({ biddingMoney, claimMoney,  handleAddToClaimMoney}) => {
    return (
        
        <div className=' mx-20'>
        <div className='flex justify-between sticky-header h-44  bg-slate-100 items-center rounded-xl'>
            
            
            <div>
                <img src={profile} alt="" />
            </div>
            <div className='lg:flex gap-10 text-slate-600 font-semibold mt-5'>
               <p>Home</p>
               <p>Fixture</p>
               <p>Teams</p>
               <p>Schedules</p>
            </div>
            <button className="border-2 border-black w-48 h-10 rounded-xl text-slate-500 font-bold">
       {biddingMoney} Coins
    </button>

            

            </div>
            
            <div className=' bg-gradient-to-r from-black to-slate-500 h-[530px]  mt-10 rounded-xl pt-10'>
                <div className='items-center text-center space-y-5'>

                <img src={banner} alt="" className='mx-auto items-center'/>
                <h1 className='text-4xl font-bold text-white'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className='text-xl font-semibold text-slate-300 '>Beyond Boundaries Beyond Limits</p>
                <button onClick={() => handleAddToClaimMoney(claimMoney)} className='bg-lime-400 font-bold w-44 h-12 rounded-full border-2 border-black '>Claim Free Credit</button>
                </div>
            </div>
        </div>
        
        
       
      
    );
};

Header.propTypes = {
    biddingMoney: PropTypes.number.isRequired,
    
    claimMoney: PropTypes.number.isRequired,
    
    handleAddToClaimMoney: PropTypes.func
}

export default Header;