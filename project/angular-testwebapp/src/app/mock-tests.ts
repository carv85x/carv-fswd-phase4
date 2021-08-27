import { Test } from "./Test";

export const TESTS: Test[] = [
    // Mock Test 1    
    {
        id: 1,
        name: 'Front-end Development',
        questions: [
            // Question 1
            {
                id: 1,
                question: 'Which of the following features is found in Typescript?',
                answers: [
                    // Answer 1
                    {id:'a', answer: 'Run-time checking'},
                    // Answer 2
                    {id:'b', answer: 'Functional programming'},
                    // Answer 3
                    {id:'c', answer: 'Static-Typing'}
                ],
                // Set id of correct answer
                correctAnswer: 'c'
            },

            // Question 2
            {
                id: 2,
                question: 'What are the building blocks of Angular applications?',
                answers: [
                     // Answer 1
                     {id:'a', answer: 'Components'},
                     // Answer 2
                     {id:'b', answer: 'Functions'},
                     // Answer 3
                     {id:'c', answer: 'Objects'}
                ],
                // Set it as index of correct answer
                correctAnswer: 'a'
            },

            // Question 3
            {
                id: 3,
                question: 'Which of the following CSS commands is used to align text?',
                answers: [
                    // Answer 1
                    {id:'a', answer: 'alignment'},
                    // Answer 2
                    {id:'b', answer: 'text-align'},
                    // Answer 3
                    {id:'c', answer: 'align-text'}
                ],
                // Set it as index of correct answer
                correctAnswer: 'b'
            }
        ]
    },

    // Mock Test 2    
    {
        id: 2,
        name: 'Java',
        questions: [
            // Question 1
            {
                id: 1,
                question: 'Java is a(n) ________ programming language',
                answers: [
                    // Answer 1
                    {id:'a', answer: 'Object-Oriented'},
                    // Answer 2
                    {id:'b', answer: 'Functional'},
                    // Answer 3
                    {id:'c', answer: 'Dynamically-typed'}
                ],
                // Set it as index of correct answer
                correctAnswer: 'a'
            },

            // Question 2
            {
                id: 2,
                question: 'What feature was added to Java in Java 8?',
                answers: [
                    // Answer 1
                    {id:'a', answer: 'Classes'},
                    // Answer 2
                    {id:'b', answer: 'Catching Multiple Exceptions'},
                    // Answer 3
                    {id:'c', answer: 'Lambda Expressions'}
                ],
                // Set it as index of correct answer
                correctAnswer: 'c'
            },

            // Question 3
            {
                id: 3,
                question: 'What is garbage collection in Java?',
                answers: [
                    // Answer 1
                    {id:'a', answer: 'It refers to how Java cleans deprecated code'},
                    // Answer 2
                    {id:'b', answer: 'It refers to how the JVM automatically recycles unused memory'},
                    // Answer 3
                    {id:'c', answer: 'It refers to a feature in Java that automatically cleans invalid jar files'}
                ],
                // Set it as index of correct answer
                correctAnswer: 'b'
            }
        ]
    }
];