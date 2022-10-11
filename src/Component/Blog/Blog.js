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
            <div>
                <h1>Describe about the REF hook?</h1>
                <p>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly. useRef() only returns one item. It returns an Object called current. When we initialize useRef we set the initial value: useRef(0). The useRef Hook can also be used to keep track of previous state values.</p>
            </div>
        </div>
    );
};

export default Blog;