import PropTypes from 'prop-types';
import { useState } from 'react';
import Schedule from '../Schedule/Schedule';

const Schedules = ({ schedules, setShowBlogs }) => {
    const [isActive, setIsActive] = useState(false);
    const [showSelectedData, setShowSelectedData] = useState(false);

    

    const handleSelectClick = () => {
        if (schedules.length < 7) {
            setIsActive(true);
            setShowSelectedData(true);
            setShowBlogs(false); 
        } else {
            alert("You cannot select more than 6 players."); 
        }
    };

    const handleAvailableClick = () => {
        setShowSelectedData(false);
        setIsActive(false);
        setShowBlogs(true);
    };

    const handleAddMorePlayersClick = () => {
        setShowSelectedData(false);
        setIsActive(false);
        setShowBlogs(true);
    };

   
    return (
        <div className=' font-bold lg:mx-20'>
           <div className='lg:space-x-5 sm:space-y-3'>
           <button 
                className="bg-lime-500 rounded-xl w-36 h-12 mt-20"
                onClick={handleAvailableClick}
            >
                Available
            </button>

            <button
                className={`text-slate-500 rounded-xl w-36 h-12 lg:mt-20 btn ${isActive ? 'bg-green-500 text-white' : 'bg-slate-200'}`}
                onClick={handleSelectClick}
                
            >
                Selected ({Math.min(schedules.length, 6)}/6)
            </button>

        
           </div>

            

            {showSelectedData && (
                <div className="mt-4 text-center ">
                    <p>
                       You have selected players.
                        {schedules.map((schedule, idx) => (
                            <Schedule key={idx} schedule={schedule} />
                        ))}
                    </p>
                    <button 
                className="bg-lime-500 rounded-xl w-44 h-12 mt-5"
                onClick={handleAddMorePlayersClick}
            >
                Add More Players
            </button>
                </div>
            )}
        </div>
    );
};

Schedules.propTypes = {
    schedules: PropTypes.array.isRequired,
    setShowBlogs: PropTypes.func.isRequired,
    handleAddToSchedules: PropTypes.func.isRequired 
};

export default Schedules;



