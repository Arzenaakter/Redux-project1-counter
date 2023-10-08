import Buttons from "./Buttons";
import Count from "./Count";

const Counter = ({decrementHandler,incrementHandler,count,id}) => {
  

    return (
                <div
                    className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow"
                >
                   <Count count={count}/>
                    <div className="flex space-x-3">
                       <Buttons handler={()=>incrementHandler(id)}>
                        increment
                        </Buttons>
                       <Buttons handler={()=> decrementHandler(id)}>
                        decrement
                        </Buttons>
                        
                    </div>
                </div>
    );
};

export default Counter;