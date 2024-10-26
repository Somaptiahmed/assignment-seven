
import { useLocation } from 'react-router-dom';

const Selected = () => {
    const location = useLocation(); 
    const { selectedSchedules } = location.state || { selectedSchedules: [] }; 

    return (
        <div className="text-center mt-20">
            <h1> </h1>
            {selectedSchedules.length > 0 ? (
                <ul>
                    
                </ul>
            ) : (
                <p></p>
            )}
        </div>
    );
};

export default Selected;




