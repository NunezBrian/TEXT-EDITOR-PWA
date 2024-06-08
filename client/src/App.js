import React, { useState, useEffect } from 'react';
import { saveContent, getContent } from './idb';
import './index.css';

const App = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const savedContent = await getContent();
      if (savedContent) {
        setContent(savedContent);
      }
    };
    fetchData();
  }, []);

  const handleContentChange = (event) => {
    setContent(event.target.value);
    saveContent(event.target.value);
  };

  return (
    <div className="app">
      <div className="header">Just Another Text Editor</div>
      <textarea
        className="text-editor"
        value={content}
        onChange={handleContentChange}
      ></textarea>
    </div>
  );
};

export default App;
