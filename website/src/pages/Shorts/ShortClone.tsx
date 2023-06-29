import React from "react";
import {useEffect, useRef, useState} from "react";


interface VideoItem {
    id: {
        videoId: string;
    };
    snippet: {
        title: string;
        description: string;
    };
}
export const ShortClone = () => {
    const [videos, setVideos] = useState<VideoItem[]>([]);
    const videoRefs = useRef<HTMLVideoElement[]>([]);

    useEffect(() => {
        fetchVideos();
    }, []);

    useEffect(() => {
        videoRefs.current = videoRefs.current.slice(0, videos.length);
    }, [videos]);

    const fetchVideos = () => {
        // Fetch videos from the YouTube API
        // Replace YOUR_API_KEY with your actual YouTube API key
        fetch(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=shorts&type=video&key=AIzaSyA0AKYHrpnUX4P4-Iohll505v4waIbWfQM`
        )
            .then((response) => response.json())
            .then((data) => {
                if (data.items && data.items.length > 0) {
                    setVideos(data.items);
                }
            })
            .catch((error) => {
                console.log('Error fetching YouTube videos:', error);
            });
    };

    const playVideo = (index: number) => {
        const video = videoRefs.current[index];
        if (video && video.paused) {
            video.play();
        }
    };

    const pauseVideo = (index: number) => {
        const video = videoRefs.current[index];
        if (video && !video.paused) {
            video.pause();
        }
    };

    const handleIntersection = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
        entries.forEach((entry) => {
            const { target, isIntersecting } = entry;
            const index = videoRefs.current.indexOf(target as HTMLVideoElement);
            if (isIntersecting) {
                playVideo(index);
            } else {
                pauseVideo(index);
            }
        });
    };

    const handleScroll = () => {
        videoRefs.current.forEach((video) => {
            const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });
            observer.observe(video);
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="app">
            {videos.map((video, index) => (
                <div className="video-container" key={video.id.videoId}>
                    <video
                        ref={(el) => (videoRefs.current[index] = el as HTMLVideoElement)}
                        className="video"
                        src={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                        playsInline
                        loop
                    />
                    <div className="video-info">
                        <h3 className="video-title">{video.snippet.title}</h3>
                        <p className="video-description">{video.snippet.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );


};
