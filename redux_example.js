Const { createStore } = Redux;


Const initState = {
      Todos: [ ];
      Posts: [ ]
}




Function myreducer(state = initState, action){
If (action.type == ‘ADD_TODO’) {
     return {
        Todos: [... state.todos, action.todo]]  //updating the state.
}
}


If (action.type == ‘ADD_POST’) {
     return {
        posts: [... state.todos, action.todo]]  //updating the state.
}
}

}


Const store = createStore(myreducer);


store.subscribe((  ) => {
   console.log(‘state updated’);
   console.log(store.getState( ));


})
Const todoAction = { type: ‘ADD_TODO’, todo: ‘buy milk’ }


store.dispatch(type: ‘ADD_TODO’, todo: ‘buy milk’});
store.dispatch(type: ‘ADD_TODO’, todo: ‘sleep some more’});
store.dispatch(type: ‘ADD_TODO’, post: ‘Egg hunt with yoshi’’});


store.dispatch(todoAction) //this dispatches the action
