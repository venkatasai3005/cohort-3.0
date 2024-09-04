

const { Command } = require('commander');
const program = new Command();
const fs = require('fs');
const path = require('path');

// File path to store todos
const filePath = path.join(__dirname, 'todos.json');

// Load existing todos or initialize an empty array
let todos = [];
if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf8');
    todos = JSON.parse(data);
}

// Save todos to the file
const saveTodos = () => {
    fs.writeFileSync(filePath, JSON.stringify(todos, null, 2));
};

// Add a new todo
program
    .command('add <task>')
    .description('Add a new todo')
    .action((task) => {
        todos.push({ task, done: false });
        saveTodos();
        console.log(`Added: "${task}"`);
    });

// Delete a todo
program
    .command('delete <task>')
    .description('Delete a todo')
    .action((task) => {
        todos = todos.filter(todo => todo.task !== task);
        saveTodos();
        console.log(`Deleted: "${task}"`);
    });

// Mark a todo as done
program
    .command('done <task>')
    .description('Mark a todo as done')
    .action((task) => {
        const todo = todos.find(todo => todo.task === task);
        if (todo) {
            todo.done = true;
            saveTodos();
            console.log(`Marked as done: "${task}"`);
        } else {
            console.log(`Todo not found: "${task}"`);
        }
    });

// List all todos
program
    .command('list')
    .description('List all todos')
    .action(() => {
        console.log("Your todos:");
        todos.forEach((todo, index) => {
            console.log(`${index + 1}. [${todo.done ? 'x' : ' '}] ${todo.task}`);
        });
    });

program.parse(process.argv);
