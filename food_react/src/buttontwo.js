import React, { useState } from 'react';

let virtualcount = 0;

function VoteButtontwo() {
  let [count, setCount] = useState('MIN');

  const voter = () => {
    virtualcount++;
    if (count === 'MAX'){
        window.alert('Cannot vote more')
    }
    count = virtualcount;
    if (virtualcount >= 10){
        virtualcount = 10
        setCount(count = "MAX")
    }
    else{
        setCount(count)
    }
  };

  const unvoter = () => {
    virtualcount--; 
    if (count === "MIN"){
        window.alert("Cannot unvote")
    }
    count = virtualcount;
    if (virtualcount <= 0){
        virtualcount = 0
        setCount(count = "MIN")
    }
    else{
        setCount(count)
    }
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center',alignItems:"end" }}>
      <button onClick={voter} style={{height:40, textAlign:"center"}}>Click to vote</button>
      <div style={{ textAlign: "center",color:'#8D32D9', backgroundColor:'#33E600',margin:'0px 10px 0px 10px', borderStyle:"solid",borderColor:'black',padding:'10px',fontSize:'30px',borderRadius:'15px'}}><b>{count}</b></div>
      <button onClick={unvoter} style={{height:40, textAlign:"center"}}>Click to unvote</button>
    </div>
  );
}

export default VoteButtontwo;
