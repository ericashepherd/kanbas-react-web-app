import axios from "axios";
const URL = 'https://kanbas-node-server-app-fdd0.onrender.com/api/courses';

export const fetchCourses = async () => {
  // const promise = axios.get("http://localhost:4000/api/courses");
  // promise.then((response) => {
  //   setCourses(response.data);
  // });

  const response = await axios.get(URL);
  return response.data;
};

export const fetchCourse = async (id) => {
  const response = await axios.get(`${URL}/${id}`);
  return response.data;
};

export const deleteCourse = async (id) => {
  const response = await axios.delete(
    `${URL}/${id}`
  );
  return response.data;
};

export const updateCourse = async (course) => {
  const response = await axios.put(
    `${URL}/${course._id}`,
    course
  );
  return response.data;
};

export const addCourse = async (course) => {
  const response = await axios.post(
    URL,
    course
  );
  return response.data;
};
