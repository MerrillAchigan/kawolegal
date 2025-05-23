import React, { useState } from 'react';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login data:', { name, email, password });
    // You can add authentication logic here
  };

  return (
    <section className="max-w-2xl w-full mx-auto px-6 py-12">
      <h3 className="text-center text-2xl font-bold mb-6">Already a member? Log in</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <InputField
          label="Your name"
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          required
        />
        <InputField
          label="Your email"
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <InputField
          label="Enter password"
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />

        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-300"
          >
            Sign In
          </button>
        </div>
      </form>
    </section>
  );
};

const InputField = ({ label, type, id, value, onChange, required }) => (
  <div className="flex flex-col">
    <label htmlFor={id} className="font-semibold text-gray-700">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      name={id}
      id={id}
      placeholder={label}
      className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
      value={value}
      onChange={onChange}
      required={required}
    />
  </div>
);

export default Login;
