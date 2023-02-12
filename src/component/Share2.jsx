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
function Share2({ src, alt }) {

    return (
        <div className='image2'>

            <img src='https://interactly-images.s3.ap-south-1.amazonaws.com/temp/2.gif' alt='Anime-gif' width={250} height={250}></img>
            <div>
                <button onClick={copyImage1}>Copy Linked Gif 2</button>
            </div>

        </div>
    );
}

export default Share2;
