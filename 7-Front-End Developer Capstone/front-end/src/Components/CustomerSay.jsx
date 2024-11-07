import React from 'react'
// import Logo from '../Asset 14@4x.png';
// import something from '../images/something.jpg';
// import BruschettaRezept from '../images/Bruschetta Rezept.jpg';
// import salanty from '../images/salanty.jpg';
// import salad from '../images/salad.jpg';
// import grilledfish from '../images/grilledfish.jpg';
// import lahorekarahi from '../images/lahore_karahi-1693344622456_1200x.jpg';
import review_1 from '../images/1-review.jpeg';
import review_2 from '../images/2-review.jpg';
import review_3 from '../images/3-review.jpeg';
import review_4 from '../images/4-review.jpg';
// import review_5 from '../images/5-review.jpg';

const CustomersSay=()=>{
    const Star=()=>{
        return(
            // <svg width="152" height="86" viewBox="0 0 552 86" fill="none" xmlns="http://www.w3.org/2000/svg">
            //     <path d="M499.662 66.4698L512 57.999L524.337 66.5813L521.106 50.5313L531.975 39.8313L517.679 38.3823L512 23.224L506.321 38.2708L492.025 39.7198L502.894 50.5313L499.662 66.4698ZM487.815 85.0833L494.179 53.7635L472.833 32.6979L501.033 29.9115L512 0.375L522.967 29.9115L551.167 32.6979L529.821 53.7635L536.185 85.0833L512 68.476L487.815 85.0833Z" fill="#1D1B20"/>
            //     <path d="M27.6625 66.4698L40 57.999L52.3375 66.5813L49.1063 50.5313L59.975 39.8313L45.6792 38.3823L40 23.224L34.3208 38.2708L20.025 39.7198L30.8938 50.5313L27.6625 66.4698ZM15.8146 85.0833L22.1792 53.7635L0.833344 32.6979L29.0333 29.9115L40 0.375L50.9667 29.9115L79.1667 32.6979L57.8208 53.7635L64.1854 85.0833L40 68.476L15.8146 85.0833Z" fill="#1D1B20"/>
            //     <path d="M145.663 66.4698L158 57.999L170.338 66.5813L167.106 50.5313L177.975 39.8313L163.679 38.3823L158 23.224L152.321 38.2708L138.025 39.7198L148.894 50.5313L145.663 66.4698ZM133.815 85.0833L140.179 53.7635L118.833 32.6979L147.033 29.9115L158 0.375L168.967 29.9115L197.167 32.6979L175.821 53.7635L182.185 85.0833L158 68.476L133.815 85.0833Z" fill="#1D1B20"/>
            //     <path d="M381.662 66.4698L394 57.999L406.337 66.5813L403.106 50.5313L413.975 39.8313L399.679 38.3823L394 23.224L388.321 38.2708L374.025 39.7198L384.894 50.5313L381.662 66.4698ZM369.815 85.0833L376.179 53.7635L354.833 32.6979L383.033 29.9115L394 0.375L404.967 29.9115L433.167 32.6979L411.821 53.7635L418.185 85.0833L394 68.476L369.815 85.0833Z" fill="#1D1B20"/>
            //     <path d="M263.663 66.4698L276 57.999L288.338 66.5813L285.106 50.5313L295.975 39.8313L281.679 38.3823L276 23.224L270.321 38.2708L256.025 39.7198L266.894 50.5313L263.663 66.4698ZM251.815 85.0833L258.179 53.7635L236.833 32.6979L265.033 29.9115L276 0.375L286.967 29.9115L315.167 32.6979L293.821 53.7635L300.185 85.0833L276 68.476L251.815 85.0833Z" fill="#1D1B20"/>
            // </svg>
            <svg width="130" height="86" viewBox="0 0 460 86" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M206.03 85.0833L212.454 53.7635L190.907 32.6979L219.373 29.9115L230.443 0.375L241.514 29.9115L269.98 32.6979L248.432 53.7635L254.857 85.0833L230.443 68.476L206.03 85.0833Z" fill="#1D1B20"/>
<path d="M396.03 85.0833L402.454 53.7635L380.907 32.6979L409.373 29.9115L420.443 0.375L431.514 29.9115L459.98 32.6979L438.432 53.7635L444.857 85.0833L420.443 68.476L396.03 85.0833Z" fill="#1D1B20"/>
<path d="M16.0298 85.0833L22.4544 53.7635L0.907227 32.6979L29.3733 29.9115L40.4434 0.375L51.5135 29.9115L79.9796 32.6979L58.4323 53.7635L64.857 85.0833L40.4434 68.476L16.0298 85.0833Z" fill="#1D1B20"/>
<path d="M111.03 85.0833L117.454 53.7635L95.9072 32.6979L124.373 29.9115L135.443 0.375L146.514 29.9115L174.98 32.6979L153.432 53.7635L159.857 85.0833L135.443 68.476L111.03 85.0833Z" fill="#1D1B20"/>
<path d="M301.03 85.0833L307.454 53.7635L285.907 32.6979L314.373 29.9115L325.443 0.375L336.514 29.9115L364.98 32.6979L343.432 53.7635L349.857 85.0833L325.443 68.476L301.03 85.0833Z" fill="#1D1B20"/>
</svg>

            
        )
    }
    return(
         <div className='Review_All'>   
    <main className='Main-Special'>
        <div className='Review_Card'> 
            <h5>David</h5> 
            <img className='Customer_pic' src={review_1} alt='customer pic' height={100} width={200}/>
           <Star/>
            <p>Little Lemon is a hidden gem! The ambiance is cozy and perfect for a casual dinner. The Mediterranean dishes are authentic and flavorful. I highly recommend the lamb kebabs and the baklava for dessert.” !Lamb Kebabs</p> 
        </div>
        <div className='Review_Card'> 
            <h5>John</h5> 
            <img className='Customer_pic'  src={review_2} alt='customer pic' height={100} width={200}/>
            <Star/> 
            <p>“I had a wonderful experience at Little Lemon. The staff was friendly and attentive, and the food was outstanding. The Greek salad was fresh and delicious, and the hummus platter was a great starter. Will definitely be coming back!” !Greek Salad</p> 
        </div>
        <div className='Review_Card'> 
            <h5>Alex</h5> 
            <img className='Customer_pic' src={review_3} alt='customer pic' height={100} width={200}/>
            <br/>
            <Star/> 
            <p>This place is fantastic! The menu offers a great variety of Mediterranean dishes, and everything we tried was delicious. The falafel was crispy and flavorful, and the tzatziki sauce was the best I’ve ever had. Highly recommend!” !Falafel</p> 
        </div>
        <div className='Review_Card'> 
            <h5>Mavrik</h5> 
            <img className='Customer_pic'  src={review_4} alt='customer pic' height={100} width={200}/>
            <Star/> 
            <p>Little Lemon is my favorite spot for a relaxed meal with friends. The atmosphere is warm and inviting, making it a perfect place to unwind. The moussaka was absolutely delicious, with layers of eggplant, minced meat, and creamy béchamel sauce that melted in my mouth.</p> 
        </div>
        
    </main>
    </div>   
    )
}
export default CustomersSay