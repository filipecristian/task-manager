let tasks = [];

function create(title, description, status) {
    const task = {
        id: Date.now(),
        title: title,
        description: description,
        status: status
    };

    tasks.push(task);

    return task;
}

function find(status) {
    if (!status) return tasks;
    
    return tasks.filter((task) => task.status === status);
}

function clean() {
    tasks = [];
}



module.exports = { create, find, clean };