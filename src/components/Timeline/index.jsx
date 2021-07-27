import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Chips from "../Chips";
import { Typography, useTheme, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  text__primary: {
    // color: theme.palette.secondary.main,
    color: "#fff",
  },
}));
const Timeline = ({ content }) => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <VerticalTimeline>
      {content.map((work, i) => (
        <VerticalTimelineElement
          //   className="vertical-timeline-element--work"
          iconStyle={{
            background: theme.palette.background.secondary,
            color: theme.palette.text.primary,
            textAlign: "center",
          }}
          contentStyle={{
            background: theme.palette.primary.main,
            color: theme.palette.text.secondary,
            borderRadius: "25px",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  #fff",
          }}
          icon={work.icon}
          dateClassName={classes.text__primary}
          date={work.date}
          key={i}
        >
          <Typography
            variant="h4"
            //   className="vertical-timeline-element-title"
          >
            {work.title}
          </Typography>
          <Typography
            variant="body1"
            // className="vertical-timeline-element-subtitle"
          >
            {work.description}
          </Typography>
          <Chips content={work.tools} />
        </VerticalTimelineElement>
      ))}
      <VerticalTimelineElement
        // className="vertical-timeline-element--work"
        iconStyle={{
          background: theme.palette.background.secondary,
          color: theme.palette.text.primary,
          textAlign: "center",
        }}
      />
    </VerticalTimeline>
  );
};

export default Timeline;
