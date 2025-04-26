import React, { useState, useEffect } from 'react';

const BlogPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Simulate blog data fetching
    }, 100); // 1 second delay for loading effect

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-16 h-16 border-4 border-blue-400 border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-extrabold text-center mb-12">React Development Blog</h1>

      <div className="space-y-12">
        {/* Blog 1: What is useState and how does it work in React? */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            What is useState and how does it work in React?
          </h2>
          <p className="text-gray-600">
            `useState` is a hook in React that allows you to add state to your functional components. 
            Before React introduced hooks, state was only available in class components. With `useState`, 
            you can define a state variable and update it without needing a class-based component. 
            The `useState` hook returns an array with two elements: the current state value and a function to update it.
          </p>
          <pre className="bg-gray-100 p-4 mt-4 rounded-md">
            <code className="text-gray-700">
              {`import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0); // Declare state variable and setter function

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};`}
            </code>
          </pre>
        </div>

        {/* Blog 2: What is the purpose of useEffect in React? */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            What is the purpose of useEffect in React?
          </h2>
          <p className="text-gray-600">
            `useEffect` is a hook in React used for handling side effects in functional components. 
            Side effects include data fetching, DOM manipulations, setting up subscriptions, 
            and manually changing the state. `useEffect` runs after every render by default, but 
            you can specify conditions to limit when it runs (e.g., only when a certain state or prop changes).
          </p>
          <pre className="bg-gray-100 p-4 mt-4 rounded-md">
            <code className="text-gray-700">
              {`import React, { useState, useEffect } from 'react';

const Example = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []); // Empty dependency array ensures it runs only once after initial render

  return <div>{data ? JSON.stringify(data) : 'Loading...'}</div>;
};`}
            </code>
          </pre>
        </div>

        {/* Blog 3: What is a custom hook in React and when should you use one? */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            What is a custom hook in React and when should you use one?
          </h2>
          <p className="text-gray-600">
            A custom hook is a JavaScript function that allows you to reuse logic across multiple components. 
            It is a way to abstract and share functionality in React. Custom hooks start with the word `use`, 
            making it clear they follow the rules of hooks. You should use custom hooks when you find yourself 
            repeating logic across multiple components or when you want to separate concerns in your code.
          </p>
          <pre className="bg-gray-100 p-4 mt-4 rounded-md">
            <code className="text-gray-700">
              {`import { useState, useEffect } from 'react';

const useFetchData = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [url]);

  return data;
};`}
            </code>
          </pre>
        </div>

        {/* Blog 4: Difference between controlled and uncontrolled components. Which one is better? */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Difference between controlled and uncontrolled components. Which one is better?
          </h2>
          <p className="text-gray-600">
            In React:
            <ul className="list-disc pl-5">
              <li><strong>Controlled components:</strong> The form elements (e.g., input, select, textarea) 
                are controlled by React state. The value of the form element is set by the state, and changes 
                are handled by an event handler.</li>
              <li><strong>Uncontrolled components:</strong> The form elements manage their own state internally, 
                and React does not directly control the form state. You can use refs to interact with them.</li>
            </ul>
            Which one is better depends on the use case. Controlled components are often preferred 
            for simpler use cases and better control over the form's state. However, uncontrolled components 
            may be better for performance in certain situations (e.g., large forms with frequent updates).
          </p>
        </div>

        {/* Blog 5: Tell us something about useFormStatus() in React */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Tell us something about useFormStatus() in React
          </h2>
          <p className="text-gray-600">
            `useFormStatus()` is a hook introduced in React 18 to simplify form submission status handling. 
            It provides information about the current state of a form, such as whether it's in a submitting, 
            idle, or submitting-error state. It makes it easier to manage form state and trigger actions 
            during form submission (e.g., showing loading indicators or error messages).
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
