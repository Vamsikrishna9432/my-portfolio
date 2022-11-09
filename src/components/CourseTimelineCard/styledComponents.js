import styled from 'styled-components/macro'

export const CoursetitleAndDurationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const CourseTitle = styled.h1`
  color: #1e293b;
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 700;
  line-height: 1.3;
  margin: 0px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`

export const DurationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Duration = styled.p`
  font-size: 12px;
  color: #1e293b;
  font-family: 'Roboto';
  font-weight: 600;
  margin-left: 10px;
  line-height: 1.2;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`

export const Description = styled.p`
  margin: 0px;
  padding: 0px;
  font-size: 12px;
  font-family: 'Roboto';
  line-height: 1.5;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`

export const TagsListContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 0px;
`

export const TagListItem = styled.li`
  list-style-type: none;
`

export const TagItem = styled.p`
  background-color: #e2e8f0;
  padding: 4px 8px;
  border-radius: 4px;
  color: #25262c;
  font-weight: 600;
  font-family: 'Roboto';
  margin-right: 8px;
  margin-bottom: 8px;
  @media screen and (min-width: 768px) {
    font-size: 12px;
    font-weight: 600;
  }
`
