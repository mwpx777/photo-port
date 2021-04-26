// PHOTOLIST
import React, { useState } from 'react'
import Modal from '../Modal';



// {category} is getting passed into PhotoList from Gallery
const PhotoList = ({ category }) => {

    const [photos] = useState([
        {
            name: 'Grocery aisle',
            category: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Grocery booth',
            category: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Building exterior',
            category: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Restaurant table',
            category: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Cafe interior',
            category: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Cat green eyes',
            category: 'portraits',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Green parrot',
            category: 'portraits',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Yellow macaw',
            category: 'portraits',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Pug smile',
            category: 'portraits',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Pancakes',
            category: 'food',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Burrito',
            category: 'food',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Scallop pasta',
            category: 'food',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Burger',
            category: 'food',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Fruit bowl',
            category: 'food',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Green river',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Docks',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Panoramic village by sea',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Domestic landscape',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Park bench',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
    ]);

    const currentPhotos = photos.filter((photo) => photo.category === category);
    
    // this will pass currentPhoto as a prop into Modal below
    const [currentPhoto, setCurrentPhoto] = useState();

    const toggleModal = (image, i) => {
        // this uses spread operator to add the index: i key value pair to current photo state
        setCurrentPhoto({...image, index: i})
        // this will setIsModalOpen to true when image is clicked on 
        // this will setIsModalOpen to false when `Close this modal` button is clicked
        setIsModalOpen(!isModalOpen);
    }

    // this hook manages if modal is open 
    const [isModalOpen, setIsModalOpen ] = useState(false);

    return (
        <div>
            {/* this will take in currentPhoto props and send to Modal component */}
            {/* the will allow modal to open when isModalOpen is set to true , and will run toggleModal function when modal is closed*/}
           {isModalOpen && (<Modal currentPhoto = {currentPhoto} onClose={toggleModal} />)}
            <div className="flex-row">
                {currentPhotos.map((image, i) => (
                    <img
                        src={require(`../../assets/small/${category}/${i}.jpg`)}
                        alt={image.name}
                        className="img-thumbnail mx-1"
                        onClick={() => toggleModal(image, i)}
                        key={image.name}
                    />
                ))}
            </div>
        </div>
    );
};

export default PhotoList;
