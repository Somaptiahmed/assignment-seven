import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'

const Blogs = ({handleAddToSchedules, handleAddToBiddingMoney}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data));
    }, []);


    return (
        <div>
            <div className="lg:flex lg:justify-between mx-20 my-20">
            <h1 className="font-bold text-2xl">Available Players</h1>
            <div className="font-bold space-x-4">
                <button className="bg-lime-500 w-36 h-12 rounded-xl">Available </button>
                
            </div>
            </div>
            
            
            <div className="grid lg:grid-cols-3 mx-20  space-x-10 space-y-10">
            {
                
                blogs.map(blog => <Blog key={blog.playerId} blog={blog} 
                    handleAddToSchedules={handleAddToSchedules} handleAddToBiddingMoney={handleAddToBiddingMoney}></Blog>)
            
        }
            </div>
            
         
            
           
            
            
            

        </div>
    );
};

Blogs.propTypes = {
    handleAddToSchedules: PropTypes.func,
    handleAddToBiddingMoney: PropTypes.func
}

export default Blogs;