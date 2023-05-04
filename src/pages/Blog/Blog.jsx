import React from 'react';
import './Blog.css'
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";

const ref = React.createRef()
const Blog = () => {
    return (
        <div className='mt-2'>
            
            <h2 className='text-center'>Blogs</h2>
            <div className='my-10 mx-auto'>
                <h3 className='text-center'>
                    <Pdf targetRef={ref} filename="code-example.pdf">
                        {({ toPdf }) => <button onClick={toPdf} className='btn btn-outline-primary fs-4'>Download PDF</button>}
                    </Pdf>
                </h3>
                <div className='' ref={ref}>
                    <div className='question-container mx-auto my-3 shadow px-4 py-3 rounded'>
                        <h3 className=''>1. What is the differences between uncontrolled and controlled components.?</h3>
                        <p className='px-2'><span style={{ color: 'green' }}>Ans: Controlled components is controlled by react dom itself but the uncontrolled components controlled by its own. So when the controlled components changed or updated react virtual dom managed that. On the other hand uncontrolled components manage itself update itself doesn't follow the react dom. Uncontrolled component follow his parent rule.</span> </p>

                        <h3 className=''>2. How to validate React props using PropTypes?</h3>
                        <p><span style={{ color: 'green' }}>Ans:
                            Proto-Types is type checking library that allows us to check the props that are pass to a component is that in correct formate or not. To use this library first need to install that then import in the component where we want to validate. Then we can check the type of a props from our needs such as if e expect a string from parent we can check them by prototypes is that in correct formate. We can set min max number and many more useful thing.
                        </span>

                        </p>
                        <h3 className=''>2. What is the difference between nodejs and express js.?</h3>
                        <p><span style={{ color: 'green' }}>Ans:
                            Node.js is a library for execution of JavaScript applications external to the browser. It uses V8 engine and allows JavaScript to execute code on local browser or sever side.. On the other hand Express.js is a framework based on nodejs it gives us many feature for building web application such as routing, middleware.
                        </span>

                        </p>
                        <h3 className=''>4. What is a custom hook, and why will you create a custom hook?</h3>
                        <p><span style={{ color: 'green' }}>Ans:
                            Custom Hook is a function that created for reuse logic in many component in a certain context. Custom is hooks are a way to manage components and making them easier to read and maintain.I will create a custom hook for manage code more efficiently it also improve readability of code and we can reuse them for this we don't have to write same thing again and again.
                        </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;