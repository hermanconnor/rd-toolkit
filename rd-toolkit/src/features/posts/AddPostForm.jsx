import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addPost } from './postsSlice';
import { selectAllUsers } from '../users/usersSlice';

const AddPostForm = () => {
  const [userId, setUserId] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    content: '',
  });

  const users = useSelector(selectAllUsers);
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
      dispatch(addPost(title, content, userId));
    }

    setFormData({ title: '', content: '' });
  };

  const handleAuthorChange = (e) => setUserId(e.target.value);

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

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

        <label htmlFor='postAuthor'>Author:</label>
        <select
          name='postAuthor'
          id='postAuthor'
          value={userId}
          onChange={handleAuthorChange}
        >
          <option value=''></option>
          {usersOptions}
        </select>

        <label htmlFor='content'>Content:</label>
        <textarea
          name='content'
          id='content'
          value={content}
          onChange={handleChange}
        ></textarea>

        <button type='submit' disabled={!canSave}>
          Save
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
