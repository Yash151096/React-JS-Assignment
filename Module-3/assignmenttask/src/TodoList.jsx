import React from 'react'

function Todolist(props) {
    const { index, item, deleteItem, editItem, isEditing, setEditIndex, editText, setEditText } = props;
    return (
        <li className="list-item">
            {
                isEditing ? (
                    <>
                        <input 
                            type="text"
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                            className="input-box-todo"
                        />&nbsp;
                        <button className="fa-solid fa-edit icon-edit btnSave" onClick={() => editItem(index, editText)}>Save</button>
                    </>
                ) : (
                    <>
                        {item}
                        <span className='icons'>
                            <button className="fa-solid fa-edit icon-edit btnEdit" onClick={() => { setEditIndex(index); setEditText(item); }}>Edit</button>&nbsp;
                            <button className="fa-solid fa-trash-can icon-delete btnDelete" onClick={() => deleteItem(index)}>Delete</button>
                        </span>
                    </>
                )
            }
        </li>
    );
}

export default Todolist