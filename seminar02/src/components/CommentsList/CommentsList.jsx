import './CommentsList.scss';
import React from 'react';

const CommentList = () => {
	const [newComment, setNewComment] = React.useState('');
	const [comments, setComments] = React.useState([
		{ id: 1, text: 'Это первый комментарий' },
		{ id: 2, text: 'Это второй комментарий' },
		{ id: 3, text: 'Это третий комментарий' },
		{ id: 4, text: 'Это четвертый комментарий' },
	]);

	const handleCommentInput = ({ target }) => {
		setNewComment(target.value);
	};

	const addComment = (e) => {
		e.preventDefault();

		if (newComment.trim() === '') {
			alert('Проверьте правильность ввода');
			return;
		}

		const lastId = comments[comments.length - 1]?.id ?? 0;
		setComments([...comments, { id: lastId + 1, text: newComment }]);
		setNewComment('');
	};

	const removeComment = React.useCallback(
		(id) => {
			setComments(comments.filter((comment) => comment.id !== id));
		},
		[comments]
	);

	return (
		<div className="comments">
			<div className="comments-list">
				{comments.map(({ id, text }) => (
					<div className="comment-box" key={id}>
						<p className="comment">{text}</p>
						<button className="btn-remove" onClick={() => removeComment(id)}></button>
					</div>
				))}
			</div>

			<form className="new-comment" action="#" onSubmit={addComment}>
				<textarea className="comment-text" onChange={handleCommentInput} value={newComment} rows="5" placeholder="Ваш комментарий..." id="newComment"></textarea>
				<button className="comment-add">Добавить</button>
			</form>
		</div>
	);
};

export default CommentList;
