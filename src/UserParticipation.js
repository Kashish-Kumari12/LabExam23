import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

function UserParticipation(props) {
    const navigate=useNavigate();
    const [skills, setSkills] = useState([]);
    const [count, setCount]=useState(0);
    
    
    const handleSubmit=()=>{
      
    }
    const handleChange=()=>{
      
    }
   
    return (
        <div>
            <h3>Answer Questions</h3>
           
            <form onSubmit={handleSubmit}>
           
            
           <input type="checkbox" value="JavaScript"/>JavaScript
           <input type="checkbox" value="JavaScript"/>Java
           <input type="checkbox" value="JavaScript"/>Python
           <input type="checkbox" value="JavaScript"/>C#
            <button type="submit" onClick={()=>navigate("thankyou")}>Submit</button>
            </form>
        </div>
    );
}

export default UserParticipation;