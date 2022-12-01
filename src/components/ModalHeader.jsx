import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const ModalHeader = ({txt1, setModal2}) => {

    const modalClose = () =>{
        setModal2(false);
        console.log('loginclose'); 
    }

return (
<div className="modal_header">
    <p>{txt1}</p>
    <FontAwesomeIcon icon={faTimes} className='arrowicon' onClick={modalClose} />
</div>
)
}

export default ModalHeader;