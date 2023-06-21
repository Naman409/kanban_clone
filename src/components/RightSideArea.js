import React, { useState } from 'react'
import logon from '../images/logon.png'
import { AddSquare, Link21, Add, ArrowDown2, Calendar, Profile2User } from 'iconsax-react'
import { Message, Pause, Menu } from 'iconsax-react'
import { FolderMinus } from 'iconsax-react'
import img1 from '../images/img1.png'
import img2 from '../images/img2.png'
import img4 from '../images/img4.png'
import pencil from '../images/Vector.png'
import filter from '../images/filter.png'
import people1 from '../images/people1.png'
import people2 from '../images/people2.png'
import people3 from '../images/people3.png'
import people4 from '../images/people4.png'
import people5 from '../images/people5.png'
import people6 from '../images/people6.png'
import _ from 'lodash'
import { v4 } from "uuid"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function RightSideArea() {


    const [board, setState] = useState([

        {
            title: "To Do",
            color: '#5030E5',
            bordercolor: "#5030E5",
            items: [
                {
                    id: " 11",
                    tag: 'Low',
                    heading: 'Brainstorming',
                    para: 'Brainstorming brings team members\' diverse experience into play.',
                    image: '',
                    people: people1,
                    comments: '12',
                    files: '0'
                },
                {
                    id: "12",
                    tag: 'High',
                    heading: 'Research',
                    para: 'User research helps you to create an optimal product for users.',
                    image: '',
                    people: people2,
                    comments: '10',
                    files: '3'
                },
                {
                    id: "13",
                    tag: 'High',
                    heading: 'Wireframes',
                    para: 'Low fidelity wireframes include the most basic content and visuals.',
                    image: '',
                    people: people1,
                    comments: '12',
                    files: '0'
                },

            ]
        },
        {
            title: "On Progress",
            color: ' #FFA500',
            bordercolor: "#FFA500",
            items: [
                {
                    id: "21",
                    tag: 'Low',
                    heading: 'Onboarding Illustrations',
                    para: '',
                    image: img1,
                    people: people3,
                    comments: '14',
                    files: '15'
                },
                {
                    id: " 22",
                    tag: 'Low',
                    heading: 'Moodboard',
                    para: " ",
                    image: img2,
                    people: people4,
                    comments: '9',
                    files: '10'
                }

            ]
        },
        {
            title: "Done",
            color: ' #76A5EA',
            bordercolor: "#8BC48A",
            items: [
                {
                    id: "31",
                    tag: 'Completed',
                    heading: 'Mobile App Design',
                    para: '',
                    image: img4,
                    people: people5,
                    comments: '12',
                    files: '15'
                },
                {
                    id: "32",
                    tag: 'Completed',
                    heading: 'Design System',
                    para: 'It just needs to adapt the UI from what you did before.',
                    image: '',
                    people: people6,
                    comments: '12',
                    files: '15'
                }

            ]
        }
    ]);

    const handleDragEnd = ({ destination, source }) => {


        if (!destination) {
            return;
        }

        if (
            destination.index === source.index &&
            destination.droppableId === source.droppableId
        ) {
            return;
        }


        const itemCopy = { ...board[source.droppableId].items[source.index] };

        setState((prev) => {
            prev = { ...prev };

            prev[source.droppableId].items.splice(source.index, 1);


            prev[destination.droppableId].items.splice(
                destination.index,
                0,
                itemCopy
            );

            return prev;
        });
    };


  return (
      <>
          <div className='right_side_area'>
              <div className="d-flex justify-content-between my-4 mx-3 mob_app_sec">
                  <div className='d-flex gap-2'><text className='head_text'>Mobile App</text><div className='righticon my-4'> <img src={pencil} className='iconbg' alt=""></img> </div>

                      <div className='righticon my-4' style={{ marginLeft: '-5px' }}> <Link21 size="25" color="#5030E5" variant="Outline" className='iconbg' /></div></div>


                  <div className='my-3 d-flex '><div className='righticon '><Add size="25" color="#5030E5" className='iconbg' /></div><span className='right_invite'>Invite</span>
                      <img src={logon} alt="" srcSet="" className='img_cls' />
                  </div>
              </div>

              <div className="d-flex justify-content-between">
                  <div className='d-flex flex-row  mx-5 gap-3'> <div className='buttonleft'>
                      <img src={filter} alt='img'></img>
                      <span className='btnfont'>Filter</span>
                      <ArrowDown2 size="20" color="#787486" variant="Outline" />
                  </div>
                      <div className='buttonleft'>
                          <Calendar size="20" color="#787486" variant="Outline" />
                          <span className='btnfont'>Today</span>
                          <ArrowDown2 size="20" color="#787486" variant="Outline" />
                      </div>
                  </div>

                  <div className='d-flex gap-3 resp' style={{ marginRight: '2rem' }}>
                      <div >
                          <div className='buttonleft'>
                              <Profile2User size="20" color="#787486" />
                              <span className='btnfont'>Share</span>

                          </div>

                      </div>
                      <div className='mx-2' style={{ border: '1px solid #787486', margin: '0.3rem' }}></div>
                      <div className='stylepause'><i className="fa-solid fa-pause fa-rotate-90" style={{ color: 'white', fontSize: '1.3rem', padding: '0.6rem 0.8rem' }}></i></div>
                      <div className='my-2'><Menu size="25" color="#787486" /></div>
                  </div>
              </div>

              <div className="d-flex justify-content-evenly my-5 mx-3 long_box_resp" style={{ gap: '1.25rem' }}>


                  <DragDropContext onDragEnd={handleDragEnd}>
                      {_.map(board, (data, key) => {
                          return (
                              <div className='long_box' key={key}>

                                  <div className='d-flex justify-content-between mt-4 card_head_box' style={{ borderBottom: `3px solid ${data.bordercolor}` }}>
                                      <div className='d-flex gap-3'>  <div className='card_head mt-1'><span className="material-icons-round" style={{ color: `${data.color}`, fontSize: "8px", marginRight: "4px" }}>
                                          &#xe061;
                                      </span>{data.title} </div><div className='border_card'><div className='card_head_no'>{data.items.length}</div></div>

                                      </div>
                                      {data.title === "To Do" ? <div className='righticon my-1 ' style={{ marginTop: '0rem', marginRight: '0rem', width: '1.2rem', height: '1.2rem' }}><Add size="20" color="#5030E5" className='iconbg' style={{ marginTop: '-0.6rem' }} /></div>

                                          : ''}
                                  </div>
                                  <Droppable droppableId={key}>
                                      {(provided, snapshot) => {
                                          return (
                                              <div
                                                  ref={provided.innerRef}
                                                  {...provided.droppableProps}
                                                  key={"Todo"}
                                                  className={"droppable-col"}
                                              >
                                                  {data.items.map((el, index) => {
                                                      return (
                                                          <Draggable
                                                              key={el.id}
                                                              index={index}
                                                              draggableId={el.id}
                                                          >
                                                              {(provided, snapshot) => {
                                                                  console.log(snapshot);
                                                                  return (
                                                                      <div
                                                                          id={el.id
                                                                          }
                                                                          className={`item ${snapshot.isDragging && "dragging"
                                                                              } inner_box my-4 `}
                                                                          ref={provided.innerRef}
                                                                          {...provided.draggableProps}
                                                                          {...provided.dragHandleProps}
                                                                      >






                                                                          <div className="d-flex justify-content-between" style={{ padding: '0.75rem 0.688rem' }}>
                                                                              <div><button className={
                                                                                  el.tag === 'Low' ? 'btn_low' : (el.tag === 'High') ? 'btn_high' : 'btn_completed'
                                                                              }>{el.tag}</button></div>
                                                                              <div className='dot_cls'>...</div>
                                                                          </div>
                                                                          <div style={{ padding: '0rem 0.688rem' }}>
                                                                              <p className="heading">
                                                                                  {el.heading}
                                                                              </p>
                                                                              <p className='para'>
                                                                                  {el.para}
                                                                              </p>
                                                                              {el.image != '' ? <img className='my_img' src={el.image} alt=''></img> : ''}
                                                                              <div className="d-flex gap-5 " style={{ marginTop: '1.875rem' }}>
                                                                                  <div><img className='my_img' src={el.people} alt='' ></img></div>
                                                                                  <div className='d-flex justify-content-end comm'>
                                                                                      <div div style={{ marginRight: '0.75rem' }}><Message
                                                                                          size="20"
                                                                                          color="#787486"
                                                                                      /><span className='comments'> {el.comments} comments</span></div>
                                                                                      <div><FolderMinus size="20" color="#787486" /><span className='comments'> {el.files} files</span></div>
                                                                                  </div>
                                                                              </div>
                                                                          </div>











                                                                      </div>
                                                                  );
                                                              }}
                                                          </Draggable>
                                                      );
                                                  })}
                                                  {provided.placeholder}
                                              </div>
                                          );
                                      }}
                                  </Droppable>
                              </div>
                          );
                      })}
                  </DragDropContext>

































              </div>
          </div ></>
  )
}
