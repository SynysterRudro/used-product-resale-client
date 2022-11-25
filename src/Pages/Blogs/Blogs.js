import React from 'react';

const Blogs = () => {
    return (
        <div className='my-20'>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
                    <p className="mt-4 mb-8 dark:text-gray-400">There are some Questions and answers given which is provided by jhanakar sir.</p>
                    <div className="space-y-4">
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What are the different ways to manage a state in a React application?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                                There are four main types of state you need to properly manage in your React apps: <br />
                                1- Local state - Local state is data we manage in one or another component.<br />
                                2- Global state - Global state is data we manage across multiple components.<br />
                                3- Server state - Data that comes from an external server that must be integrated with our UI state.<br />
                                4- URL state - Data that exists on our URLs, including the pathname and query parameters.
                            </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">How does prototypical inheritance work?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">All constructor functions in JavaScript have a special property called prototype, which works with the new operator. The reference to the prototype object is copied to the internal [[Prototype]] property of the new instance. For example, when you do const a1 = new A(), JavaScript (after creating the object in memory and before running function A() with this defined to it) sets a1.[[Prototype]] = A.prototype. When you then access properties of the instance, JavaScript first checks whether they exist on that object directly, and if not, it looks in [[Prototype]]. [[Prototype]] is looked at recursively, i.e. a1.doSomething, Object.getPrototypeOf(a1).doSomething, Object.getPrototypeOf(Object.getPrototypeOf(a1)).doSomething etc., until it's found or Object.getPrototypeOf returns null. This means that all properties defined on prototype are effectively shared by all instances, and you can even later change parts of prototype and have the changes appear in all existing instances. </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What is a unit test? Why should we write unit tests?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                                Unit Testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.
                                <br />
                                Unit Testing is important because software developers sometimes try saving time doing minimal unit testing and this is myth because inappropriate unit testing leads to high cost Defect fixing during System Testing, Integration Testing and even Beta Testing after application is built. If proper unit testing is done in early development, then it saves time and money in the end.
                            </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">React vs. Angular vs. Vue?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                                <strong>AngularJS-</strong> Angular, developed by Google, was first released in 2010, making it the oldest of the lot. It is a TypeScript-based JavaScript framework. A substantial shift occurred in 2016 on the release of Angular 2 (and the dropping of the “JS” from the original name - AngularJS). Angular 2+ is known as just Angular. Although AngularJS (version 1) still gets updates, we will focus the discussion on Angular.
                                <br />
                                <strong>VueJS-</strong> Vue, also known as Vue.js, is the youngest member of the group. It was developed by ex-Google employee Evan You in 2014. Over the last several years, Vue has seen a substantial shift in popularity, even though it doesn't have the backing of a large company. The most current version is always announced on the official Vue website on their releases page. Contributors for Vue are supported by Patreon. It should be noted that Vue also has its own GitHub repo, and functions using TypeScript.
                                <br />
                                <strong> ReactJs-</strong> React, developed by Facebook, was initially released in 2013. Facebook uses React extensively in their products (Facebook, Instagram, and WhatsApp). Similar to Vue, the React developers also announce their newest version on the blog section of the React website.
                            </p>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blogs;