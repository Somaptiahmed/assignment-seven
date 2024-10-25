import PropTypes from 'prop-types'
import { MdOutlineDeleteForever } from "react-icons/md";
const Schedule = ({schedule}) => {
    const {name, image, role} = schedule;

    return (
        <div className='mt-10'>
            < div className='space-y-5 border-2 rounded-lg p-5 m-5 flex justify-between'>
            <div className='flex justify-between'>
                <img src={image} alt="" className='rounded-full w-24'/>
            <div>
            <h3 className='text-xl font-bold'>{name}</h3>
            <p className='text-xl'>{role}</p>
            </div>
            </div>
            <button><MdOutlineDeleteForever /></button>
        </div>
        </div>
    );
};

Schedule.propTypes = {
    schedule: PropTypes.object
}

export default Schedule;