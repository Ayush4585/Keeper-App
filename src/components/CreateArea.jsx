import React,{useState} from "react";


function CreateArea(props){
    const [note, setNote]=useState({title:"",content:""});

    function handleChange(e){
        const {name,value}=e.target;

        setNote(prevValue =>{
            return {
                ...prevValue,
                [name]:value
                 };
        });

    }

    function submitNote(e){
        props.onAdd(note);
        e.preventDefault();
    }

    return (<div>
        <form>
            <input name="title"  onChange={handleChange} value={note.title} placeholder="Title"/>
            <textarea name="content" onChange={handleChange} value={note.content} placeholder="Take a Note.." rows="4" />
            <button onClick={submitNote}>Add</button>
        </form>
    </div>)
}


export default CreateArea;

