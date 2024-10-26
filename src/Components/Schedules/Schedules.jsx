import PropTypes from 'prop-types';
import { useState } from 'react';
import Schedule from '../Schedule/Schedule';

const Schedules = ({ schedules, setShowBlogs }) => {
    const [isActive, setIsActive] = useState(false);
    const [showSelectedData, setShowSelectedData] = useState(false);

    const handleSelectClick = () => {
        setIsActive(true);
        setShowSelectedData(true);
        setShowBlogs(false); 
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
        <div className='space-x-5 font-bold mx-20'>
            <button 
                className="bg-lime-500 rounded-xl w-36 h-12 mt-20"
                onClick={handleAvailableClick}
            >
                Available
            </button>

            <button
                className={`text-slate-500 rounded-xl w-36 h-12 lg:mt-20 btn ${isActive ? 'bg-green-500 text-white' : 'bg-slate-200 '}`}
                onClick={handleSelectClick} disabled={schedules.length >= 6}
            >
                Selected ({schedules.length}/6)
            </button>

            

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
    setShowBlogs: PropTypes.func.isRequired 
};

export default Schedules;



