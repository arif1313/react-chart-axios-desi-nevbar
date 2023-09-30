
import PropTypes from 'prop-types';
import { AiOutlineCheckCircle } from 'react-icons/ai';
const Feature = ({feature}) => {
    return (
       
        <p className=' flex items-center '><AiOutlineCheckCircle className='mr-2 bg-green-700 rounded-full'></AiOutlineCheckCircle>{feature}</p> 
      
    );
};

Feature.propTypes = {
    feature:PropTypes.string
};

export default Feature;