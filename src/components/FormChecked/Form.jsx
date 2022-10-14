import { useState } from 'react';
const INITIAL_STATE = {
  login: '',
  email: '',
  password: '',
  agreed: false,
};

const FormChecked = props => {
  const [state, setState] = useState(...INITIAL_STATE);
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

  const { login, agreed } = this.state;

  return (
    <div>
      {props}
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
