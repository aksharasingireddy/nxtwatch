import styled from 'styled-components'

export const SavedRouteBgCard = styled.div`
  margin-top: 64px;
`

export const SidebarCard = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const SavedVideosBgCard = styled.div`
  min-height: 90vh;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  @media screen and (min-width: 768px) {
    margin-left: 250px;
  }
`

export const SavedVideosCard = styled.div`
  padding-bottom: 40px;
`

export const SavedVideosHeadingCard = styled.div`
  background-color: ${props => (props.isDarkTheme ? ' #383838' : '#ebebeb')};
  display: flex;
  align-items: center;
  padding: 20px;
  margin-bottom: 20px;
`
export const IconBackGroung = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f1f5f9')};
  width: 60px;
  height: 60px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`

export const Icon = styled.div`
  color: #ff0b37;

  height: 30px;
  width: 30px;
`

export const SavedHeading = styled.h1`
  color: #0f0f0f;
  font-size: 19px;
  font-weight: 600;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#0f0f0f')};
`

export const VideosList = styled.ul`
  padding: 0px;
  list-style-type: none;

  @media screen and (min-width: 576px) {
    width: 90%;
    margin: auto;
  }
`

export const NosavedViewCard = styled.div`
  width: 90%;

  margin: auto;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
export const NosavedWidthCard = styled.div``

export const NoSavedImg = styled.img`
  width: 70%;
  max-width: 350px;
`

export const NoSavedHeading = styled.h1`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
  font-size: 22px;
  margin-top: 45px;
  font-weight: 600;
`

export const NoSavedDescription = styled.p`
  color: ${props => (props.isDarkTheme ? '#ebebeb' : '#475569')};
  font-size: 16px;
`
