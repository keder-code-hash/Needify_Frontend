import * as React from 'react'; 
import Timeline from '@mui/lab';
import TimelineItem from '@mui/lab';
import {TimelineSeparator,TimelineConnector} from '@mui/lab';
import TimelineContent from '@mui/lab';
import TimelineDot from '@mui/lab';

export default function PrevHistory() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Secondary</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="success" />
        </TimelineSeparator>
        <TimelineContent>Success</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}