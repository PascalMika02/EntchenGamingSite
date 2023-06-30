import React from 'react';
import { useEffect, useState } from 'react';
import styles from './main.module.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const Main = () => {
  const [videos, setVideos] = useState<any[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    fetchVideos();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const fetchVideos = async () => {
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

  const playVideo = (videoId: string) => {
    const video = document.getElementById(`video-${videoId}`) as HTMLVideoElement;
    if (video) {
      const autoplayParam = 'autoplay=1';
      if (video.src.includes('?')) {
        video.src += `&${autoplayParam}`;
      } else {
        video.src += `?${autoplayParam}`;
      }
    }
  };

  const pauseVideo = (videoId: string) => {
    const video = document.getElementById(`video-${videoId}`) as HTMLVideoElement;
    if (video) {
      video.src = video.src.replace('&autoplay=1', '');
    }
  };

  const isInViewport = (element: HTMLElement) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const handleScroll = () => {
    videos.forEach((video) => {
      const videoElement = document.getElementById(`video-${video.id.videoId}`);
      if (videoElement && isInViewport(videoElement)) {
        playVideo(video.id.videoId);
      } else {
        pauseVideo(video.id.videoId);
      }
    });
  };

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div>
      <div className={styles.button}>
        <h1>Welcome to Entchen Gaming</h1>
        <p>Check out the latest videos from our YouTube channel:</p>

        <Carousel
          showStatus={false}
          showThumbs={true}
          selectedItem={currentSlide}
          onChange={handleSlideChange}
        >
          {videos.map((video) => (
            <div className={styles['video-container']} key={video.id.videoId}>
              {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
              <iframe
                id={`video-${video.id.videoId}`}
                width="100%"
                height="auto"
                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <h3>{video.snippet.title}</h3>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
