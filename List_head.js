import Card_detail from './card_detail';
import './Listhead.css';
const head=[{type:'FREE',price:'$0'},{type:'PLUS',price:'$9'},{type:'PRO',price:'$49'}]
function List_head(pro){
    return(
        <div className='box'>
       
            <h5 className="type">{pro.type}</h5>
            <h6 className="type1">{pro.price}<span className="period">/month</span></h6>
            <hr></hr>

            <Card_detail fil={pro.price} />
            
        
            </div>
        
    )
}
export default List_head;