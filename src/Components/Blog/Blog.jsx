import PropTypes from 'prop-types'; 

const Blog = ({blog}) => {
    const {name, country, rounder, image, role, battingType, bowlingType, biddingPrice, button} = blog;
    return (
        <div>
            <div className='bg-slate-100 w-[420px] px-5 py-5 rounded-xl border-2'>
            <img src={image} alt="" className='w-[380px] h-[240px] rounded-xl' />
            <div className='space-y-5 mt-5'>
            <h2 className='text-3xl font-bold'> {name}</h2>
            <div className='flex justify-between font-semibold border-b-2 pb-3'>
            <p>{country}</p>
            <button className='bg-slate-300 w-32 h-8 rounded-xl'>{rounder}</button>
            </div>
            <p className='font-semibold'>{role}</p>
            <div className='flex justify-between font-semibold'>
            <p>{battingType}</p>
            <p className='text-slate-600'>{bowlingType}</p>
            </div>
            <div className='flex justify-between'>
            <p className='font-semibold'>Price: {biddingPrice}</p>
            <button className='bg-slate-300 w-36 h-8 rounded-xl font-semibold'>{button}</button>
            </div>
            </div>
        </div>
        
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;