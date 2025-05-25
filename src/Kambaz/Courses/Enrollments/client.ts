import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;

export const deleteEnrollment = async (id: string) => {
  const { data } = await axios.delete(`${ENROLLMENTS_API}/${id}`);
  return data;
};