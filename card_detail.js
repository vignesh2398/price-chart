import './Listhead.css';
function Card_detail(pro2){
    
    return(
        <div className="listcomp">

            <ul>   
                {pro2.fil==='$9' ? <li><b>5 Users</b> </li>: null}
                {pro2.fil==='$49' ? <li><b>Unlimited Users</b> </li>: null}
                <li>Single User</li>
                {pro2.fil==='$0' ? <li>5GB Storage </li>: pro2.fil==='$9' ? <li>50GB Storage </li>: pro2.fil==='$49' ? <li>150GB Storage </li>: null}
                <li>Unlimited Public Projects</li>
                <li>Community Access</li>
                <li >Unlimited Private Projects</li>
                <li>Dedicated Phone Support</li>
                {pro2.fil==='$49' ? <li><b>Unlimited</b> Free Subdomains </li>: <li>Free Subdomain</li>}
                
                <li>Monthly Status Reports</li>
            </ul>
            <button className='button1'> BUTTON  </button>
        </div>
    )
}
export default Card_detail;