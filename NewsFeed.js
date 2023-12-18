import React from 'react';
import NewsStory from './NewsStory'; 



const NewsFeed = () => {
  return (
    <div className="news-feed">
      <h1>My News Feed</h1>
      {newsData.map((story, index) => (
        <NewsStory key={index} story={story} />
      ))}
    </div>
  );
};

export default NewsFeed;
