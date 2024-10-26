// import PropTypes from 'prop-types';
// import { useState } from 'react';
// import Schedule from '../Schedule/Schedule';


// const Schedules = ({ schedules}) => {
//     const [isActive, setIsActive] = useState(false);
//     const handleSelectClick = () => {
//         setIsActive(true);
//         console.log("Button clicked. Active state:", !isActive); // Set the button to active
//     };

//     return (
//         <div className='space-x-5 font-bold'>
            
//                 <button className=" bg-lime-500 rounded-xl w-36 h-12 mt-20">Available</button>

//                 <button
//                 className={`text-slate-500 rounded-xl w-36 h-12 lg:mt-20 btn ${isActive ? 'bg-green-500 text-white' : 'bg-slate-200'}`}
//                 onClick={handleSelectClick} // Handle button click
//             >
//                 Selected ({schedules.length})
//             </button>
//             {isActive && (
//                 <div className="mt-4 text-center ">
//                     <p>The button is active! You have selected {schedules.length} schedules.
//                     {schedules.map((schedule, idx) => (
//                 <Schedule key={idx} schedule={schedule} />
//             ))}

//                     </p>
//                 </div>
//             )}
//              </div>
//     );
// };

// Schedules.propTypes = {
//     schedules: PropTypes.array.isRequired
// };

// export default Schedules;



import PropTypes from 'prop-types';
import { useState } from 'react';
import Schedule from '../Schedule/Schedule';

const Schedules = ({ schedules }) => {
    const [isActive, setIsActive] = useState(false);
    const [showSelectedData, setShowSelectedData] = useState(false); // New state for showing/hiding selected data

    const handleSelectClick = () => {
        setIsActive(true);
        setShowSelectedData(true); // Show selected data when button is clicked
    };

    const handleAvailableClick = () => {
        setShowSelectedData(false); // Hide selected data when Available button is clicked
        setIsActive(false); // Reset active state
    };

    return (
        <div className='space-x-5 font-bold'>
            <button 
                className="bg-lime-500 rounded-xl w-36 h-12 mt-20"
                onClick={handleAvailableClick} // Handle Available button click
            >
                Available
            </button>

            <button
                className={`text-slate-500 rounded-xl w-36 h-12 lg:mt-20 btn ${isActive ? 'bg-green-500 text-white' : 'bg-slate-200'}`}
                onClick={handleSelectClick} // Handle Selected button click
            >
                Selected ({schedules.length})
            </button>

            {showSelectedData && ( // Only show the selected schedules if showSelectedData is true
                <div className="mt-4 text-center text-slate-600 ">
                    <p>
                        You have selected players.
                        {schedules.map((schedule, idx) => (
                            <Schedule key={idx} schedule={schedule} />
                        ))}
                    </p>
                </div>
            )}
        </div>
    );
};

Schedules.propTypes = {
    schedules: PropTypes.array.isRequired
};

export default Schedules;

