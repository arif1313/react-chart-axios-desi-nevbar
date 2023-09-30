import { useState } from "react";
import Nevroute from "../Nevroute/Nevroute";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
const Nevbar = () => {


    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/products", name: "Products" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/profile/:id", name: "User Profile" },
    ];

    const [Open, setOpen] = useState(false)
    return (
        <div className="text-black bg-amber-600 p-3">
            <div className="text-2xl md:hidden" onClick={() => setOpen(!Open)}>
                {
                    Open == true ? <AiOutlineClose ></AiOutlineClose> :
                        <AiOutlineMenu ></AiOutlineMenu>
                }
          
          </div>

            <ul className={`md:flex  absolute md:static bg-amber-600  ${Open? 'left-12' : '-left-56'} duration-1000 shadow-lg md:shadow-none p-6 md:p-3`} >
                {
                    routes.map(route => <Nevroute key={route.id} route={route}></Nevroute>)
                }
            </ul>
           
        </div>
    );
};



export default Nevbar;