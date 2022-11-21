import PostsList from './features/posts/PostsList';
import AddPostForm from './features/posts/AddPostForm';

function App() {
  return (
    <main className='container'>
      <AddPostForm />
      <PostsList />
    </main>
  );
}

export default App;
