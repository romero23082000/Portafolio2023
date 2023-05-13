import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const TimeLines = (props) => {
  const { data } = props;

  return (
    <Timeline position="alternate">
      {data.map((item, index) => {
        return (
          <TimelineItem key={item.id}>
            <TimelineSeparator>
              <TimelineDot
                sx={{
                  margin: 0,
                  backgroundColor: "#9032bb",
                }}
              />
              {index != data.length - 1 && (
                <TimelineConnector sx={{ backgroundColor: "#9032bb" }} />
              )}
            </TimelineSeparator>
            <TimelineContent sx={{ padding: "6px 16px" }}>
              <Typography sx={{ fontWeight: 700 }}>{item.title}</Typography>
              <Typography
                sx={{ fontSize: "12px", fontWeight: 700, color: "#aba4a4" }}
              >
                {item.cargo}
              </Typography>
              <Typography
                sx={{ fontSize: "12px", fontWeight: 700, color: "#aba4a4" }}
              >
                {item.year}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
};

export default TimeLines;
