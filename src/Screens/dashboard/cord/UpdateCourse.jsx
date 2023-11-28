import React, { useState } from "react";
import { FaSwatchbook } from "react-icons/fa";
import Image1 from "../../../assets/images/course1.jpg";
import axios from "axios";
import { Flex, Button, Heading, TextArea } from "@radix-ui/themes";
export default function UpdateCourse() {
  const [course, setCourse] = useState({
    id: "",
    title: Image1,
    image: "",
    description: "",
    start_date: "",
    end_date: "",
    enrolled: false,
  });

  const handleData = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setCourse((currentData) => ({ ...currentData, [name]: value }));
  };

  const updateCourseDetails = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://rxk4239.uta.cloud/updatecordcourses.php",
        course,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        alert("Course Updated Successfully");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error updating course: ", error);
      alert("Failed to update course");
    }
  };

  return (
    <>
      <div>
        <Heading size="7">Update Course</Heading>
      </div>
      <div>
        <form onSubmit={updateCourseDetails}>
          <div className="input-core row">
            <FaSwatchbook className="input-img" />
            <input
              type="text"
              name="title"
              className="input"
              placeholder="Course Title"
              value={course.title}
              onChange={handleData}
              required
            />
          </div>
          <div className="input-core row">
            <FaSwatchbook className="input-img" />
            <input
              type="text"
              name="id"
              className="input"
              placeholder="Course ID"
              value={course.id}
              onChange={handleData}
              required
            />
          </div>
          <br />
          <div>
            <h4>Start Date & End Date</h4>
          </div>
          <div className="dbl">
            <div className="input-core row">
              <input
                type="date"
                name="start_date"
                className="input"
                value={course.start_date}
                onChange={handleData}
                required
              />
            </div>
            <div className="input-core row">
              <input
                type="date"
                name="end_date"
                className="input"
                value={course.end_date}
                onChange={handleData}
                required
              />
            </div>
          </div>
          <div className="txt-area">
            <textarea
              name="description"
              id=""
              className="textarea"
              value={course.description}
              onChange={handleData}
            ></textarea>
            
          </div>
          <Flex direction="column" gap="5" align="center" size="5">
            <Button size="3" gap="4" mt="4">Update Course</Button>
          </Flex>
          {/* <button className="button">
                        Update Course
                    </button> */}
        </form>
      </div>
    </>
  );
}
