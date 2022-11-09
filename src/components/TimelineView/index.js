// Write your code here
import {Chrono} from 'react-chrono'

import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'

import {
  TimelineAppContainer,
  ResponsiveContainer,
  HeaderContainer,
  Header,
  CcbpHeader,
} from './styledComponents'

const TimeLineView = props => {
  const {timelineItemsList} = props

  const renderTimelineCard = item => {
    if (item.categoryId === 'PROJECT') {
      return <ProjectTimelineCard key={item.id} projectDetails={item} />
    }
    return <CourseTimelineCard key={item.id} courseDetails={item} />
  }

  return (
    <TimelineAppContainer>
      <ResponsiveContainer>
        <HeaderContainer>
          <Header>
            MY JOURNEY OF <br />
            <CcbpHeader>CCBP 4.0</CcbpHeader>
          </Header>
        </HeaderContainer>
        <Chrono
          theme={{
            secondary: 'white',
          }}
          items={timelineItemsList}
          mode="VERTICAL_ALTERNATING"
        >
          {timelineItemsList.map(eachItem => renderTimelineCard(eachItem))}
        </Chrono>
      </ResponsiveContainer>
    </TimelineAppContainer>
  )
}

export default TimeLineView
