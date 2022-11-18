import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import { addPost } from './postsSlice';

const AddPostForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
  });

  const dispatch = useDispatch();

  const { title, content } = formData;

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && content) {
      dispatch(
        addPost({
          id: nanoid(),
          title,
          content,
        }),
      );
    }

    setFormData({ title: '', content: '' });
  };

  return (
    <section>
      <h2>Add a New Post</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='title'>Post Title:</label>
        <input
          type='text'
          id='title'
          name='title'
          value={title}
          onChange={handleChange}
        />

        <label htmlFor='content'>Content:</label>
        <textarea
          name='content'
          id='content'
          value={content}
          onChange={handleChange}
        ></textarea>

        <button type='submit'>Save</button>
      </form>
    </section>
  );
};

export default AddPostForm;
