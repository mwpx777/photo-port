// MODAL

import React from 'react'


// onClose and currentPhoto props passed in here from PhotoList component
function Modal({ onClose, currentPhoto }) {
    // destructure currentPhoto info from currentPhoto prop that was passed into this function
    const { name, category, description, index } = currentPhoto;

    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{name}</h3>
                <img src={require(`../../assets/large/${category}/${index}.jpg`)}alt="current category" />
                <p>{description}</p>
                <button onClick={onClose} type="button">Close this modal</button>
            </div>
        </div>
    )
}

export default Modal;


