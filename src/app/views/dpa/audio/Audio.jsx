import { Container } from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'
const AudioRoot = styled('div')(() => ({

}))

class Audio extends React.Component{


    render(){
        return(
            <AudioRoot>
                <Container>
                    <p>Audio</p>
                </Container>
            </AudioRoot>
        )
    }

}

export default Audio