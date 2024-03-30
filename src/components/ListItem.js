import axios from "axios";
import { Link } from "react-router-dom";
import {  useSelector } from "react-redux";


function ListItem(props) {
    var user = useSelector(store=>store.auth.user);

    function deleteMed() {
        axios.delete('https://medicalstore.mashupstack.com/api/medicine/'+props.medicine.id,
        {
            headers:{'Authorization':"Bearer "+ user.token}
         }).then(response=>{
            alert(response.data.message)
            props.refresh()
        })
    }
    return <>
    
              
                    <td> {props.medicine.name} </td>
                    <td> {props.medicine.company} </td>
                    <td> {props.medicine.expiry_date} </td>
                    <td>
                    <Link to={"/medicines/"+props.medicine.id+"/edit"} className="btn btn-outline-info">Edit</Link>
                    </td>
                    <td>
                    <Link to={"/medicines/"+props.medicine.id+"/view"} className="btn btn-outline-info">View</Link>
                    </td>
                    <td>
                    <button className="btn btn-outline-secondary " onClick={deleteMed}>Delete</button>
                    </td>
              
        
        {/* <Link to={"/blog/posts/"+props.post.id} className="btn btn-info float-right">View</Link> */}
    </>

}
export default ListItem;