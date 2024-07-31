import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import TodoInput from './TodoInput'
import Todolist from './TodoList';
import MovableElement from './MovableElement';
import Countercomponent from './Countercomponent';
import Login from './Login';
import Logout from './Logout';
import Listview from './Listview';
import LoginRegModal from './LoginRegModal';

function App() {
    const [isLogin,setIsLogin] = useState(0)
    const [listTodo,setListTodo] = useState([]);
    const [editIndex,setEditIndex] = useState(null);
    const [editText,setEditText] = useState('');
    
    let addList = (inputText) => {
        if(inputText!=='')
        setListTodo([...listTodo,inputText]);
    }
    const deleteListItem = (key) => {
        let newListTodo = [...listTodo];
        newListTodo.splice(key,1)
        setListTodo([...newListTodo])
    }
    const editListItem = (index, newText) => {
        let newListTodo = [...listTodo];
        newListTodo[index] = newText;
        setListTodo([...newListTodo]);
        setEditIndex(null);
        setEditText('');
    }
    return (
        <div className="App">
            {/* <header className="App-header">
                <h2>React JS</h2>
                <img src={logo} className="App-logo" alt="logo" />
                <p style={{backgroundColor:"#61dafb", width:"100%", height:"100px", display:"flex", justifyContent:"center", alignItems:"center", color:"#000", fontSize:"50px", fontWeight:"600"}}>Hello World!!!</p>
            </header> */}
            <h1>Counter Component</h1>
            <Countercomponent />
            <hr></hr>
            <h1>Login & Logout</h1>
            { isLogin ? <Login /> :<Logout /> }
            <button className='loginLogoutBtn' onClick={()=> setIsLogin(!isLogin)}> { isLogin ? "Logout" : "Login" }</button>
            <hr></hr>
            <h1>List View</h1>
            <Listview />
            <hr></hr>
            <h1>Create modal for Login and Registration</h1>
            <LoginRegModal />
            <hr></hr>
            <div className="main-container">
                <div className="center-container">
                    <h1 className="app-heading">TODO List</h1>
                    <TodoInput addList={addList}/>
                    <hr/>
                    {
                        listTodo.map((listItem,i) => {
                            return (
                                <Todolist 
                                    key = {i} 
                                    index = {i} 
                                    item = {listItem} 
                                    deleteItem = {deleteListItem} 
                                    editItem = {editListItem}
                                    isEditing = {editIndex === i}
                                    setEditIndex = {setEditIndex}
                                    editText = {editText}
                                    setEditText = {setEditText}
                                />
                            )
                        })
                    }
                </div>
            </div>
            <hr></hr>
            <h1>Move an element on mouse move using useState OR useEffect Hook</h1>
            <MovableElement />
        </div>
    );
}

export default App;