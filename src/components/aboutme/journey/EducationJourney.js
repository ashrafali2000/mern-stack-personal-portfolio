import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import SchoolIcon from "@mui/icons-material/School";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import Flip from "react-reveal/Flip";

function EducationJourney() {
  return (
    <div className="mt-5">
      <div>
        <Link className="btn btn-primary m-1" to="/educationjourney">
          Educational Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/experiencejourney">
          Experience Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/technicaljourney">
          Technical Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/projectjourney">
          Project Journey
        </Link>
      </div>
      <div className="mt-5">
        <Flip top cascade>
          <h1>Qualification Journey</h1>
        </Flip>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{  backgroundColor: "rgb(52, 153, 111)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2004 - 2014"
          iconStyle={{  backgroundColor: "rgb(52, 153, 111)", color: "#fbd9ad" }}
          icon={<SchoolIcon />}
        >
          <h4 className="vertical-timeline-element-title">
            SECONDARY SCHOOL CERTIFICATE
          </h4>
          <h4 className="vertical-timeline-element-subtitle mt-2">
          Government High School Killi Ismail Kakozai.
          </h4>
          <p>
            Studied here from Class 1 to 10th as a part of secondary school
            Certificate and gain GPA 5 in my SSC Examination.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{  backgroundColor: "rgb(52, 153, 111)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2014 - 2018"
          iconStyle={{  backgroundColor: "rgb(52, 153, 111)", color: "#fbd9ad" }}
          icon={<SchoolIcon />}
        >
          <h4 className="vertical-timeline-element-title">
            INTERMEDIATE IN (ICS)
          </h4>
          <h4 className="vertical-timeline-element-subtitle mt-2">
            Al-Beruni Intermediate college Ahsan Abad Karachi.
          </h4>
          <p>
            Studied Inter in Computer Technology from Karachi 
             and gain CGPA 2.98.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{  backgroundColor: "rgb(52, 153, 111)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2019 - 2023"
          iconStyle={{  backgroundColor: "rgb(52, 153, 111)", color: "#fbd9ad" }}
          icon={<SchoolIcon />}
        >
          <h4 className="vertical-timeline-element-title">GRADUATION</h4>
          <h4 className="vertical-timeline-element-subtitle mt-2">
            FUUAST University, Karachi Pakistan
          </h4>
          <p>
            Studied Bachelor of Science degree in Computer Science and
            Engineering field from FUUAST University and gain CGPA 3.44.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default EducationJourney;
