import ReactPlayer from 'react-player'
function ReactPlay(){
    const videoUrl="https://www.facebook.com/1040664624/videos/1099552251296066/"
    return(
        <div className='ReactPlayer'>
        <ReactPlayer volume={0.5} playing={false} muted={false} width='100%' height='100%' url={videoUrl}/>
        </div>
    )
}
export default ReactPlay