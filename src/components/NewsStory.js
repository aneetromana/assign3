import React from 'react';

const NewsStory = ({ story }) => {
  const { image_url, original_link, title, author, description } = story;

  return (
    <div className="news-story">
      <img src={image_url || 'default-placeholder.png'} alt={title} />
      <h2><a href={original_link} target="_blank" rel="noopener noreferrer">{title}</a></h2>
      <p className="author">By: {author}</p>
      <p className="description">{description}</p>
    </div>
  );
};

export default NewsStory;
