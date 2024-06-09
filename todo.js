#! /usr/bin/env node
import inquirer from "inquirer";
let todo_list = [];
let while_condition = true;
//option......
while (while_condition) {
    let options = await inquirer.prompt([{
            type: "list",
            name: "user_name",
            message: "select an option",
            choices: ["Add", "remove"]
        }]);
    //add........
    if (options.user_name === "Add") {
        let ans = await inquirer.prompt([{
                type: "input",
                name: "user_ans",
                message: "write somthing to add in the task list"
            }]);
        if (ans.user_ans !== '') {
            todo_list.push(ans.user_ans);
            console.log(todo_list);
        }
        else {
            console.log("please write something to add in the todo list");
        }
    }
    //remove......
    else if (options.user_name === "remove") {
        let ans_remove = await inquirer.prompt([{
                type: "list",
                name: "remove_name",
                message: "slect item to remove",
                choices: todo_list
            }]);
        let index_remove = todo_list.indexOf(ans_remove.remove_name);
        if (index_remove >= 0) {
            todo_list.splice(index_remove, 1);
            console.log("you removed:", ans_remove.remove_name);
            console.log(todo_list);
        }
    }
    //coformation.......
    let user_ans = await inquirer.prompt([{
            type: 'confirm',
            name: 'slection',
            message: 'do you want to cotinue?',
            default: false
        }]);
    while_condition = user_ans.slection;
}
console.log(`Thank you for using to do list`);
