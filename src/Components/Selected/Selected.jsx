
import { useLocation } from 'react-router-dom';

const Selected = () => {
    const location = useLocation(); 
    const { selectedSchedules } = location.state || { selectedSchedules: [] }; 

    return (
        <div className="text-center mt-20">
            <h1>You have selected the following schedules!</h1>
            {selectedSchedules.length > 0 ? (
                <ul>
                    {selectedSchedules.map((schedule, index) => (
                        <li key={index}>{schedule.name} - {schedule.role}</li> 
                    ))}
                </ul>
            ) : (
                <p>No schedules selected.</p>
            )}
        </div>
    );
};

export default Selected;




