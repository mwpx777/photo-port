// MODAL

import React, { useState } from 'react'


// currentPhoto prop passed in here from PhotoList component
function Modal({ currentPhoto }) {
    // destructure currentPhoto info from currentPhoto prop that was passed into this function
    const { name, category, description, index } = currentPhoto;

    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{name}</h3>
                <img src={require(`../../assets/large/${category}/${index}.jpg`)}alt="current category" />
                <p>{description}</p>
                <button type="button">Close this Modal</button>
            </div>
        </div>
    )
}

export default Modal;