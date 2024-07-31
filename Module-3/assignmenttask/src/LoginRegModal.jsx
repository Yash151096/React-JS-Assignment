import React, { useState } from 'react'

const LoginRegModal = () => {
    const [modal, setModal] = useState(false);
    const [formType, setFormType] = useState('login');
    const toggleModal = (type) => {
        setFormType(type);
        setModal(!modal);
    }
    if(modal) {
        document.body.classList.add('active-modal');
    } else {
        document.body.classList.remove('active-modal');
    }
    return (
        <div>
            <h3>Login Form Modal</h3>
            <button onClick={() => toggleModal('login')}>Click to Open</button>
            <h3>Registration Form Modal</h3>
            <button onClick={() => toggleModal('register')}>Click to Open</button>
            {modal && (
                <div className="modal">
                    <div onClick={() => setModal(false)} className="overlay"></div>
                    <div className="modal-content">
                        {formType === 'login' ? (
                            <>
                                <h2>Login to Your Account</h2>
                                <form action="#">
                                    <label htmlFor="emailId">Email Id</label>&nbsp;
                                    <input type="text" name="emailId" id="emailId" /><br /><br />
                                    <label htmlFor="password">Password</label>&nbsp;
                                    <input type="password" name="password" id="password" />
                                </form>
                                <button>Login</button>
                                <p>Forgot your password?</p>
                                <p onClick={() => toggleModal('register')}>Create A New Account</p>
                            </>
                        ) : (
                            <>
                                <h2>Create a New Account</h2>
                                <form action="#">
                                    <label htmlFor="emailId">User Name</label>&nbsp;
                                    <input type="text" name="username" id="username" /><br /><br />
                                    <label htmlFor="emailId">Email Id</label>&nbsp;
                                    <input type="text" name="emailId" id="emailId" /><br /><br />
                                    <label htmlFor="password">Password</label>&nbsp;
                                    <input type="password" name="password" id="password" /><br /><br />
                                    <label htmlFor="confirmPassword">Confirm Password</label>&nbsp;
                                    <input type="password" name="confirmPassword" id="confirmPassword" />
                                </form>
                                <button>Register</button>
                                <p onClick={() => toggleModal('login')}>Already have an account? Login</p>
                            </>
                        )}
                        <button className='close-modal' onClick={toggleModal}>X</button>
                    </div>
                </div>
            )}  
        </div>
    )
}

export default LoginRegModal