import React, {Component} from 'react'; 
import {Timeline, TimelineItem} from 'vertical-timeline-component-for-react'; 

class HighSchoolTimeline extends Component {
    // A month is 90 pixels, a day is 3 pixel padding top
    render() {
        return (
            <Timeline>
                <TimelineItem
                    key="001"
                    dateText="September 2017"
                    dateInnerStyle={{background: "#37b042"}}
                    style={{color: "#37b042"}}
                >
                    <h3>Beginning of Grade 8</h3>
                </TimelineItem>
                <TimelineItem
                    key="002"
                    dateText="November 2017"
                    dateInnerStyle={{background: "#37b042"}}
                    style={{color: "#37b042", paddingTop: "180px"}}
                >
                    <h3>COMC 1st Attempt</h3>
                    <ul style={{listStylePosition: "inside", paddingLeft: "0"}}>
                        <li>Scored 7/80</li>
                    </ul>
                    <h3>CIMC 1st Attempt</h3>
                    <ul style={{listStylePosition: "inside", paddingLeft: "0"}}>
                        <li>Scored 32/60</li>
                    </ul>
                </TimelineItem>
                <TimelineItem
                    key="003"
                    dateText="December 2017"
                    dateInnerStyle={{background: "#37b042"}}
                    style={{color: "#37b042", paddingTop: "90px"}}
                >
                    <h3>Grouse Mountain LIT Program</h3>
                    <ul style={{listStylePosition: "inside", paddingLeft: "0"}}>
                        <li>1st season</li>
                        <li style={{marginTop: "4px"}}>Volunteered for a total of 88 hours until April 2018</li>
                    </ul>
                </TimelineItem>
                <TimelineItem
                    key="004"
                    dateText="February 2018"
                    dateInnerStyle={{background: "#37b042"}}
                    style={{color: "#37b042", paddingTop: "180px"}}
                >
                    <h3>Math Challengers Fraser Valley Regional Competition</h3>
                    <ul style={{listStylePosition: "inside", paddingLeft: "0"}}>
                        <li>Part of the Grade 8 B Team</li>
                        <li style={{marginTop: "4px"}}>Scored 21/50</li>
                        <li style={{marginTop: "4px"}}>Did not place in top 10 but was moved to A Team</li>
                    </ul>
                </TimelineItem>
                <TimelineItem
                    key="005"
                    dateText="March 2018"
                    dateInnerStyle={{background: "#37b042"}}
                    style={{color: "#37b042", paddingTop: "90px"}}
                >
                    <h3>Math Challengers BC Provincial Competition</h3>
                    <ul style={{listStylePosition: "inside", paddingLeft: "0"}}>
                        <li>Part of the Grade 8 A Team</li>
                        <li style={{marginTop: "4px"}}>Scored 28/50</li>
                    </ul>
                    <h3>Grade 8 Badminton Team</h3>
                    <ul style={{listStylePosition: "inside", paddingLeft: "0"}}>
                        <li>Passed the tryouts and made the team</li>
                    </ul>
                </TimelineItem>
                <TimelineItem
                    key="006"
                    dateText="May 2018"
                    dateInnerStyle={{background: "#37b042"}}
                    style={{color: "#37b042", paddingTop: "180px"}}
                >
                    <h3>Grade 8 Gauss Contest</h3>
                    <ul style={{listStylePosition: "inside", paddingLeft: "0"}}>
                        <li>Scored 142/150</li>
                        <li style={{marginTop: "4px"}}>2nd in school</li>
                    </ul>
                </TimelineItem>
                <TimelineItem
                    key="007"
                    dateText="June 2018"
                    dateInnerStyle={{background: "#37b042"}}
                    style={{color: "#37b042", paddingTop: "90px"}}
                >
                    <h3>Math 8 School Award</h3>
                    <ul style={{listStylePosition: "inside", paddingLeft: "0"}}>
                        <li>Outstanding achievement in Math 8</li>
                    </ul>
                    <h3>Sea Cadets Promotion to Master Seaman</h3>
                </TimelineItem>
                <TimelineItem
                    key="008"
                    dateText="September 2018"
                    dateInnerStyle={{background: "#0097fe"}}
                    style={{color: "#0097fe", paddingTop: "270px"}}
                >
                    <h3>Beginning of Grade 9</h3>
                    <h3 style={{marginTop: "16px"}}>Kumon Math Tutor</h3>
                    <ul style={{listStylePosition: "inside", paddingLeft: "0"}}>
                        <li>Started work as a math tutor at Kumon Walnut Grove</li>
                        <li style={{marginTop: "4px"}}>Worked 4 hours every Thursday</li>
                    </ul>
                </TimelineItem>
                <TimelineItem
                    key="009"
                    dateText="October 2018"
                    dateInnerStyle={{background: "#0097fe"}}
                    style={{color: "#0097fe", paddingTop: "90px"}}
                >
                    <h3>Completed Kumon Reading Program</h3>
                </TimelineItem>
                <TimelineItem
                    key="010"
                    dateText="November 2018"
                    dateInnerStyle={{background: "#0097fe"}}
                    style={{color: "#0097fe", paddingTop: "90px"}}
                >
                    <h3>COMC 2nd Attempt</h3>
                    <ul style={{listStylePosition: "inside", paddingLeft: "0"}}>
                        <li>Scored 27/80</li>
                    </ul>
                    <h3>CIMC 2nd Attempt</h3>
                    <ul style={{listStylePosition: "inside", paddingLeft: "0"}}>
                        <li>Scored 36/60</li>
                    </ul>
                </TimelineItem>
                <TimelineItem
                    key="011"
                    dateText="December 2018"
                    dateInnerStyle={{background: "#0097fe"}}
                    style={{color: "#0097fe", paddingTop: "90px"}}
                >
                    <h3>Grouse Mountain LIT Program</h3>
                    <ul style={{listStylePosition: "inside", paddingLeft: "0"}}>
                        <li>2nd season</li>
                        <li style={{marginTop: "4px"}}>Volunteered for more than 80 hours until April 2019</li>
                    </ul>
                </TimelineItem>
                <TimelineItem
                    key="012"
                    dateText="January 2019"
                    dateInnerStyle={{background: "#0097fe"}}
                    style={{color: "#0097fe", paddingTop: "90px"}}
                >
                    <h3>City of Surrey Special Events Volunteer</h3>
                    <ul style={{listStylePosition: "inside", paddingLeft: "0"}}>
                        <li>Passed orientation and officially became a City of Surrey volunteer</li>
                    </ul>
                </TimelineItem>
                <TimelineItem
                    key="013"
                    dateText="February 2019"
                    dateInnerStyle={{background: "#0097fe"}}
                    style={{color: "#0097fe", paddingTop: "90px"}}
                >
                    <h3>Math Challengers Fraser Valley Regional Competition</h3>
                    <ul style={{listStylePosition: "inside", paddingLeft: "0"}}>
                        <li>Part of the Grade 9 A Team</li>
                        <li style={{marginTop: "4px"}}>Scored 31/50</li>
                        <li style={{marginTop: "4px"}}>Won individual 7th place</li>
                        <li style={{marginTop: "4px"}}>Won team 1st place</li>
                    </ul>
                    <h3>Pascal Contest</h3>
                    <ul style={{listStylePosition: "inside", paddingLeft: "0"}}>
                        <li>Scored 118/150</li>
                    </ul>
                    <h3>AMC 10 1st Attempt</h3>
                    <ul style={{listStylePosition: "inside", paddingLeft: "0"}}>
                        <li>Scored 24/150</li>
                    </ul>
                </TimelineItem>
                <TimelineItem
                    key="014"
                    dateText="March 2019"
                    dateInnerStyle={{background: "#0097fe"}}
                    style={{color: "#0097fe", paddingTop: "90px"}}
                >
                    <h3>Math Challengers BC Provincial Competition</h3>
                    <ul style={{listStylePosition: "inside", paddingLeft: "0"}}>
                        <li>Part of the Grade 9 A Team</li>
                        <li style={{marginTop: "4px"}}>Scored 35/50</li>
                    </ul>
                    <h3>Junior Badminton Team</h3>
                    <ul style={{listStylePosition: "inside", paddingLeft: "0"}}>
                        <li>Passed the tryouts and made the team</li>
                    </ul>
                </TimelineItem>
                <TimelineItem
                    key="015"
                    dateText="April 2019"
                    dateInnerStyle={{background: "#0097fe"}}
                    style={{color: "#0097fe", paddingTop: "90px"}}
                >
                    <h3>Accepted to SIMUW 2019</h3>
                </TimelineItem>
                <TimelineItem
                    key="016"
                    dateText="May 2019"
                    dateInnerStyle={{background: "#0097fe"}}
                    style={{color: "#0097fe", paddingTop: "90px"}}
                >
                    <h3>Certified Standard First Aid & CPR/AED Level C</h3>
                    <h3 style={{marginTop: "16px"}}>AP Computer Science A Exam</h3>
                    <ul style={{listStylePosition: "inside", paddingLeft: "0"}}>
                        <li>Scored 5/5</li>
                    </ul>
                </TimelineItem>
                <TimelineItem
                    key="017"
                    dateText="June 2019"
                    dateInnerStyle={{background: "#0097fe"}}
                    style={{color: "#0097fe", paddingTop: "90px"}}
                >
                    <h3>Science School Award</h3>
                    <ul style={{listStylePosition: "inside", paddingLeft: "0"}}>
                        <li>Excellence in science</li>
                    </ul>
                    <h3>English 9 School Award</h3>
                    <ul style={{listStylePosition: "inside", paddingLeft: "0"}}>
                        <li>Excellence in English 9</li>
                    </ul>
                    <h3>Sea Cadets Promotion to Petty Officer 2nd Class</h3>
                    <h3 style={{marginTop: "16px"}}>SIMUW 2019</h3>
                    <ul style={{listStylePosition: "inside", paddingLeft: "0"}}>
                        <li>Attended a summer math camp from June 30 to August 10</li>
                    </ul>
                </TimelineItem>
                <TimelineItem
                    key="018"
                    dateText="September 2019"
                    dateInnerStyle={{background: "red"}}
                    style={{color: "red", paddingTop: "270px"}}
                >
                    <h3>Beginning of Grade 10</h3>
                </TimelineItem>
                <TimelineItem
                    key="019"
                    dateText="November 2019"
                    dateInnerStyle={{background: "red"}}
                    style={{color: "red", paddingTop: "180px"}}
                >
                    <h3>COMC 3rd Attempt</h3>
                    <ul style={{listStylePosition: "inside", paddingLeft: "0"}}>
                        <li>Scored 32/80</li>
                    </ul>
                    <h3>CIMC 3rd Attempt</h3>
                    <ul style={{listStylePosition: "inside", paddingLeft: "0"}}>
                        <li>Scored 48/60</li>
                        <li style={{marginTop: "4px"}}>Achieved Group V Honour Roll</li>
                    </ul>
                </TimelineItem>
                <TimelineItem
                    key="020"
                    dateText="December 2019"
                    dateInnerStyle={{background: "red"}}
                    style={{color: "red", paddingTop: "90px"}}
                >
                    <h3>Grouse Mountain LIT Program</h3>
                    <ul style={{listStylePosition: "inside", paddingLeft: "0"}}>
                        <li>3rd and final season</li>
                        <li style={{marginTop: "4px"}}>Volunteered for 80 hours until March 2020</li>
                    </ul>
                    <h3>CSIA Level 1 Course</h3>
                    <ul style={{listStylePosition: "inside", paddingLeft: "0"}}>
                        <li>Passed teaching component but did not pass skiing component</li>
                    </ul>
                </TimelineItem>
                <TimelineItem
                    key="021"
                    dateText="February 2020"
                    dateInnerStyle={{background: "red"}}
                    style={{color: "red", paddingTop: "180px"}}
                >
                    <h3>Math Challengers Fraser Valley Regional Competition</h3>
                    <ul style={{listStylePosition: "inside", paddingLeft: "0"}}>
                        <li>Part of the Grade 10 A Team</li>
                        <li style={{marginTop: "4px"}}>Scored 34/50</li>
                        <li style={{marginTop: "4px"}}>Won individual 5th place</li>
                        <li style={{marginTop: "4px"}}>Won team 1st place</li>
                    </ul>
                    <h3>Cayley Contest</h3>
                    <ul style={{listStylePosition: "inside", paddingLeft: "0"}}>
                        <li>Scored 130/150</li>
                    </ul>
                    <h3>AMC 10 2nd Attempt</h3>
                    <ul style={{listStylePosition: "inside", paddingLeft: "0"}}>
                        <li>Scored 75/150</li>
                    </ul>
                    <h3>CSIA Level 1 Course Retake</h3>
                    <ul style={{listStylePosition: "inside", paddingLeft: "0"}}>
                        <li>Passed skiing component</li>
                        <li style={{marginTop: "4px"}}>Certified CSIA Level 1</li>
                    </ul>
                </TimelineItem>
                <TimelineItem
                    key="022"
                    dateText="May 2020"
                    dateInnerStyle={{background: "red"}}
                    style={{color: "red", paddingTop: "270px"}}
                >
                    <h3>AP Physics 1 Exam</h3>
                    <ul style={{listStylePosition: "inside", paddingLeft: "0"}}>
                        <li>Scored 5/5</li>
                    </ul>
                    <h3>AP Physics 2 Exam</h3>
                    <ul style={{listStylePosition: "inside", paddingLeft: "0"}}>
                        <li>Scored 5/5</li>
                    </ul>
                    <h3>AP Calculus BC Exam</h3>
                    <ul style={{listStylePosition: "inside", paddingLeft: "0"}}>
                        <li>Scored 5/5</li>
                    </ul>
                </TimelineItem>
                <TimelineItem
                    key="023"
                    dateText="July 2020"
                    dateInnerStyle={{background: "red"}}
                    style={{color: "red", paddingTop: "180px"}}
                >
                    <h3>BC Driving Knowledge Test</h3>
                    <ul style={{listStylePosition: "inside", paddingLeft: "0"}}>
                        <li>Passed and received Learner's Licence</li>
                    </ul>
                </TimelineItem>
                <TimelineItem
                    key="024"
                    dateText="September 2020"
                    dateInnerStyle={{background: "purple"}}
                    style={{color: "purple", paddingTop: "180px"}}
                >
                    <h3>Beginning of Grade 11</h3>
                    <h3 style={{marginTop: "16px"}}>Completed Kumon Math Program</h3>
                    <ul style={{listStylePosition: "inside", paddingLeft: "0"}}>
                        <li>First person in Kumon Walnut Grove to complete both Kumon programs</li>
                    </ul>
                </TimelineItem>
                <TimelineItem
                    key="025"
                    dateText="November 2020"
                    dateInnerStyle={{background: "purple"}}
                    style={{color: "purple", paddingTop: "180px"}}
                >
                    <h3>COMC 4th Attempt</h3>
                    <ul style={{listStylePosition: "inside", paddingLeft: "0"}}>
                        <li>Score pending</li>
                    </ul>
                    <h3>CSMC 1st Attempt</h3>
                    <ul style={{listStylePosition: "inside", paddingLeft: "0"}}>
                        <li>Score pending</li>
                    </ul>
                    <h3>SAT Subject Test Mathematics Level 2</h3>
                    <ul style={{listStylePosition: "inside", paddingLeft: "0"}}>
                        <li>Scored 800/800</li>
                    </ul>
                    <h3>SAT Subject Test Physics</h3>
                    <ul style={{listStylePosition: "inside", paddingLeft: "0"}}>
                        <li>Scored 800/800</li>
                    </ul>
                </TimelineItem>
                <TimelineItem
                    key="026"
                    dateText="January 2021"
                    dateInnerStyle={{background: "purple"}}
                    style={{color: "purple", paddingTop: "180px", opacity: "0.6"}}
                >
                    <h3>MLH Explorer Fellowship</h3>
                    <ul style={{listStylePosition: "inside", paddingLeft: "0"}}>
                        <li>Accepted to Major League Hacking's Explorer Fellowship Program</li>
                    </ul>
                </TimelineItem>
                <TimelineItem
                    key="027"
                    dateText="February 2021"
                    dateInnerStyle={{background: "purple"}}
                    style={{color: "purple", paddingTop: "90px", opacity: "0.6"}}
                >
                    <h3>Fermat Contest</h3>
                    <ul style={{listStylePosition: "inside", paddingLeft: "0"}}>
                        <li>Scored at least 142/150</li>
                    </ul>
                    <h3>AMC 12 1st Attempt</h3>
                    <ul style={{listStylePosition: "inside", paddingLeft: "0"}}>
                        <li>Scored at least 100/150</li>
                        <li style={{marginTop: "4px"}}>Invited to AIME</li>
                    </ul>
                </TimelineItem>
                <TimelineItem
                    key="028"
                    dateText="March 2021"
                    dateInnerStyle={{background: "purple"}}
                    style={{color: "purple", paddingTop: "90px", opacity: "0.6"}}
                >
                    <h3>AIME 1st Attempt</h3>
                    <ul style={{listStylePosition: "inside", paddingLeft: "0"}}>
                        <li>Scored at least 5/15</li>
                    </ul>
                </TimelineItem>
                <TimelineItem
                    key="029"
                    dateText="April 2021"
                    dateInnerStyle={{background: "purple"}}
                    style={{color: "purple", paddingTop: "90px", opacity: "0.6"}}
                >
                    <h3>Euclid Contest 1st Attempt</h3>
                    <ul style={{listStylePosition: "inside", paddingLeft: "0"}}>
                        <li>Scored at least 80/100</li>
                    </ul>
                </TimelineItem>
                <TimelineItem
                    key="030"
                    dateText="May 2021"
                    dateInnerStyle={{background: "purple"}}
                    style={{color: "purple", paddingTop: "90px", opacity: "0.6"}}
                >
                    <h3>SAT</h3>
                    <ul style={{listStylePosition: "inside", paddingLeft: "0"}}>
                        <li>Scored at least 1560/1600</li>
                    </ul>
                    <h3>AP Statistics Exam</h3>
                    <ul style={{listStylePosition: "inside", paddingLeft: "0"}}>
                        <li>Scored 5/5</li>
                    </ul>
                    <h3>AP Physics C: Electricity and Magnetism Exam</h3>
                    <ul style={{listStylePosition: "inside", paddingLeft: "0"}}>
                        <li>Scored 5/5</li>
                    </ul>
                    <h3>AP Physics C: Mechanics Exam</h3>
                    <ul style={{listStylePosition: "inside", paddingLeft: "0"}}>
                        <li>Scored 5/5</li>
                    </ul>
                </TimelineItem>
                <TimelineItem
                    key="031"
                    dateText="June 2021"
                    dateInnerStyle={{background: "purple"}}
                    style={{color: "purple", paddingTop: "90px", opacity: "0.6"}}
                >
                    <h3>Science Club Executive</h3>
                    <ul style={{listStylePosition: "inside", paddingLeft: "0"}}>
                        <li>Passed interview and became a Science Club senior executive</li>
                    </ul>
                    <h3>Coding Club Executive</h3>
                    <ul style={{listStylePosition: "inside", paddingLeft: "0"}}>
                        <li>Passed interview and became a Coding Club senior executive</li>
                    </ul>
                </TimelineItem>
                <TimelineItem
                    key="032"
                    dateText="July 2021"
                    dateInnerStyle={{background: "purple"}}
                    style={{color: "purple", paddingTop: "90px", opacity: "0.6"}}
                >
                    <h3>BC Driving Road Test</h3>
                    <ul style={{listStylePosition: "inside", paddingLeft: "0"}}>
                        <li>Passed and received Novice Licence</li>
                    </ul>
                </TimelineItem>
                <TimelineItem
                    key="033"
                    dateText="September 2021"
                    dateInnerStyle={{background: "hotpink"}}
                    style={{color: "hotpink", paddingTop: "180px", opacity: "0.6"}}
                >
                    <h3>Beginning of Grade 12</h3>
                </TimelineItem>
                <TimelineItem
                    key="034"
                    dateText="November 2021"
                    dateInnerStyle={{background: "hotpink"}}
                    style={{color: "hotpink", paddingTop: "180px", opacity: "0.6"}}
                >
                    <h3>COMC 5th Attempt</h3>
                    <ul style={{listStylePosition: "inside", paddingLeft: "0"}}>
                        <li>Scored at least 60/80</li>
                    </ul>
                    <h3>CSMC 2nd Attempt</h3>
                    <ul style={{listStylePosition: "inside", paddingLeft: "0"}}>
                        <li>Scored at least 50/60</li>
                    </ul>
                </TimelineItem>
                <TimelineItem
                    key="035"
                    dateText="December 2021"
                    dateInnerStyle={{background: "hotpink"}}
                    style={{color: "hotpink", paddingTop: "90px", opacity: "0.6"}}
                >
                    <h3>Grouse Mountain Part Time Ski Instructor</h3>
                    <ul style={{listStylePosition: "inside", paddingLeft: "0"}}>
                        <li>Hired as a part time ski instructor at Grouse Mountain</li>
                        <li style={{marginTop: "4px"}}>Worked for over 80 hours until April 2022</li>
                    </ul>
                </TimelineItem>
                <TimelineItem
                    key="036"
                    dateText="January - April 2022"
                    dateInnerStyle={{background: "hotpink"}}
                    style={{color: "hotpink", paddingTop: "90px", opacity: "0.6"}}
                >
                    <h3>Accepted into University of Waterloo</h3>
                    <h3 style={{marginTop: "16px"}}>AMC 12 2nd Attempt</h3>
                    <ul style={{listStylePosition: "inside", paddingLeft: "0"}}>
                        <li>Scored at least 120/150</li>
                        <li style={{marginTop: "4px"}}>Invited to AIME</li>
                    </ul>
                    <h3 style={{marginTop: "16px"}}>AIME 2nd Attempt</h3>
                    <ul style={{listStylePosition: "inside", paddingLeft: "0"}}>
                        <li>Scored at least 8/15</li>
                    </ul>
                    <h3 style={{marginTop: "16px"}}>Euclid Contest 2nd Attempt</h3>
                    <ul style={{listStylePosition: "inside", paddingLeft: "0"}}>
                        <li>Scored at least 90/100</li>
                    </ul>
                    {/* <h3>Accepted into University of California Berkeley</h3> THIS WILL HAPPEN*/} 
                </TimelineItem>
                <TimelineItem
                    key="037"
                    dateText="June 2022"
                    dateInnerStyle={{background: "hotpink"}}
                    style={{color: "hotpink", paddingTop: "450px", opacity: "0.6"}}
                >
                    <h3>High School Graduation</h3>
                </TimelineItem>
            </Timeline>
        )
    }
}

export default HighSchoolTimeline; 
