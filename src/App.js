import React, { useState } from 'react';
import './App.css';

const placeholderImage = 'https://media.cnn.com/api/v1/images/stellar/prod/181115180453-01-mars-best-moments-mars-globe-valles-marineris-enhanced.jpg?q=w_2500,h_1406,x_0,y_0,c_fill';

const initialStories = [
  {
    image_url: 'https://media.cnn.com/api/v1/images/stellar/prod/181115180453-01-mars-best-moments-mars-globe-valles-marineris-enhanced.jpg?q=w_2500,h_1406,x_0,y_0,c_fill',
    link: 'https://example.com/story1',
    author: 'John Doe',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    image_url: 'https://media.cnn.com/api/v1/images/stellar/prod/181115180453-01-mars-best-moments-mars-globe-valles-marineris-enhanced.jpg?q=w_2500,h_1406,x_0,y_0,c_fill',
    link: 'https://example.com/story2',
    author: 'Jane Smith',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    image_url: 'https://via.placeholder.com/150',
    link: 'https://example.com/story3',
    author: 'Alice Johnson',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  },
  {
    image_url: 'https://via.placeholder.com/150',
    link: 'https://example.com/story4',
    author: 'Bob Williams',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    image_url: 'https://via.placeholder.com/150',
    link: 'https://example.com/story5',
    author: 'Eve Brown',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

const Story = ({ id, image_url, link, author, description, onDelete }) => (
  <div className="story">
    <img src={image_url || placeholderImage} alt="Story thumbnail" />
    <div className="info">
      <h3><a href={link} target="_blank" rel="noopener noreferrer">{description}</a></h3>
      <p>By {author}</p>
      {}
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  </div>
);

const App = () => {

  const [currentStories, setCurrentStories] = useState(initialStories);


  const deleteStory = (id) => {
    setCurrentStories(currentStories.filter((story, index) => index !== id));
  };

  return (
    <div className="app">
      <h1>News Feed</h1>
      <div className="news-feed">
        {currentStories.map((story, index) => (
     
          <Story key={index} id={index} {...story} onDelete={deleteStory} />
        ))}
      </div>
    </div>
  );
}

export default App;
