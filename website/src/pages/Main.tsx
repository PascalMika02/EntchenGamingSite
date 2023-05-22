import React from 'react';
import {useEffect, useState} from "react";

export const Main = () => {
    const [videos, setVideos] = useState<any[]>([]);

    useEffect(() => {
        fetchVideos();
    }, []);

    const fetchVideos = () => {
        fetch(
            'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCDMCthbfVvjj_scXYo7NlEg&maxResults=10&order=date&key=AIzaSyA0AKYHrpnUX4P4-Iohll505v4waIbWfQM'
        )
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }
                return response.json();
            })
            .then((data) => {
                if (data.items && data.items.length > 0) {
                    setVideos(data.items);
                } else {
                    console.log('No videos found in the response data.');
                }
            })
            .catch((error) => console.log('Error fetching YouTube videos:', error));
    };



    return (
        <div>


            <div className="main-content">
                <h1>Welcome to Entchen Gaming</h1>
                <p>Check out the latest videos from our YouTube channel:</p>
                <div id="videos">
                    {videos.map((video) => (
                        <div className="video-container" key={video.id.videoId}>
                            <iframe
                                id={`video-${video.id.videoId}`}
                                width="560"
                                height="315"
                                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                            <h3>{video.snippet.title}</h3>
                        </div>
                    ))}
                </div>
            </div>

            <style>
                {/* Add the CSS styles here */}
            </style>
        </div>
    );
};
