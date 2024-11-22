// src/components/CommentForm.jsx
import React, { useState } from 'react';
import CommentService from '../api/CommentService';

function CommentForm({ onCommentAdded }) {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [response, setResponse] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await CommentService.create({ name, comment });
        setResponse(data);
        setName('');
        setComment('');
        onCommentAdded();
    };

    return (
        <div>
            <h2>Оставьте комментарий</h2>
            <form onSubmit={handleSubmit} className="comment-form">
                <input
                    type="text"
                    placeholder="Ваше имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <textarea
                    placeholder="Ваш комментарий"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
                <button type="submit">Отправить</button>
            </form>
            {response && <p>{response.message}</p>}
        </div>
    );
}

export default CommentForm;
