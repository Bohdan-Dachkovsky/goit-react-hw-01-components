import { useState } from 'react';
import PropTypes from 'prop-types';

const FormChecked = ({ nameProfile }) => {
  const [state, setState] = useState({
    login: '',
    email: '',
    password: '',
    agreed: false,
  });
  const handleChange = evt => {
    const { name, value, type, checked } = evt.target;
    setState({ [name]: type === 'checkbox' ? checked : value });
    console.log(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { login, email, password, agreed } = state;
    console.log(
      `Login: ${login}, Email: ${email}, Password: ${password}, Agreed: ${agreed}`
    );

    /* ... */
  };

  const { login, agreed } = state;

  return (
    <div>
      {nameProfile}
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="checkbox"
            name="agreed"
            checked={agreed}
            onChange={handleChange}
          />
          <input
            type="checkbox"
            name="agreed"
            checked={agreed}
            onChange={handleChange}
          />
        </label>

        <button type="submit" disabled={!agreed}>
          Sign up as {login}
        </button>
      </form>
    </div>
  );
};
export default FormChecked;
FormChecked.propTypes = {
  nameProfile: PropTypes.string.isRequired,
};
