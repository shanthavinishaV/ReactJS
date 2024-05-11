import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AlbumList() {
    // handle albums 
    const [albums, setAlbums] = useState([]);
    // handle loading message
    // handle error message
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/albums")

            .then((response) => {
                setAlbums(response.data);
                setIsLoading(false);
            })

            .catch((error) => {
                setError("Failed to fetch data");
                setIsLoading(false);
            })

    }, []
    );

    {/* if loading show loading message*/}
    if (isLoading) {
        return <h1>Loading albums...</h1>
    }
 {/* if error show error message*/}
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            <h1>Album List</h1>
            <ul>
                 {/* Display Album Title */}
                {albums.map((album) => (
                    <li key={album.id}>{album.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default AlbumList;