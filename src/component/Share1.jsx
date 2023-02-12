import React, { useState } from 'react';


function Share1() {
    const [imageUrl, setImageUrl] = useState("");

    const copyImage = () => {
        navigator.clipboard.writeText(imageUrl);
        alert("Image URL copied to clipboard");
    };

    return (
        <div>

            <img src='https://interactly-images.s3.ap-south-1.amazonaws.com/temp/1.gif' width={250} height={250}></img>
            <div>
                <button onClick={copyImage}>Copy Linked Gif 1</button>
            </div>
        </div>
    );
}

export default Share1;
