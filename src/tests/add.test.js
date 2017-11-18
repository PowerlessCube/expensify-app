const add = (a, b) => a + b;

const generateGreeting = (name) => `Hello ${name}!`;

test('should add two numbers', () => {
    // result we want to test
    const result = add(3, 4);
    // Expectation on what the result should be - it will either pass or fail.
    expect(result).toBe(7);
});

test('Should greet with name', () => {
    const greet = generateGreeting('Alistair');
    expect(greet).toBe('Hello Alistair!');
});