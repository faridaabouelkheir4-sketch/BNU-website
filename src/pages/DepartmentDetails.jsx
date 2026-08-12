import { useParams, Link } from "react-router-dom";
import Colleges from "../data/Colleges";

function DepartmentDetails() {
  const { id } = useParams();

  const department = Colleges.find(
    (college) => college.id === Number(id)
  );

  if (!department) {
    return (
      <main>
        <h1>Department Not Found</h1>

        <Link to="/departments">
          Back to Departments
        </Link>
      </main>
    );
  }

  return (
    <main>
      <h1>{department.name}</h1>

      <h2>Programs</h2>

      {department.programs.length > 0 ? (
        <ul>
          {department.programs.map((program, index) => (
            <li key={index}>{program}</li>
          ))}
        </ul>
      ) : (
        <p>No programs available.</p>
      )}

      <Link to="/departments">
        Back to Departments
      </Link>
    </main>
  );
}

export default DepartmentDetails;