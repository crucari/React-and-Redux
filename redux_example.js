Const { createStore } = Redux;


Const initState = {
      Todos: [ ];
      Posts: [ ]
}

Function myreducer(state = initState, action){
//console.log(action, state) //
If (action.type == ‘ADD_TODO’) {
     Return {
        Todos: [... state.todos, action.todo]]

//updating the state.
//This return represents the new state of the store.
//This does not update the state directly.
//We want to be non-destructive.
//The new array is spread
//so we get individual elements out of the state,
//and then we want to add the new element
//which in this case is action.to do.
//The new todo is now added to the todos property//
}
}
}


Const store = createStore(myreducer);

Const todoAction = { type: ‘ADD_TODO’, todo: ‘buy milk’ } //creates an action: has a type property(describes what it does) + optional load of date(in this case called todo, with a string passed as the value//


store.dispatch(todoAction)



store.dispatch(todoAction) //this dispatches the action
