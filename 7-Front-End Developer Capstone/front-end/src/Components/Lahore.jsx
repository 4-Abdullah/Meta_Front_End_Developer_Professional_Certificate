import Adrian from '../images/Adrian.jpg';
import Mario from '../images/Mario.jpg';
const Lahore=()=>{
    
    return(
        <main className='About'>
            
            <img  className='About-image-1' src={Mario} alt='Logo'  width={250} height={280}/> 
            <img  className='About-image-2' src={Adrian} alt='Logo' width={250} height={280}/> 
            <h1 className='hero-heading-1'>Little Lemon<br/><div className="hero-heading-2"> Lahore </div>
            </h1>
            <p>
            Adrian and Mario are the passionate co-founders of Little Lemon, a charming Mediterranean restaurant that has become a beloved spot in the community.
Adrian, the head chef, draws inspiration from his Mediterranean roots, infusing traditional recipes with a modern twist.<br/>
Mario, the restaurant’s manager, ensures that every guest feels like part of the family. With years of experience in the hospitality industry, Mario is known for his warm, welcoming demeanor and his ability to create an inviting atmosphere.
            </p>
        </main>
    )
}
export default Lahore