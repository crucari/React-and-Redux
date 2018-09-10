Const { createStore } = Redux;


Const initState = {
      Todos: [ ];
      Posts: [ ]
}

Function myreducer(state = initState, action){
console.log(action, state)

}


Const store = createStore(myreducer);

Const todoAction = { type: ‘ADD_TODO’, todo: ‘buy milk’ } //creates an action: has a type property(describes what it does) + optional load of date(in this case called todo, with a string passed as the value//


store.dispatch(todoAction)



store.dispatch(todoAction) //this dispatches the action
