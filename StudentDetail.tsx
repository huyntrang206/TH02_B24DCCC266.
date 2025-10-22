import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

interface Student {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  company: { name: string };
  address: { city: string };
}

const StudentDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [student, setStudent] = useState<Student | null>(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setStudent(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!student) return <p>Đang tải...</p>;

  return (
    <div>
      <h2>Thông tin chi tiết sinh viên</h2>
      <p><strong>Họ tên:</strong> {student.name}</p>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>Số điện thoại:</strong> {student.phone}</p>
      <p><strong>Thành phố:</strong> {student.address.city}</p>
      <p><strong>Công ty:</strong> {student.company.name}</p>
      <p><strong>Website:</strong> {student.website}</p>
    </div>
  );
};

export default StudentDetail;
