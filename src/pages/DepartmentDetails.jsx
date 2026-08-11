import { Link, useParams } from "react-router-dom";
import Colleges from "../data/Colleges";

function DepartmentDetails() {
  const { id } = useParams();

  const college = Colleges.find((item) => item.id === Number(id));

  if (!college) {
    return (
      <main>
        <h1>Department Not Found</h1>
        <p>The department you are looking for does not exist.</p>
        <Link to="/departments">Back to Departments</Link>
      </main>
    );
  }

  return (
    <main>
      <h1>{college.name}</h1>

      <h2>Programs</h2>

      {college.programs.length > 0 ? (
        <ul>
          {college.programs.map((program, index) => (
            <li key={index}>{program}</li>
          ))}
        </ul>
      ) : (
        <p>No programs available.</p>
      )}

      <Link to="/departments">Back to Departments</Link>
    </main>
  );
}

export default DepartmentDetails;