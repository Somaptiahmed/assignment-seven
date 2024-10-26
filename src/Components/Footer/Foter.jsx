import footer from '../../assets/assets/logo-footer.png'

const Footer = () => { 
    return (
        <div className="relative">
             
            <div className=' w-full'>
            
            <div className="border-2 rounded-lg p-5 mt-10 w-2/3 mx-auto">
             <div className=' bg-gradient-to-r from-blue-200 to-pink-200  h-[350px]  rounded-lg'>
            <div className='space-y-5 text-center py-20'>
            <h1 className='text-3xl font-bold'>Subscribe to our Newsletter</h1>
            <p className='text-xl font-semibold'>Get the latest updates and news right in your inbox!</p>
            <div>
                <input type="email" name="" id="" placeholder='Enter your email' className='w-52 h-10 border-2 rounded-lg' />
                <button className='w-36 h-10 bg-gradient-to-r from-pink-400 to-orange-400 rounded-lg'>Subscribe</button>
            </div>
        </div>
            </div>
             </div>
             <div className='bg-black h-[500px] mt-10'>
            <img src={footer} alt="" className='mx-auto pt-10'/>
            <div className='text-white flex justify-between my-10 mx-10 border-b-2 pb-5'>
             <div className='space-y-5'>
                 <h4 className='text-xl font-bold'>About Us</h4>
                 <p className='text-gray-500'>We are a passionate team <br /> dedicated to providing the best <br /> services to our customers.</p>
             </div>
             <div className='space-y-5'>
                 <h4 className='text-xl font-bold'>Quick Links</h4>
                 <ul className='text-gray-500'>
                     <li>Home</li>
                     <li>Services</li>
                     <li>About</li>
                     <li>Contact</li>
 
                 </ul>
             </div>
             <div className='space-y-5 '>
                 <h4 className='text-xl font-bold'>Subscribe</h4>
                 <p className='text-gray-500'>Subscribe to our newsletter for the latest updates.</p>
                 <input type="email" name="" id="" placeholder='Enter your email' className='w-52 h-10 border-2 rounded-lg' />
                 <button className='w-32 h-10 bg-gradient-to-r from-purple-300 to-orange-300 rounded-lg'>Subscribe</button>
             </div>
             
             
            </div>
            <div className='text-center text-white'>
                 <p>@2024 Your Company All Rights Reserved.</p>
 
             </div>
             </div>
 
 
             
            </div>
            
        </div>
    );
};

export default Footer;