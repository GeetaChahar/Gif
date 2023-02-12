import React from 'react';

function copyImage1(event) {
    const element = event.target
    const imageUrl = element.src
    navigator.clipboard.writeText(imageUrl).then(function () {
        alert('Copy done');
    }, function (err) {
        alert('Could not copy', err);
    });

}
function Share1({ src, alt }) {

    return (
        <div className='image1'>

            <img src='https://interactly-images.s3.ap-south-1.amazonaws.com/temp/1.gif' alt='Girl-gif' width={250} height={250}></img>
            <div>
                <button onClick={copyImage1}>Copy Linked Gif 1</button>
            </div>

        </div>
    );
}

export default Share1;
