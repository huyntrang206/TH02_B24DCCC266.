import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface Student {
  id: number;
  name: string;
  email: string;
}

const StudentList: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setStudents(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>Danh sách sinh viên</h2>
      <ul>
        {students.map((s) => (
          <li key={s.id}>
            <Link to={`/bai2/${s.id}`}>{s.name}</Link> - {s.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
