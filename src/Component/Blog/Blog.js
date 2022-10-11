import React from 'react';

const Blog = () => {
    return (
        <div>
            <div>
                <h1>What is The purpose of React Router?</h1>
                <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
            </div>
            <div>
                <h1>How does context API works?</h1>
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
        </div>
    );
};

export default Blog;