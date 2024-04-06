import TextInput from './TextInput';
import PasswordInput from './PasswordInput';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { makeUnauthenticatedPOSTRequest } from './serverHelpers';
import { useCookies } from 'react-cookie';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cookie, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();
  const login = async () => {
    const data = { email, password };
    const response = await makeUnauthenticatedPOSTRequest("/auth/login", data);
 
    if (response && !response.err) {
      console.log(response);
      const token = response.token;
      const date = new Date();
      date.setDate(date.getDate() + 30);
      setCookie("token", token, { path: "/", expires: date });
      alert("Success!")
      navigate("/home");
    }
    else {
      alert("Failure :(");
    }
  }
  return <div className="w-full h-screen bg-blue-950 flex flex-col items-center">
      <div className="inputRegion w-1/3 py-10 flex items-center justify-center flex-col">
      <div className="font-bold mt-10 mb-6 text-white text-3xl">
        Log In to LingoLadder
      </div>
      <TextInput
        placeholder="Email address or Username"
        className="my-6"
        value={email}
        setValue={setEmail}
      />
      <PasswordInput    
        placeholder="Password"
        value={password}
        setValue={setPassword}
      />
      <div className="w-full flex items-center justify-center my-8">
        <button className="border border-white text-white w-full flex items-center justify-center py-4 rounded-full"
          onClick={(e) => {
            e.preventDefault();
            login();
          }}
 
        >LOG IN</button>
      </div>
      <div className="w-full border border-solid border-gray-300"></div>
      <div className="my-6 font-semibold text-lg text-white">
        Don't Have an account?
      </div>
 
      <div className="border border-white text-white w-full  flex items-center justify-center py-4 rounded-full ">
        <Link to="/signup">
          SIGN UP FOR LINGOLADDER
        </Link>
      </div>
    </div>
  </div>;
}
 
export default LoginPage;