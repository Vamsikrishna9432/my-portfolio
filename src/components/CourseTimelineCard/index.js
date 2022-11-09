// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'

import {
  CoursetitleAndDurationContainer,
  CourseTitle,
  DurationContainer,
  Duration,
  Description,
  TagsListContainer,
  TagListItem,
  TagItem,
} from './styledComponents'

const CourseTimeLineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, tagsList, duration} = courseDetails

  return (
    <>
      <CoursetitleAndDurationContainer>
        <CourseTitle>{courseTitle}</CourseTitle>
        <DurationContainer>
          <AiFillClockCircle color="#171f46" width={20} height={20} />
          <Duration>{duration}</Duration>
        </DurationContainer>
      </CoursetitleAndDurationContainer>
      <Description>{description}</Description>
      <TagsListContainer>
        {tagsList.map(eachTag => (
          <TagListItem key={eachTag.id}>
            <TagItem>{eachTag.name}</TagItem>
          </TagListItem>
        ))}
      </TagsListContainer>
    </>
  )
}

export default CourseTimeLineCard
