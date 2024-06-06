import ReactPlayer from 'react-player'
function ReactPlay(){
    const videoUrl="https://www.facebook.com/1040664624/videos/1099552251296066/"
    return(
        <ReactPlayer volume={0.5} playing={false} muted={false} width={400} height={200} url={videoUrl}/>
    )
}
export default ReactPlay