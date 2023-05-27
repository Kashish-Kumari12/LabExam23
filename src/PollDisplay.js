import { spacing } from '@mui/system';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PollDisplay(props) {
    const navigate=useNavigate();
    const [poll,setPoll]=useState({
        "question": "What is your favorite programming language?",

        "choices": [
      
          { "id": 1, "label": "JavaScript", "votes": 0 },
      
          { "id": 2, "label": "Python", "votes": 0 },
      
          { "id": 3, "label": "Java", "votes": 0 },
      
          { "id": 4, "label": "C#", "votes": 0 }
      
      
        ]
    })
    const StartButton=()=>{
        
    }
    return (
        <div>
            <div>
                  <h3>{poll.question}</h3>
                  <div>
                    {poll.choices.map((items)=>(
                        <h3 style={{gap:'1rem', padding:'10px'}}>
                        {items.label}:   
                        {items.votes}
                        </h3>)
                    )}

                  </div>
                  <button onClick={()=>navigate('userParticipate')}>Start</button>
            </div>
        </div>
    );
}

export default PollDisplay;