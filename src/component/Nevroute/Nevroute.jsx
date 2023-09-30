
import PropTypes from 'prop-types';

const Nevroute = ({route})=> {
   
    return (
        <li  className=" shadow-lg md:shadow-none   hover:bg-orange-500 p-3"><a href={route.path}>{route.name}</a></li>
    );
};

Nevroute.propTypes = {
  route:PropTypes.object
};

export default Nevroute;