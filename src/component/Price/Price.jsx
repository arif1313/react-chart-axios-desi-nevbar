

import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const Price = ({ value }) => {


    const { name, price } = value;
    return (

        <div>


            <div className='bg-slate-700 p-12 text-center rounded-lg text-white flex flex-col '>
              
                    <p className='text-3xl font-bold'>{price} <span className='text-lg'>/mon </span></p>
                
                    <h1 className='text-2xl p-3'>{name} </h1>
                   <div className='py-7 flex-grow'>
                 
                        {

                           value.features.map(feature=><Feature key={feature.inx} feature={feature}></Feature>)
                        }
                    
                   </div>
               <button className='bg-green-600 w-full p-2 rounded-lg mt-12'>Buy now </button>
            </div>


        </div>

    );
};

Price.propTypes = {
    value: PropTypes.object
};

export default Price;