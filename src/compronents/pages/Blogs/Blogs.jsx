import React from 'react';
import { Link } from 'react-router';

const Blogs = () => {
    return (
        <Link to='/Blogs'>
            <div className='w-8/12 mx-auto bg-white rounded-2xl py-7 px-10 my-14'>
                <div className='mt-5'>
                    <div tabIndex={0} className="collapse collapse-plus bg-base-100 border-base-300 border">
                        <div className="collapse-title font-semibold">What is useState and how does it work in React?</div>
                        <div className="collapse-content text-sm">
                            useState is a fundamental React Hook that allows function components to manage and interact with state (data that changes over time) [1, 3]. It provides a way to add statefulness to functional components, which were previously stateless.
                        </div>
                    </div>
                </div>

                <div className='mt-5'>
                    <div tabIndex={0} className="collapse collapse-plus bg-base-100 border-base-300 border">
                        <div className="collapse-title font-semibold">What is the purpose of useEffect in React?</div>
                        <div className="collapse-content text-sm">
                            The useEffect Hook in React allows you to perform side effects in functional components. Side effects are operations that reach outside the normal flow of the component's rendering process and synchronize your component with external systems.
                        </div>
                    </div>
                </div>

                <div className='mt-5'>
                    <div tabIndex={0} className="collapse collapse-plus bg-base-100 border-base-300 border">
                        <div className="collapse-title font-semibold">What is a custom hook in React and when should you use one?</div>
                        <div className="collapse-content text-sm">
                            Custom hooks follow the standard rules of hooks: they must be called at the top level of a function component or another custom hook, and they cannot be called inside loops, conditions, or nested functions [1, 3].
                        </div>
                    </div>


                </div>


                <div className='mt-5'>
                    <div tabIndex={0} className="collapse collapse-plus bg-base-100 border-base-300 border">
                        <div className="collapse-title font-semibold">Difference between controlled and uncontrolled components? Which one is better?</div>
                        <div className="collapse-content text-sm">
                            There is no single "better" option; the choice depends on your specific requirements. However, controlled components are generally the recommended standard for most React applications.
                        </div>

                    </div>
                </div>
                <div className='mt-5'>
                    <div tabIndex={0} className="collapse collapse-plus bg-base-100 border-base-300 border">
                        <div className="collapse-title font-semibold">Tell us something about useFormStatus() (explore and explain)</div>
                        <div className="collapse-content text-sm">
                            To display a pending state while a form is submitting, you can call the useFormStatus Hook in a component rendered in a (form) and read the pending property returned.
                        </div>
                    </div>
                </div>

            </div>
        </Link>

    );
};

export default Blogs;