// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component{

    state={
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
                resolution: '1080p'
            }
        }
    }


    handleBirate =() =>{

        this.setState({
            settings:{
                ...this.state.settings,
                bitrate : 12
            }
        } ) 
    }


    handleResolution =() =>{
        
        this.setState({
            settings: {
                ...this.state.settings,
                video:{
                    ...this.state.settings.video,
                    resolution: '720p'
                }
            }
        })
    }




    render(){
        console.log(this.state)
        return(
            <div>
                <button className="bitrate" onClick={this.handleBirate}> bitrate</button>
                
                <button className="resolution" onClick={this.handleResolution}> resolution</button>

            </div>
        )
    }
}

export default YouTubeDebugger