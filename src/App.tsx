import React from 'react';
import { useState } from 'react';
import NavBar from './shared/components/Navbar/navbar';
import Board from './shared/components/Board/board';
import Cards from './shared/components/Cards/cards';
import ModalCreate from './shared/components/ModalCreate/modalCreate';
import { taskContext } from './context/TaskContent';
import { CardContext} from './context/CardContext';
import { ModalContext } from './context/ModalContex'; 
import { CardsTypes } from './shared/types/CardsTypes';
import { initialCards } from './context/CardContext';

function App() {
  const [modalVisible,setModalVisible] = useState<boolean>(false);
  const [task,setTask] = useState<string[]>([]);
  const [ cardTypes, setCardTypes ] = useState<CardsTypes[]>(initialCards);
  const [taskValue,setTaskValue] = useState<string>('');
  const [titleValue,setTitleValue] = useState<string>('');
  const [description,setDescription]=useState<string>('');
  const [completed,setCompleted]=useState<boolean>(false);

  const handleVisible = () => {
       setModalVisible(!modalVisible);
  }

  return (
    <div className="App">
      <CardContext.Provider value = {{cardTypes,setCardTypes}}>
        <taskContext.Provider value = {{task,setTask}}>
          <ModalContext.Provider value = {{modalVisible,setModalVisible,taskValue,setTaskValue,titleValue,setTitleValue,description,setDescription,completed,setCompleted}}>
              <NavBar/>
              <Board/>
              <Cards />
              {modalVisible && <ModalCreate modalVisible = {modalVisible} handleVisible = {handleVisible}/>}
          </ModalContext.Provider>
        </taskContext.Provider>
      </CardContext.Provider>
    </div>
  );
}

export default App;





