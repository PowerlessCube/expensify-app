const add = (a, b) => a + b;

const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

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

test('Should generate greeting with no name', () => {
    const greeting = generateGreeting();
    expect(greeting).toBe('Hello Anonymous!');
});