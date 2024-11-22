// src/components/CommentList.jsx
import React, { useEffect, useState } from 'react';
import CommentService from '../api/CommentService';

function CommentList({ refresh }) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const loadComments = async () => {
            const data = await CommentService.getAll();
            console.log(comments);
            setComments(data);
        };
        loadComments();
    }, [refresh]);

    return (
        <div>
            <h2>Ваши комментарии:</h2>
            {comments.length > 0 ? (
                <ul>
                    {comments.map((comment) => (
                        <li key={comment.id}>
                            <strong>{comment.name}:</strong> {comment.comment}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Комментариев пока нет.</p>
            )}
        </div>
    );
}

export default CommentList;
