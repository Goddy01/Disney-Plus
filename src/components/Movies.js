import React from 'react'
import styled from 'styled-components'


function Movies() {
  return (
    <Container>
      <h5>Recommended for You</h5>
      <Content>
        <Wrap>
            <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D96236855864673BEFAC61AFC7BF68FCE9F503036836578F2876548FA274AA67/scale?width=630&aspectRatio=1.78&format=webp' />
        </Wrap>
        <Wrap>
            <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4B4F9CCDF2716AB0AD6560F27FA303EA7912E7D0B2F6EAF3E433F65D5079155B/scale?width=630&aspectRatio=1.78&format=webp' />
        </Wrap>
        <Wrap>
            <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F1529209E9793D2669BF4CD63A915A3D3BEF1595BEF2C45B4CFCF55A1315382B/scale?width=630&aspectRatio=1.78&format=webp' />
        </Wrap>
        <Wrap>
            <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A13BC173D649D864DC8BC7264B0302DB68778D6C49F96C1103A48706A6A2BC60/scale?width=630&aspectRatio=1.78&format=webp' />
        </Wrap>
        <Wrap>
            <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D96236855864673BEFAC61AFC7BF68FCE9F503036836578F2876548FA274AA67/scale?width=630&aspectRatio=1.78&format=webp' />
        </Wrap>
        <Wrap>
            <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4B4F9CCDF2716AB0AD6560F27FA303EA7912E7D0B2F6EAF3E433F65D5079155B/scale?width=630&aspectRatio=1.78&format=webp' />
        </Wrap>
        <Wrap>
            <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F1529209E9793D2669BF4CD63A915A3D3BEF1595BEF2C45B4CFCF55A1315382B/scale?width=630&aspectRatio=1.78&format=webp' />
        </Wrap>
        <Wrap>
            <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A13BC173D649D864DC8BC7264B0302DB68778D6C49F96C1103A48706A6A2BC60/scale?width=630&aspectRatio=1.78&format=webp' />
        </Wrap>
      </Content>
    </Container>
  )
}

export default Movies

const Container = styled.div`
    padding: 20px;
`

const Content = styled.div`
    display: grid;
    grid-gap: 35px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    margin-bottom: 20px;
`

const Wrap = styled.div`
    overflow: hidden;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px;
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    border: 3px solid rgba(249, 249, 249, 0.1);
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    cursor: pointer;
    
    &:hover {
        transform: scale(1.04);
        border-color: rgba(249, 249, 249, 0.8);
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -16px;
        rgba(0 0 0 / 72%) 0px 30px 22px -16px;
    }


    img {
        width: 100%;
        height: 100%;
        object-fit: cover;

    }
`