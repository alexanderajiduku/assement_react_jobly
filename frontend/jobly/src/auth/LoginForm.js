import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Updated import
import Alert from "../common/Alert";

const LoginForm = ({ login }) => {
  const navigate = useNavigate(); // Updated for React Router v6
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState([]);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const result = await login(formData);
    if (result.success) {
      navigate("/companies"); // Updated for React Router v6
    } else {
      setFormErrors(result.errors);
    }
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData(l => ({ ...l, [name]: value }));
  };

  return (
    <div className="LoginForm">
      <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
        <h3 className="mb-3">Log In</h3>
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Username</label>
                <input
                  name="username"
                  className="form-control"
                  value={formData.username}
                  onChange={handleChange}
                  autoComplete="username"
                  required
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                  required
                />
              </div>

              {formErrors.length > 0 && <Alert type="danger" messages={formErrors} />}

              <button className="btn btn-primary float-right">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
