import React, { useState, useEffect } from 'react';

const Login = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    console.log("Login component mounted");
  }, []);

  const login = async () => {
    console.log("Login function executed", formData);
  };

  const signup = async () => {
    console.log("Signup function executed", formData);
    let responseData;
    await fetch('http://localhost:400/signup',{

      method:'POST',
      header:{

        Accept: 'application/formData',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    }).then((response)=> response.json()).then((data)=> responseData=data)

    if(responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace('/');
    }else{ 

      alert(responseData.errors)
    }
 };   

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state === "Login") {
      login();
    } else {
      signup();
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
        <h3 className="text-2xl font-bold mb-6 text-center">{state} Page</h3>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {state === "SIGN UP" && (
            <input
              name="username"
              type="text"
              value={formData.username}
              onChange={changeHandler}
              placeholder="Your name"
              className="h-12 w-full pl-5 bg-gray-100 outline-none rounded-xl text-sm"
            />
          )}
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Your email"
            className="h-12 w-full pl-5 bg-gray-100 outline-none rounded-xl text-sm"
          />
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={changeHandler}
            placeholder="Your Password"
            className="h-12 w-full pl-5 bg-gray-100 outline-none rounded-xl text-sm"
          />
          <button
            type="submit"
            className="w-full bg-secondary text-white py-3 rounded-xl font-semibold hover:bg-tertiary transition duration-300"
          >
            {state}
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-black font-bold">
          {state === "SIGN UP" ? "Already have an account? " : "Don't have an account? "}
          <button
            onClick={() => setState(state === "Login" ? "SIGN UP" : "Login")}
            className="text-secondary font-semibold hover:underline"
          >
            {state === "SIGN UP" ? "Log In" : "Sign Up"}
          </button>
        </p>
        <div className="flex items-center mt-4">
          <input type="checkbox" className="mr-2" />
          <p className="text-sm">By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </section>
  );
};

export default Login;
