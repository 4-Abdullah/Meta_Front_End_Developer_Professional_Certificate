function RoutineTask(){
    const time=new Date()
    const day=time.toLocaleString("en-PK",{weekday:"long"})
    const morning=time.getHours()>=6 && time.getHours()<=19
    let dayMessage;
    if(day==='Monday'){
        dayMessage=`Happy ${day}`;
    }else if(day==='Tuesday'){
        dayMessage=`Happy${day}, four days to go`;
    }else if(day==='Wednesday'){
        dayMessage=`Happy${day}, half way there`;
    }else if(day==='Thursday'){
        dayMessage=`Happy${day}, start planning the weekend`;
    }else if(day==='Friday'){
        dayMessage=`Woo - hoo, the weekend is coming!`;
    }else{
        dayMessage="Stay calm and keep having fun";
    }

    return(
        <div className="App">
                <h1>{dayMessage}</h1>
                {morning?<h2>Have you had breakfast yet?</h2>:''}
        </div>
    )
}
export default RoutineTask;