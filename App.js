import Card_detail from './card_detail';
import List_head from './List_head';
const head=[{type:'FREE',price:'$0'},{type:'PLUS',price:'$9'},{type:'PRO',price:'$49'}]
function App() {
  return (
    
    <div className="App">
  
                 {
                head.map((elem,index)=>{
                    return<List_head key={index} type={elem.type} price={elem.price}  />
                })
            }
           
    </div>
    
  );
}

export default App;
