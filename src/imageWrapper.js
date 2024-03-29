import React from 'react';


function ImageWrapper({ src = './src/assets/hitatchi.jpeg', alt = 'Hitachi' }) {
    return (
        React.createElement('span', { className: 'image-wrapper' },
            React.createElement('img', { src, alt })
        )
    );
}

// function ImageWrapper({ src, alt }) {
//     return (
//         <div className="image-wrapper">
//             <img src={src} alt={alt} />
//         </div>
//     );
// }
export default ImageWrapper;
