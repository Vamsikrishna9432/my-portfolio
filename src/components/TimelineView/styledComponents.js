import styled from 'styled-components/macro'

export const TimelineAppContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 100vh;
`

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1110px;
  height: 100vh;
`
export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`

export const Header = styled.h1`
  text-align: center;
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 600;
  color: #1e293b;
  line-height: 2.7;
  margin: 0px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const CcbpHeader = styled.span`
  color: #171f46;
  padding-top: 25px;
  margin: 0px;
  font-size: 24px;
  text-align: center;
`
