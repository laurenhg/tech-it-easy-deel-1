import React from 'react';


function ImageWrapper({ src = './src/assets/hitatchi.jpeg', alt = 'Hitachi' }) {
    return (
        React.createElement('span', { className: 'image-wrapper' },
            React.createElement('img', { src, alt })
        )
    );
}


export default ImageWrapper;