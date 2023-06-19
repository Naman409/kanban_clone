import React from 'react'
import { Category, Message, TaskSquare, Profile2User, Setting2, AddSquare, LampOn } from 'iconsax-react'
export default function () {
    return (
        <div className='left_side_bar'>
            <ul className='ul_items1 '>

                <li className='items1' ><Category size="25" color="#787486" variant="Outline" className='mx-3' /><span className='resp'>Home</span> </li>
                <li className='items1'><Message size="25" color="#787486" className='mx-3' /><span className='resp'>Messages</span></li>
                <li className='items1'><TaskSquare size="25" color="#787486" className='mx-3' /><span className='resp'>Tasks</span></li>
                <li className='items1'><Profile2User size="25" color="#787486" className='mx-3' /><span className='resp'>Members</span></li>
                <li className='items1' ><Setting2 size="25" color="#787486" className='mx-3' /><span className='resp'>Settings</span></li>
                <hr style={{ marginLeft: '15px', marginRight: '15px', color: "rgb(98 94 94)" }}></hr>
            </ul>


            <ul className='ul_items2 resp'>

                <div className="d-flex justify-content-between " style={{ marginTop: '-2rem' }}>
                    <li className=''><span className='item_name'>My Project</span></li>
                    <div className=' mx-4'><AddSquare size="20" color="#787486" /></div>
                </div>

                <li className='listhover activeside'><span className="material-icons-round " style={{ color: "#7AC555", fontSize: "8px", marginRight: '1rem' }}>
                    &#xe061;
                </span><span className='item_name' style={{ color: '#0D062D', fontWeight: '600' }}>Mobile App</span>
                    <span className='dot_cls'>...</span></li>




                <li className='listhover'><span className="material-icons-round " style={{ color: "#FFA500", fontSize: "8px", marginRight: '1rem' }}>
                    &#xe061;
                </span><span className='item_name'>Website Redesign</span></li>





                <li className='listhover'><span className="material-icons-round " style={{ color: "#E4CCFD", fontSize: "8px", marginRight: '1rem' }}>
                    &#xe061;
                </span><span className='item_name'>Design System</span></li>
                <li className='listhover'><span className="material-icons-round " style={{ color: "#76A5EA", fontSize: "8px", marginRight: '1rem' }}>
                    &#xe061;
                </span><span className='item_name'>Wireframes</span></li>

            </ul>


            {/* <img src={bulb} alt="" srcset="" className='bulb_img'/> */}
            <div className='d-flex flex-column resp' style={{ marginTop: '4rem' }}> <div className='lampon'>
                <span className='lampbg'></span>
                <LampOn size="32" color="rgb(251, 203, 24)" variant="Bulk" className='' /></div>


                <div className='thought-box '>

                    <h3 className='side_box_h'>Thoughts Time</h3>
                    <p className='side_box_p'>We don't have any notice for you, till then you can share your thoughts with your peers.</p>

                    <input type="text" placeholder='Write a message' className='box_input'></input>
                </div>


            </div>


        </div>

    )
}
