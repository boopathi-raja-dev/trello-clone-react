import React from 'react'
import { useContext ,useState} from 'react'
import { MoveContext } from '../../../context/MoveContex' 
import './Movecard.css'
import { CardContext } from '../../../context/CardContext'
import { ModalContext } from '../../../context/ModalContex'

type move = 
{
  prevtitle:string,
  newtitle:string,
  cards:string
}


function Movecard() {
    const useMoveContext = useContext(MoveContext)
    const useCardContext = useContext(CardContext);
    const cardTypes = useCardContext?.cardTypes!;
    const setCardTypes = useCardContext?.setCardTypes!;
    const useModalContext = useContext(ModalContext);
    const modalVisible = useModalContext?.modalVisible!;
    const setModalVisible = useModalContext?.setModalVisible!;
    const taskValue = useModalContext?.taskValue!;
    const titleValue = useModalContext?.titleValue!;
    const [selectedOption, setSelectedOption] = useState<string>(titleValue);    
    const [movecardVisible, setMovecardVisible] = useState<boolean>(true);

    const move = ({prevtitle,newtitle,cards}:move)=>{
      //delete
        const updatedcardTypes = cardTypes.map((card,ind) => {
          if(card.title === prevtitle)
          {
              return{
                  ...card,
                  task:card.task.filter((task) => task !== cards)
              };  
            
          }
          else if(card.title === newtitle)
          {
            return{
                ...card,
                task:[...card.task,cards]
            };  
           
          }
          return card;
      })
      setCardTypes(updatedcardTypes);
    }
    
    const handleMoveButtonClick = () => {
      let prevtitle: string = titleValue;
      let newtitle: string = selectedOption;
      let cards: string = taskValue;
      if (titleValue !== selectedOption) {
        moveTask(prevtitle, newtitle, cards);
      } else {
        setModalVisible(false);
      }
    };
  
  
    const moveTask = (prevtitle: string, newtitle: string, cards: string) => {
      move({ prevtitle, newtitle, cards });
      setModalVisible(!modalVisible);
    };
  
    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      let str = e.target.value;
      setSelectedOption(str);
    };

    const handleCloseIconClick = () => {
      setMovecardVisible(false);
     
    };
  
    if (!movecardVisible) {
      return null;
    }
  return (
    <div className ='window-overlay-small'>
    <div className='window-small'>
      <span className='move-card' >Move card</span>
      <span className='close-icon' onClick={handleCloseIconClick}>&#10005;</span>

      <div>
        <p className='heading-color' >Suggested</p>
        <span className='done-btn'>Done</span>
      </div>
      <div>
        <p className='heading-color' >Select destination</p>
        <div className='board-btn'>
          <span className='position-top'>Board</span>
          <div className='trell-btn'><span>My Trello Board</span>
         </div>
        </div>
      </div>
      <div className='move_container'>
      <div className='move_box'>
      <span className='position_top'>List</span>
        <select className='move-list' name="program" id = 'program' onChange={handleSelectChange} value={selectedOption} >
          <option value='To do'>To do</option>
          <option value='Doing'>Doing</option>
          <option value='Done'>Done</option>
        </select>  
      </div>
      <div className='move_item'>
        <span className='position_top'>Position</span>
      <select className='position'  name="program" id = 'program' >
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
        </select>  

      </div>
      </div>
      <div className='move-btn' onClick={handleMoveButtonClick}>
        Move 
      </div>
    </div>
    </div>
  )
}

export default Movecard