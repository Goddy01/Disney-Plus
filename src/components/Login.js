import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src='/images/cta-logo-one.svg' />
        <SignUp href=''>
          GET ALL THERE
        </SignUp>
        <Description>
            Log in to access personalized recommendations, unlimited HD streaming, and your favorite movies and shows on any device.
          </Description>
          <CTALogoTwo src='/images/cta-logo-two.png' />
      </CTA>
    </Container>
  )
}

export default Login

const Container = styled.div`
  position: relative;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:before {
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/images/login-background.jpg");
    background-position: top;
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.6;
    z-index: -1;
  }
`

const CTA = styled.div`
  width: 100%;
  padding: 80px 40px;
  max-width: 650px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 60px;
  align-items: center;
`

const CTALogoOne = styled.img`

`

const SignUp = styled.a`
  display: flex;
  align-items: center;
  width: 100%;
  height: 45px;
  justify-content: center;
  background-color: #0063e5;
  padding: 20px;
  border-radius: 10px;
  font-weight: bold;
  white-space: nowrap;
  letter-spacing: 1.5px;
  border: none;
  text-decoration: none;
  color: #fff;
  transition: all 250ms;
  margin-bottom: 10px;

  &:hover {
    background-color: #0483e5;
  }
`

const Description = styled.div`
  font-weight: 400;
  text-align: center;
  word-spacing: 1.5px;
  margin-bottom: 15px;
`

const CTALogoTwo = styled.img`
  width: 90%;
`