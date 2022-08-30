import {FC} from 'react'
import Loading from 'src/app/components/Loading'
import styled from 'styled-components'

// - (done) User can see Nasdaq logo centered on the screen
// - (done) User can see the developer's name at the bottom of the screen

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.img`
  width: 250px;
  margin-top: 30vh;
`

const DeveloperName = styled.div`
  color: #fff;
  font-size: 16px;
  margin-bottom: 10vh;
  text-align: center;
  display: inline-block;
  opacity: 0.7;
`

const SplashScreen: FC = () => {
  return (
    <Wrapper>
      <Logo src="nasdaq.png" />

      <Loading />

      <DeveloperName>
        By.
        <br />
        <b>Ahmed Al Ansaary</b>
      </DeveloperName>
    </Wrapper>
  )
}

export default SplashScreen
