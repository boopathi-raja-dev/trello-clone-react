import React, { useContext, useState } from 'react';
import './modalCreate.scss';
import Movecard from '../MoveCard/moveCard';
import Deletecard from '../DeleteCard/deleteCard';
import { ModalContext } from '../../../context/modalContext';
import { MoveContext } from '../../../context/moveContext';
import { CardContext } from '../../../context/cardContext';
import { ReactComponent as BusIcon } from '../../../assets/bus.svg';
import { ReactComponent as DesIcon } from '../../../assets/desc.svg';



type ModalCreateProps = {
  modalVisible: boolean;
  handleVisible: () => void;
};

const ModalCreate = ({ modalVisible, handleVisible }: ModalCreateProps) => {

  const useModalContext = useContext(ModalContext);
  const taskValue = useModalContext?.taskValue!;
  const setTaskValue = useModalContext?.setTaskValue!;
  const titleValue = useModalContext?.titleValue!;
  const [drop, setDrop] = useState<boolean>(false);
  const [large, setLarge] = useState<boolean>(false);
  const description = useModalContext?.description!;
  const setDescription = useModalContext?.setDescription!;
  const card = useContext(CardContext);
  const cardTypes = card?.cardTypes!;
  const setCardTypes = card?.setCardTypes!;
  const descValue = description;

  const updateTaskValue = (newValue: string) => {
    setTaskValue(newValue);
    const updatedCardTypes = cardTypes.map((card) => {
      if (card.title === titleValue) {
        return {
          ...card,
          task: card.task.map((task) => (task.taskName === taskValue ? { ...task, taskName: newValue } : task)),
        };
      }
      return card;
    });
    setCardTypes(updatedCardTypes);
  };

  const updateDescriptionValue = (newDescription: string) => {
    setDescription(newDescription);
    setCardTypes((prevCardTypes) => {
      const updatedCardTypes = prevCardTypes.map((card) => {
        if (card.title === titleValue) {
          const updatedTasks = card.task.map((task) =>
            task.taskName === taskValue
              ? { ...task, taskDescription: newDescription, completed: true }
              : { ...task }
          );
          return { ...card, task: updatedTasks };
        }
        return card;
      });
      return updatedCardTypes;
    });
  };


  return (
    <div className="window-overlay">
      <div className="window">
        <div className="modal_title">
          <BusIcon />
          <input
            className="title_input"
            value={taskValue}
            onChange={(e) => {
              updateTaskValue(e.target.value);
            }}
          />
          <span className="close" onClick={handleVisible}>
            &#10005;
          </span>
          <span className="list-type">
            in list &nbsp;<span className="underline">{titleValue}</span>
          </span>
        </div>
        <div className="modal_title">
          <DesIcon />
          Description
        </div>
        <input
          className={`modal_input ${large ? 'large' : 'small'}`}
          placeholder="Add a more detailed description..."
          value={
            cardTypes
              .flatMap((card) => card.task)
              .find((task) => task.taskName === taskValue)?.taskDescription || ""
          }
          onChange={(e) => updateDescriptionValue(e.target.value)}
          onClick={() => setLarge(!large)}
        />

        {large && (
          <div className="description_btn">
            <button className="save-btn" onClick={() => setLarge(!large)}>              Save
            </button>
            <button className="cancel-btn" onClick={() => setLarge(!large)}>
              Cancel
            </button>
          </div>
        )}
        <div className="action">Actions</div>
        <div className="move" onClick={() => setDrop(!drop)}>
          Move
        </div>
        <Deletecard title={titleValue} value={taskValue} />
        <div>
          <MoveContext.Provider value={{ drop, setDrop }}>
            {drop && <Movecard />}
          </MoveContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default ModalCreate;

