import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "@radix-ui/themes/styles.css";
import OpenAI from "openai";
import { Container, Grid, Flex, Heading, Box, Card, Text, Badge, Checkbox } from "@radix-ui/themes";
import ProgressDemo from "./ProgressBar";
import SpiderChart from "./PerformanceChart";
const Recommendations = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [textbooks, setTextbooks] = useState([]);
  const [courses, setCourses] = useState([]);
  const [youtubeLinks, setYoutubeLinks] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [demoFlag, setDemoFlag] = useState(false);
  const [initialDataFlag, setInitialDataFlag] = useState(false);
  const [statisticalData, setStatisticalData] = useState([]);
  const [monthlyGoals, setMonthlyGoals] = useState([]);
  useEffect(() => {
    // Define the async function inside useEffect
    const fetchData = async () => {
      const user = localStorage.getItem("id");
      try {
        const response = await axios.post(
          "https://rxk4239.uta.cloud/openai_student_two.php",
          { user_id: user }
        );
        //  console.log(`response is`, response);

        // set the enrolled courses

        response.data.data.forEach((element) => {
          setEnrolledCourses((enrolledCourses) => {
            // Creating a new array with both course name and course id
            const newCourses = enrolledCourses.map(course => ({
              name: course.name,
              id: course.id, 
              marks: course.marks
            }));
        
            // Adding the new element with course name and course id
            newCourses.push({ name: element.course_name, id: element.course_id, marks: element.marks });
            
            
            // Removing duplicates based on course id
            const uniqueCourses = Array.from(new Map(newCourses.map(course => [course.id, course])).values());
            return uniqueCourses;
          });

        });



      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    
    // Call the async function
    fetchData();
    
  }, []); // Add dependencies here if needed
  // 
  useEffect(() => {
    const fetchStatisticalData = async () => {
      const userid = localStorage.getItem("id");
      try {
        const response = await axios.post(
          "https://rxk4239.uta.cloud/openai_student.php",
          { user_id: userid }
        );
  
        const statisticalData = response.data.data;
  
        setEnrolledCourses((currentCourses) => {
          const updatedCourses = currentCourses.map((course) => {
            // Find the statistical data for this course
            const stats = statisticalData.find(stat => stat.course_id === course.id);
            
            // If found, merge the statistical data with the course data
            return stats ? { ...course, ...stats } : course;
          });
  
          // Log the updated courses to the console
          console.log("Updated Enrolled Courses data is  = : ", updatedCourses);
  
          return updatedCourses;
        });
      } catch (error) {
        console.error("Error fetching statistical data:", error);
      }
    };
  
    fetchStatisticalData();
  }, []); // Ensure this runs only once
  
 // this useEffect hook is to load the initial recommendations based on the statical data 
 useEffect(() => {
  const fetchStatsData = async () => {
    // Check if there are any enrolled courses to process
    if (enrolledCourses.length > 0) {
      // Construct a more readable and clear prompt for OpenAI
      const initialPrompt = `
      I have several courses with their statistics.
       For each course, I need to identify if the student's marks are below the class mean, class maximum, class minimum.
        Here are the courses and their details:\n\n` + 
      enrolledCourses.map(course => 
        `Course: ${course.name}\n` +
        `class Minimum Mark: ${course.minimum}\n` +
        `class Maximum Mark: ${course.maximum}\n` +
        `class Mean Mark: ${course.mean}\n` +
        `Student's Mark: ${course.marks}\n`).join("\n") + 
      `\nBased on this information, you have to identify the name of the course who's marks are less than the class mean and then generate the list of resources for this course, and it should compulsorly include strictly only 2 textbooks, 2 courses, 2 youtube links and 2 blogs, and make sure that link and description is in one single line and provide the shorter url instead of long and use bit.ly links for each`;

      // Your existing OpenAI API call
      const openai = new OpenAI({
        apiKey: "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",
        dangerouslyAllowBrowser: true,
      });
      const chatCompletion = await openai.chat.completions.create({
        messages: [{
          role: "user",
          content: initialPrompt,
        }],
        model: "gpt-3.5-turbo",
      });

      // Process the response from OpenAI
      function parseResponseToJSON(text) {
        let jsonData = {
          textbooks: [],
          courses: [],
          youtubeLinks: [],
          blogs: []
        };
      
        // Regular Expressions for each category
        const textbookRegex = /Textbooks:([\s\S]*?)Courses:/;
        const coursesRegex = /Courses:([\s\S]*?)YouTube Links:/;
        const youtubeRegex = /YouTube Links:([\s\S]*?)Blogs:/;
        const blogsRegex = /Blogs:([\s\S]*)/;
      
        // Extracting Textbooks
        const textbooksMatch = text.match(textbookRegex);
        if (textbooksMatch && textbooksMatch[1]) {
          jsonData.textbooks = textbooksMatch[1].trim().split('\n').map(line => line.trim());
          setTextbooks(jsonData.textbooks);
          console.log(`textbooks are :`, textbooks);
        }
      
        // Extracting Courses
        const coursesMatch = text.match(coursesRegex);
        if (coursesMatch && coursesMatch[1]) {
          jsonData.courses = coursesMatch[1].trim().split('\n').map(line => line.trim());
          setCourses(jsonData.courses);
          console.log(`courses are :`, courses);
        }
      
        // Extracting YouTube Links
        const youtubeMatch = text.match(youtubeRegex);
        if (youtubeMatch && youtubeMatch[1]) {
          jsonData.youtubeLinks = youtubeMatch[1].trim().split('\n').map(line => line.trim());
          setYoutubeLinks(jsonData.youtubeLinks);
          console.log(`youtube links are :`, youtubeLinks);
        }
      
        // Extracting Blogs
        const blogsMatch = text.match(blogsRegex);
        if (blogsMatch && blogsMatch[1]) {
          jsonData.blogs = blogsMatch[1].trim().split('\n').map(line => line.trim());
          setBlogs(jsonData.blogs);
          console.log(`blogs are :`, blogs);
        }
      
        return jsonData;
      }
      const rawText = chatCompletion.choices[0].message.content;
      const jsonData = parseResponseToJSON(rawText);
      console.log(`raw text of the initial recommendations:`, rawText);
    }
  }
  fetchStatsData();
}, [enrolledCourses]); // Depend on enrolledCourses to re-run when they change
  const handleMonthlyGoals = async (course) => {
    console.log(`Monthly goals for is ${course}`);
    const customPrompt = `Your task is to generate a list of exactly 7 todo's of the course topic titles only in single line particularly for this ${course}`
    const openai = new OpenAI({
      apiKey: "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",
      dangerouslyAllowBrowser: true,
    });
    const chatCompletion = await openai.chat.completions.create({
      messages: [
        {
          role: "user",
          content: customPrompt,
        },
      ],
      model: "gpt-3.5-turbo",
    });
    const rawText = chatCompletion.choices[0].message.content;
    const goalsArray = rawText.split('\n').filter(line => line.trim() !== '');
    setMonthlyGoals(goalsArray);
        
    console.log(`raw text of the monthly goals:`, rawText);
  }
  const handleCourse = async(course) => {
  setDemoFlag(true);
  const customPrompt = `Your task is to generate the list of resources for this course : ${course}, and it should compulsorly include strictly only 2 textbooks, 2 courses, 2 youtube links and 2 blogs, and make sure that link and description is in one single line and provide the shorter url instead of long and use bit.ly links for each`;
  const openai = new OpenAI({
    apiKey: "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",
    dangerouslyAllowBrowser: true,
  });
  const chatCompletion = await openai.chat.completions.create({
    messages: [
      {
        role: "user",
        content: customPrompt,
      },
    ],
    model: "gpt-3.5-turbo",
  });

  const rawText = chatCompletion.choices[0].message.content;
  function parseResponseToJSON(text) {
    let jsonData = {
      textbooks: [],
      courses: [],
      youtubeLinks: [],
      blogs: []
    };
  
    // Regular Expressions for each category
    const textbookRegex = /Textbooks:([\s\S]*?)Courses:/;
    const coursesRegex = /Courses:([\s\S]*?)YouTube Links:/;
    const youtubeRegex = /YouTube Links:([\s\S]*?)Blogs:/;
    const blogsRegex = /Blogs:([\s\S]*)/;
  
    // Extracting Textbooks
    const textbooksMatch = text.match(textbookRegex);
    if (textbooksMatch && textbooksMatch[1]) {
      jsonData.textbooks = textbooksMatch[1].trim().split('\n').map(line => line.trim());
      setTextbooks(jsonData.textbooks);
      console.log(`textbooks are :`, textbooks);
    }
  
    // Extracting Courses
    const coursesMatch = text.match(coursesRegex);
    if (coursesMatch && coursesMatch[1]) {
      jsonData.courses = coursesMatch[1].trim().split('\n').map(line => line.trim());
      setCourses(jsonData.courses);
      console.log(`courses are :`, courses);
    }
  
    // Extracting YouTube Links
    const youtubeMatch = text.match(youtubeRegex);
    if (youtubeMatch && youtubeMatch[1]) {
      jsonData.youtubeLinks = youtubeMatch[1].trim().split('\n').map(line => line.trim());
      setYoutubeLinks(jsonData.youtubeLinks);
      console.log(`youtube links are :`, youtubeLinks);
    }
  
    // Extracting Blogs
    const blogsMatch = text.match(blogsRegex);
    if (blogsMatch && blogsMatch[1]) {
      jsonData.blogs = blogsMatch[1].trim().split('\n').map(line => line.trim());
      setBlogs(jsonData.blogs);
      console.log(`blogs are :`, blogs);
    }
  
    return jsonData;
  }
  setDemoFlag(false);
  const jsonData = parseResponseToJSON(rawText);
  console.log(`handle course data is :`, jsonData);


  };
  const handleCheckBox = async(goal) => {
    console.log(`goal selected is ${goal}`);
    const result = monthlyGoals.filter((goal)=>goal !== goal);
    setMonthlyGoals(result);
  };
  
  return (
    <Container style={{marginLeft:0}}>
     <Heading size="8" highContrast color="crimson" align="center" mb="8">Student AI Dashboard</Heading>
    <Grid columns="2" gap="3" width="auto" height="auto">
      {/* Recommendations Section */}
       {/* Enrolled Courses Section */}
       <Flex direction="column" gap="3" align="center">
        
        <Box height="auto" width="300">
          <Heading color="indigo" size="7">
            Enrolled Courses
          </Heading>
          {enrolledCourses.map((course) => (
            <Card asChild style={{ maxWidth: 350, margin:"10px", border:'1px solid grey', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }} key={course.id} gap="2" color="grey" onClick={() => {
              handleCourse(course.name)
              handleMonthlyGoals(course.name)
            }
              }>
              <a href="#">
                <Text as="div" size="2" weight="bold">
                  {course.name}
                </Text>
              </a>
            </Card>
          ))}
        </Box>
      </Flex>
      <Flex direction="column" gap="3" align="center">
       {demoFlag === true ? (<ProgressDemo/>):(<>
        <Box height="auto" width="500">
          <Heading color="crimson" size="7">Recommendations</Heading>
          {textbooks.length > 0 ? (
          <>
          <Text size="4" highContrast color="cyan">
            
            <Badge gap="3" size="6" variant="solid" color="cyan" radius="large" >Recommended resources based on your performance metrics</Badge> 
          </Text>
          </>
          ):(
            <Text></Text>
          )}
          {textbooks.length > 0 ? (
            <>
              <Heading size="4" gap="3">
              <Badge color="orange" size="5">Textbooks</Badge>
              </Heading>
              {textbooks.map((textbook,id) => (
                <Card key={id} size="1" style={{width:550, margin:'5px', border:'1px solid grey', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'}} gap="2"  >
                  <a href="#">
                    <Text as="div" size="2" weight="bold">
                      {textbook}
                    </Text>
                  </a>
                </Card>
              ))}
            </>
          ) : (
            <Text as="div" size="2" weight="bold">
             
            </Text>
          )}
          {courses.length > 0 ? (
            <>
              <Heading size="4" gap="3">
              <Badge color="green" size="5" gap="4">Courses</Badge>
              </Heading>
              {courses.map((course,id) => (
                <Card key={id}style={{width:550, margin:'5px', border:'1px solid grey', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'}}>
                  <a href="#">
                    <Text as="div" size="2" weight="bold">
                      {course}
                    </Text>
                  </a>
                </Card>
              ))}
            </>
          ) : (
            <Text as="div" size="2" weight="bold">
             
            </Text>
          )}
          {blogs.length > 0 ? (
            <>
              <Heading size="4" gap="3">
              <Badge color="blue" size="5">Blogs</Badge>
              </Heading>
              {blogs.map((blog,id) => (
                <Card key={id} style={{width:550, margin:'5px', border:'1px solid grey', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'}}>
                  <a href="#">
                    <Text as="div" size="2" weight="bold">
                      {blog}
                    </Text>
                  </a>
                </Card>
              ))}
            </>
          ) : (
            <Text as="div" size="2" weight="bold">
             
            </Text>
          )}
          {youtubeLinks.length > 0 ? (
            <>
              <Heading size="4" gap="3">
              <Badge color="red" size="5">Youtube</Badge>
              </Heading>
              {youtubeLinks.map((linkeach,id) => (
                <Card key={id} style={{width:600, margin:'5px', border:'1px solid grey', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'}}>
                  <a href="#">
                    <Text as="div" size="2" weight="bold">
                      {linkeach}
                    </Text>
                  </a>
                </Card>
              ))}
            </>
          ) : (
            <Text as="div" size="2" weight="bold">
             
            </Text>
          )}
        </Box>
        </>)}
      </Flex>

     

      {/* Performance Metrics Section */}
      <Flex direction="column" gap="3" align="center">

        <Box height="7" width="auto">
          <Heading color="green" align="center" size="7">Performance Metrics</Heading>
           <SpiderChart newData={enrolledCourses}/>
        </Box>
      </Flex>

      {/* Monthly Goals Section */}
      <Flex direction="column" gap="3" align="center">
        <Box height="auto" width="auto" >
          <>
            <Heading color="orange" size="7">Monthly Goals</Heading>
            {monthlyGoals.map((goal,id) => (
              <Card asChild style={{ maxWidth: 350, border:'1px solid grey', margin:'5px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'  }} key={id} gap="2" color="grey" >
                <div>
                  <Flex direction="row" gap="3">
                  <Checkbox  /> 
                  <a href="#">
                    <Text as="div" size="2" weight="bold">
                      {goal}
                    </Text>
                  </a>
                  </Flex>
                </div>
              </Card>
            ))}
          </>
        </Box>
      </Flex>
    </Grid>

  </Container>
  );
};

export default Recommendations;
