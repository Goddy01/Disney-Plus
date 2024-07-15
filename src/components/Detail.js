import React from 'react'
import styled from 'styled-components'

function Detail() {
  return (
    <Container>
      <Background>
        <img src='https://ca-times.brightspotcdn.com/dims4/default/279d5f5/2147483647/strip/true/crop/3555x2000+0+0/resize/1200x675!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ffb%2Fb0%2F3e0905964bb2b37cb4aeb607ad5d%2F158949-0480.jpg'/>
      </Background>
      <ImageTitle>
        <img src='/images/spidey_ui.png' />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src='/images/play-icon-black.png' />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src='/images/play-icon-white.png' />
          <span>TRAILER</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src='/images/group-icon.png' />
          <span></span>
        </GroupWatchButton>
      </Controls>
      <Subtitle>
      Subtitle text
      </Subtitle>
      <Description>
      lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
      lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
      lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
      </Description>
    </Container>
  )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 80px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.5;
    }
`

const ImageTitle = styled.div`
    padding: 10px;
    height: 30vh;
    width: 35vw;
    min-height: 170px;
    min-width: 200px;
    ${'' /* margin-bottom: 10px; */}
    margin-top: 5%;


    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
`

const Controls = styled.div`
  ${'' /* margin-left: 80px; */}
  display: flex;
  align-items: center;
  ${'' /* flex-direction: row; */}
`

const PlayButton = styled.button`
  display: flex;
  padding: 7px 15px;
  align-items: center;
  font-weight: 600;
  border-radius: 5px;
  margin-right: 10px;
  border: none;
  background-color: rgb(249, 249, 249);
  letter-spacing: 2px;

  &:hover {
    background-color: rgb(160, 160, 160)
  }
`

const TrailerButton = styled(PlayButton)`
  color: rgb(249, 249, 249);
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  
`

const AddButton = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 2px solid #fff;
  background-color: rgba(0, 0, 0, 0.6);
  margin-right: 16px;

  span {
    color: #fff;
    font-size: 30px;
  }
`

const GroupWatchButton = styled(AddButton)`
  background-color: rgb(0, 0, 0);
`

const Subtitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`

const Description = styled.div`
  line-height: 1.4;
  color: rgb(249, 249, 249);
  font-size: 20px;
  margin-top: 16px;
  max-width: 70vw;
`