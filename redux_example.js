Const { createStore } = Redux; //createStore is grabbed from the redux library

Const initState = {
      Todos: [ ];
      Posts: [ ]
}


//const initstate is set equal to an object
Function myreducer(state = initState, action){



}  //myreducer is a function that interacts with the store


//state is the state of the store . When the reducer first interacts with the store, it’s not going to know the state. The state is not going to exists so we have to create an initial state for the store and then when it first starts, it passes that initial state into the store via this reducer and it can set it as that. //


//To pass a default state into the previously named parameter state, we can say the state is equal to the init state so that the first time that this reducer fires it uses the initial state as a default value for the state so then we can pass that in//

Const store = createStore(myreducer); //creates store and this is the reducer that will interact with it//