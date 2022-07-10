export default {
    port: 3000,
    async fetch(request: Request) {
        const result = await fetch('https://jsonplaceholder.typicode.com/todos');
        const todos = await result.json();
        return new Response(`${JSON.stringify(todos)}`);
    },
};
