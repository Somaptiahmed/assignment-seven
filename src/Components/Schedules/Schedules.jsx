import PropTypes from 'prop-types'
import Schedule from '../Schedule/Schedule';
const Schedules = ({schedules}) => {
    return (
        <div>
            <button className="text-slate-500 bg-slate-200 rounded-xl  w-36 h-12 mt-20">Selected({schedules.length})</button>
            {
                schedules.map((schedule , idx)=> <Schedule key={idx} schedule={schedule}></Schedule>)
            }
            
        </div>
    );
};

Schedules.propTypes = {
    schedules: PropTypes.array
}
export default Schedules;