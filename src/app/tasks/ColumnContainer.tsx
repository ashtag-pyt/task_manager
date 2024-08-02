import { Column ,Id, 
  Task
} from "./types"
import TaskCard from "./TaskCard";
import AddIcon from '@mui/icons-material/Add';
import React, { useMemo } from "react";
import { useState} from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import {CSS} from "@dnd-kit/utilities";
import { SortableContext, useSortable } from "@dnd-kit/sortable";

interface Props {
    column:Column;
    deleteColumn:(id:Id)=>void;
    updateColumn:(id:Id, title:string) => void;
    createTask:(columnId:Id)=>void;
    deleteTask:(id:Id)=>void;
    updateTask:(id:Id,content:string)=>void;
    tasks:Task[];
}

function ColumnContainer(props:Props) {
    const {column,deleteColumn,updateColumn,createTask, tasks,deleteTask,updateTask} = props;

    const [editMode , setEditMode] = useState(false);

    const tasksIds = useMemo(()=>{return tasks.map((task)=>task.id)},[tasks]);

    const {setNodeRef, attributes, listeners, transform, transition, isDragging} = useSortable({
      id:column.id,
      data:{
        type:"Column",
        column,
      },
      disabled:editMode,
    });

    const style = {
      transition,
      transform:CSS.Transform.toString(transform),
    }

    if(isDragging){
      return (
        <div ref={setNodeRef} style={style} className="bg-slate-900 opacity-60 border-2 border-rose-400 w-[350px] h-[500px] max-h-[500px] rounded-md flex flex-col">

        </div>
      )
    }

  return (

   
    <div ref={setNodeRef} style={style} className="bg-neutral-800/40 w-[350px] h-[500px] max-h-[500px] rounded-md flex flex-col">

      <div {...attributes} {...listeners} onClick={()=>setEditMode(true)}className="text-md bg-slate-900 text-white h-[60px] cursor-grab rounded-md rounded-b-none p-3 font-bold border-slate-900 border-4 flex items-center justify-between">

        <div className="flex gap-2 bg-slate-900">

            <div className="flex justify-center bg-slate-800 items-center   px-2 py-1 text-sm rounded-full">
                0
            </div>
            {!editMode && column.title}
            {editMode && <input className="bg-black focus:border-rose-500 border rounded outline-none px-2" value={column.title} 
            onChange={(e)=> updateColumn(column.id,e.target.value)} autoFocus onBlur={()=>{
              setEditMode(false);
            }} onKeyDown={e=>{
              if(e.key!=="Enter") return;
              setEditMode(false);
            }}/>}
            </div>
            <button onClick={()=>{deleteColumn(column.id)}}><DeleteIcon/></button>
        </div>

      <div className="flex flex-grow text-white flex-col gap-4 p-2 overflow-x-hidden overflow-y-auto"><SortableContext items={tasksIds}>{tasks.map((task)=>{return (<TaskCard key ={task.id} task={task} deleteTask={deleteTask} updateTask={updateTask}/>)})}
      </SortableContext></div>
      <button className="flex gap-2 items-center border-columnBackgroundColor border-2 rounded-md p-4 border-x-columnBackgroundColor hover:bg-mainBackgroundColor hover:text-rose-500 active:bg-black text-white" onClick={()=>{createTask(column.id);}}><AddIcon/>Add Task</button>
    </div>

    
  )
}

export default ColumnContainer
