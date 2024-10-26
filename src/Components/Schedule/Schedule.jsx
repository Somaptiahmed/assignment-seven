import PropTypes from 'prop-types'
import { MdOutlineDeleteForever } from "react-icons/md";
import { useState } from 'react';


const Schedule = ({schedule}) => {
    const {name, image, role} = schedule;
    const [isVisible, setIsVisible] = useState(true);

    const handleDelete = () => {
        setIsVisible(false);
    };

    return (
        isVisible && (
            <div className='mt-10'>
                <div className='space-y-5 border-2 rounded-lg p-5 m-5 flex justify-between bg-pink-50 w-full'>
                    <div className='flex justify-between'>
                        <img src={image} alt="" className='rounded-full w-24'/>
                        <div>
                            <h3 className='text-xl font-bold'>{name}</h3>
                            <p className='text-xl'>{role}</p>
                        </div>
                    </div>
                    <button onClick={handleDelete}>
                        <MdOutlineDeleteForever />
                    </button>
                </div>
            </div>
        )
       
    );
};

Schedule.propTypes = {
    schedule: PropTypes.object.isRequired
}

export default Schedule;