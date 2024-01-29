import './ModalCreate.css'
import { ModalContext } from '../../../context/ModalContex'; 
import { useContext, useState } from 'react';
import Movecard from '../Movecard/Movecard';
import { MoveContext } from '../../../context/MoveContex'; 
import Deletecard from '../Deletecard/Deletecard';
import { CardContext } from '../../../context/CardContext';
import { title } from 'process';

type props = {
  modalVisible:boolean,
  handleVisible:()=>void,
}
function ModalCreate({modalVisible, handleVisible}:props) {
  const useModalContext = useContext(ModalContext);
  const taskValue = useModalContext?.taskValue!;
  const setTaskValue = useModalContext?.setTaskValue!;
  const titleValue = useModalContext?.titleValue!;
  const [drop,setDrop] = useState<boolean>(false);
  const [large,setLarge] = useState<boolean>(false);

  const setModalVisible = useModalContext?.setModalVisible!;
  const card = useContext(CardContext);
    const cardTypes = card?.cardTypes!;
    const setCardTypes = card?.setCardTypes!;

    

    
  return (
    <div className ='window-overlay'>
      <div className='window'>
        <div className='modal_title'>
        <svg width="20" className='bus_icons' height="20" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6V5C3 3.89543 3.89543 3 5 3H6C6.55228 3 7 3.44772 7 4C7 4.55228 6.55228 5 6 5H5V6C5 6.55228 4.55228 7 4 7C3.44772 7 3 6.55228 3 6Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6 8C6 6.89543 6.89543 6 8 6H19C20.1046 6 21 6.89543 21 8V18C21 19.1046 20.1046 20 19 20H8C6.89543 20 6 19.1046 6 18V8ZM8 8H19V14H8V8ZM18 18C17.4477 18 17 17.5523 17 17C17 16.4477 17.4477 16 18 16C18.5523 16 19 16.4477 19 17C19 17.5523 18.5523 18 18 18ZM8 17C8 17.5523 8.44772 18 9 18H12C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16H9C8.44772 16 8 16.4477 8 17Z" fill="currentColor"></path><path d="M4 14C3.44772 14 3 14.4477 3 15V16C3 17.1046 3.89543 18 5 18V15C5 14.4477 4.55228 14 4 14Z" fill="currentColor"></path><path d="M3 9C3 8.44772 3.44772 8 4 8C4.55228 8 5 8.44772 5 9V12C5 12.5523 4.55228 13 4 13C3.44772 13 3 12.5523 3 12V9Z" fill="currentColor"></path><path d="M8 4C8 3.44772 8.44772 3 9 3H13C13.5523 3 14 3.44772 14 4C14 4.55228 13.5523 5 13 5H9C8.44772 5 8 4.55228 8 4Z" fill="currentColor"></path><path d="M16 3C15.4477 3 15 3.44772 15 4C15 4.55228 15.4477 5 16 5H19C19 3.89543 18.1046 3 17 3H16Z" fill="currentColor"></path></svg>

          <input className = 'title_input' value = {taskValue} onChange={(e)=>{setTaskValue(e.target.value)}}></input>
          <span className='close' onClick={handleVisible}>&#10005;</span>
          <span className='list-type'>in list &nbsp;<span className='underline'>{titleValue}</span></span>
        </div>
        <div className='modal_title'>
        <svg width="24"  className='desc_icon' height="24" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM4 9C3.44772 9 3 9.44772 3 10C3 10.5523 3.44772 11 4 11H20C20.5523 11 21 10.5523 21 10C21 9.44772 20.5523 9 20 9H4ZM3 14C3 13.4477 3.44772 13 4 13H20C20.5523 13 21 13.4477 21 14C21 14.5523 20.5523 15 20 15H4C3.44772 15 3 14.5523 3 14ZM4 17C3.44772 17 3 17.4477 3 18C3 18.5523 3.44772 19 4 19H14C14.5523 19 15 18.5523 15 18C15 17.4477 14.5523 17 14 17H4Z" fill="currentColor"></path></svg>
          Description
        </div>
        <input
          className={`modal_input ${large ? 'large' : 'small'}`}
          placeholder='Add a more detailed description...' onClick={()=>setLarge(!large)}
        /> 
        <div className='action'>Actions</div>       
        <div className='move' onClick={()=>setDrop(!drop)}>
          Move 
        </div>
         <Deletecard title={titleValue} value={taskValue} />
        <div>
          <MoveContext.Provider value={{drop,setDrop}}>
          {drop && <Movecard  />}
          </MoveContext.Provider>
        </div>
      </div>
        
    </div>
  )

}

export default ModalCreate




