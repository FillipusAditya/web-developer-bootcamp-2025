const myTodo = ["Basketball", "Swimming", "Hiking"];
const validUserPrompt = ["new", "list", "delete", "quit"];

let userPrompt = prompt("What would you like to do?").toLowerCase();
let userIsLogin;

while (!validUserPrompt.includes(userPrompt)) {
    userPrompt = prompt(
        "The Prompt is Not Valid. Please Type Again !"
    ).toLowerCase();
}

if (userPrompt === "quit") {
    console.log("OK, YOU QUIT THE APP!");
} else {
    userIsLogin = true;
}

while (userIsLogin) {
    if (userPrompt === "new") {
        const addToDo = prompt("Add New To Do");

        myTodo.push(addToDo);

        console.log(`${addToDo} added to list`);
    } else if (userPrompt === "list") {
        console.log("===================");

        for (const [index, values] of myTodo.entries()) {
            console.log(`${index} : ${values}`);
        }

        console.log("===================");
    } else if (userPrompt === "delete") {
        const indexToDelete = parseInt(prompt("Enter Index of list to delete"));

        if (!Number.isNaN(indexToDelete)) {
            const todoRemoved = myTodo.splice(indexToDelete, 1);

            console.log(`${todoRemoved} has been removed from list`);

            console.log("===================");

            for (const [index, values] of myTodo.entries()) {
                console.log(`${index} : ${values}`);
            }

            console.log("===================");
        } else {
            console.log("Unknown Index");
        }
    } else if (userPrompt === "quit") {
        userIsLogin = false;
        console.log("OK, YOU QUIT THE APP!");
        break;
    } else {
        userPrompt = prompt(
            "The Prompt is Not Valid. Please Type Again !"
        ).toLowerCase();
    }
    userPrompt = prompt("What would you like to do?").toLowerCase();
}
