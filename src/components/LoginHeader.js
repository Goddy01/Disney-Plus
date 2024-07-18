import React from 'react'
import styled from 'styled-components'


function LoginHeader() {
  return (
    <Header>
      <Logo src="/images/logo.svg" />
      <LoginButton>
        Login
      </LoginButton>
      </Header>
  )
}

export default LoginHeader

const Logo = styled.img`
width: 80px;
position: absolute;
left: 30px;
`

const Header = styled.div`
  padding: 20px;
  background-color: #04040B;
  width: 100%;
  height: 80px;
`

const LoginButton = styled.div`
  position: absolute;
  ${'' /* top: 10px; */}
  right: 10px;
  padding: 10px 20px;
  ${'' /* opacity: 0.6; */}
  font-weight: 600;
  color: #fff;
  border-radius: 5px;
  border: 2px solid #fff;
  text-transform: uppercase;


`