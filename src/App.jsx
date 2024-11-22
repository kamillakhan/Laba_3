import React, { useState } from 'react';
import CommentForm from './components/CommentForm';
import CommentList from './components/CommentList';
import './styles.css';


function App() {
    const [refresh, setRefresh] = useState(false);

    // Функция для обновления списка комментариев после добавления нового
    const handleCommentAdded = () => {
        setRefresh(!refresh);
    };

    return (
        <>
                <CommentList refresh={refresh}/>
                <CommentForm onCommentAdded={handleCommentAdded}/>
        </>
    );
}

export default App;