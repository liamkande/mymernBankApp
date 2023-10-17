import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../auth/userAuth';
import CardContainer from '../components/cardContainer';
import { FaUserPlus } from 'react-icons/fa';


const passwordContainer: React.CSSProperties = {
  display: 'flex',
  position: 'relative',
};

const Signup: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = formData;
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const userData = {
      name,
      email,
      password,
    };
    // @ts-ignore
    dispatch(register(userData));
    console.log('submit');
    alert(JSON.stringify(userData))
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));

  return (
      <CardContainer
          bgcolor="success"
          opacity='10'
          header={<>Sign Up</>}
          body={
            <form onSubmit={handleSubmit}>
              <div>
                Name
                <br />
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Enter name"
                    value={name}
                    onChange={onChange}
                />
              </div>
              <br />
              <div>
                Email
                <br />
                <input
                    type="text"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={onChange}
                />
              </div>
              <br />
              <div>
                Password
                <br />
                <div style={passwordContainer}>
                  <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      placeholder="Enter password"
                      value={password}
                      onChange={onChange}
                  />
                </div>
              </div>
              <br />
              <button type="submit" className="btn btn-outline-success">
                <FaUserPlus /> Sign Up
              </button>
            </form>
          }
      />
  );
};

export default Signup;
