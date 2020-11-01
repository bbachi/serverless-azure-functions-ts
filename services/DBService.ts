export class DBService {

    private data =  {
        todos: [
          {
            id: 1,
            task: 'task1',
            assignee: 'assignee1000',
            status: 'completed'
          },
          {
            id: 2,
            task: 'task2',
            assignee: 'assignee1001',
            status: 'completed'
          },
          {
            id: 3,
            task: 'task3',
            assignee: 'assignee1002',
            status: 'completed'
          },
          {
            id: 4,
            task: 'task4',
            assignee: 'assignee1000',
            status: 'completed'
          },
          
        ]
      };

      getToDos() : any {
        return this.data.todos;
      }

      addToDo(task) {
        task.id = this.data.todos.length + 1;
        this.data.todos.push(task);
        return {
            message: "task added",
            tasks: this.data.todos.length
        }
      }

      deleteToDos(id) {
        this.data.todos = this.data.todos.filter(todo => todo.id != id)
        return {
            message: "task deleted",
            tasks: this.data.todos.length
        }
      }

      editTodos(task): any {
        this.data.todos = this.data.todos.map(todo => {
            if (todo.id === task.id) todo = task;
            return todo;
        });
        return {
            message: "task edited",
            tasks: this.data.todos.length
        }
    }

}