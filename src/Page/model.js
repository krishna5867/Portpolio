import React, { useState } from 'react'
import {Modal, ModalBody, ModalHeader} from "reactstrap"


const ModalBox = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [modal, setModal] = useState(false);


    const handleSubmit = () => {
        alert("clicked");
    };


    return (
        <div>
            <button className='btn btn-success mt-4' onClick={()=>setModal(true)}>Click To Open</button>
            <Modal
            size='xl'
            isOpen = {modal}
            toggle = {()=> setModal(!modal)}
            >
                <ModalHeader
            toggle = {()=> setModal(!modal)}
            >
            Modal
            </ModalHeader>

                    <ModalBody>
                    <div>
                        <label htmlFor="" >Name</label> <br />
                        <input className="mt-2" type="text" id='name' name='name' value={name} onChange={(e)=>setName(e.target.value)} /><br />
                        <label htmlFor="" >Email</label> <br />
                        <input className="mt-2" type="email" id='email' name='email' value={email} onChange={(e)=>setEmail(e.target.value)} /><br />
                        <label htmlFor="" >Password</label> <br />
                        <input className="mt-2" type="password" id='password' name='password' value={password} onChange={(e)=>setPassword(e.target.value)} /><br />
                        <button className='btn btn-success mt-2' onClick={handleSubmit}>Submit</button>
                    </div>
                    </ModalBody>
            </Modal>
        </div>
    )
}

export default ModalBox