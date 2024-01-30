export interface Modaltypes 
{
    modalVisible:boolean,
    setModalVisible:React.Dispatch<React.SetStateAction<boolean>>,
    taskValue:string,
    setTaskValue:React.Dispatch<React.SetStateAction<string>>,
    titleValue:string,
    setTitleValue:React.Dispatch<React.SetStateAction<string>>
    description:string,
    setdescription:React.Dispatch<React.SetStateAction<string>>
    completed:boolean,
    setcompleted:React.Dispatch<React.SetStateAction<boolean>>
}