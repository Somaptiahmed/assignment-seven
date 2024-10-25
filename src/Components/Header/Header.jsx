import profile from '../../assets/assets/logo.png'
import banner from '../../assets/assets/banner-main.png'
const Header = () => {
    return (
        
        <div>
        <div className='flex justify-between mx-20'>
            
            <div>
                <img src={profile} alt="" />
            </div>
            <div className='lg:flex gap-10 text-slate-600 font-semibold mt-5'>
               <p>Home</p>
               <p>Fixture</p>
               <p>Teams</p>
               <p>Schedules</p>
               <button className=' border-2 border-black w-32 h-10 rounded-xl text-slate-500 font-bold'>0 Coin</button>
            </div>
            

            </div>
            <div className=' bg-gradient-to-r from-black to-slate-500 h-[545px] mx-20 mt-10 rounded-xl pt-10'>
                <div className='items-center text-center space-y-5'>

                <img src={banner} alt="" className='mx-auto items-center'/>
                <h1 className='text-4xl font-bold text-white'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className='text-xl font-semibold text-slate-600 '>Beyond Boundaries Beyond Limits</p>
                <button className='bg-lime-400 font-bold w-40 h-12 rounded-full border-2 border-black'>Claim Free Credit</button>
                </div>
            </div>
        </div>
        
        
       
      
    );
};

export default Header;