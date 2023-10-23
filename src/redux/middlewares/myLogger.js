import rootReducer from "../RootReducer";

const myLogger = (store) => (next) =>(action)=>{
    console.log(`Action: ${JSON.stringify(action)}`);
    console.log(`Before: ${JSON.stringify(store.getState())}`);

    const UpcomingState = [action].reduce(rootReducer,store.getState())
    console.log(`Upcoming State: ${JSON.stringify(UpcomingState)}`)
    return next(action)
}   
export default myLogger;