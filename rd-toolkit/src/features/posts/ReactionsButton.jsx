import { useDispatch } from 'react-redux';
import { addReaction } from './postsSlice';

const reactionsEmoji = {
  thumbsUp: '👍',
  wow: '😮',
  heart: '💖',
  rocket: '🚀',
  coffee: '☕',
};

const ReactionsButton = ({ post }) => {
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionsEmoji).map(
    ([name, emoji]) => (
      <button
        key={name}
        type='button'
        className='reactionButton'
        onClick={() =>
          dispatch(addReaction({ postId: post.id, reaction: name }))
        }
      >
        {emoji} {post.reactions[name]}
      </button>
    ),
  );

  return <div>{reactionButtons}</div>;
};

export default ReactionsButton;
