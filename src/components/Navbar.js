import React from 'react'
import laal_aunty from '../images/laal_aunty.png'
import logo from '../images/logo.png'
import bell from '../images/bell_icon.png'
import { Calendar2, MessageQuestion, Notification, SearchNormal1, ArrowDown2, ArrowLeft2 } from 'iconsax-react'

export default function Navbar() {
    return (
        <div className='w-100'>
            <div className='d-flex'>


                <div className='left border d-flex '>

                    <img src={logo} className='my-2' style={{ width: '2rem', height: '1.5rem' }}></img>

                    <div className='heading mx-3 my-2 resp' >Project M.</div>
                    <div className='my-1' style={{ marginLeft: '2rem' }}>
                        <span className="material-symbols-outlined resp"
                            style={{ color: '#787486', fontSize: '2rem' }}>
                            &#xeac3;
                        </span>
                    </div>

                </div>

                <div className='right border d-flex justify-content-around'>

                    <div className="input-icons mx-4">


                        <SearchNormal1 size="17.42" color="#787486" variant="TwoTone" className='searchicon' />
                        <input type="text" className="input-field resp" placeholder="Search for anything..." aria-label="Username" aria-describedby="basic-addon1" />
                    </div>

                    <div className='d-flex my-2 mob_pad' >
                        <div className='mx-2'><Calendar2 size="20" color="#787486" /></div>
                        <div className='mx-2'><MessageQuestion size="20" color="#787486" /></div>
                        <div className='mx-2'>
                            {/* <Notification size="20" color="#787486" /> <span className="material-icons-round red_notif" style={{
                            color: "#D8727D", fontSize: "0.6rem",

                            position: 'absolute',

                            right: ' 14.95rem',

                            top: '1.7rem'
                            }}> &#xe061;</span> */}
                            <img src={bell} className="bell_icon" alt="" />
                        </div>
                    </div>

                    <div className='d-flex '>
                        <div>
                            <div className='s1'>Anima Agrawal</div>
                            <div className='s2 my-1'>U.P , India</div>
                        </div>
                        <div>
                            <img src={laal_aunty} alt="Avatar" className='avatar my-1 mx-4' />
                        </div>
                        <div style={{
                            marginLeft: '-17px',
                            marginTop: '10px'
                        }}>
                            <ArrowDown2 size="13" color='#292D32' variant="Outline" />

                        </div>


                    </div>

                </div>
            </div >
        </div >
    )
}
