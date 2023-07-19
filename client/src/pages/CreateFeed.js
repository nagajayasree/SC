import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Editor from '../Editor';

export default function CreateFeed() {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [files, setFiles] = useState('');
    const [content, setContent] = useState('');
    const [redirect, setRedirect] = useState(false);

    async function createPost(event) {
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('file', files[0]);
        data.set('content', content);

        event.preventDefault();
        const response = await fetch('http://localhost:4000/post', {
            method: 'POST',
            body: data,
            credentials: 'include',
        });
        if (response.ok) {
            setRedirect(true)
        }
    }

    if (redirect) {
        return <Navigate to={'/'} />
    }

    return (
        <form onSubmit={createPost}>
            <input
                type='title'
                placeholder="Title"
                value={title}
                onChange={e => setTitle(e.target.value)} />
            <input
                type='summary'
                placeholder="Summary"
                value={summary}
                onChange={e => setSummary(e.target.value)} />
            <input
                type='file'
                onChange={e => setFiles(e.target.files)} />
            <Editor value={content} onChange={setContent} />
            <button style={{ marginTop: '25px' }}>Create Feed</button>
        </form>
    )
}