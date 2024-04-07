import TextInput from './TextInput';
import PasswordInput from './PasswordInput';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { makeUnauthenticatedPOSTRequest } from './serverHelpers';
import { useCookies } from 'react-cookie';
 
const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();
  const [cookie, setCookie] = useCookies(["token"]);
 
  const signUp = async () => {
    if( email !== confirmEmail){
      alert("Email and Confirm email fields must match");
      return;
    }
    const data = {email, password, username, firstName,lastName};
    const response = await makeUnauthenticatedPOSTRequest("/auth/register", data);
 
    if (response && !response.err){
      console.log(response);
      const token = response.token;
      const date = new Date();
      date.setDate(date.getDate() + 30);
      setCookie("token", token, {path:"/", expires: date});
      alert("Success!")
      navigate("/home");
    }
    else{
      alert("Failure :(");
    }
  }
 
 
    return <div className="bg-blue-950 w-full h-full flex flex-col items-center">
      
        <div className=" inputRegion w-1/3 py-10 flex items-center justify-center flex-col">
            <div className="font-bold mb-4 text-2xl ">
                Sign up to climb up the LingoLadder!
            </div>
            <TextInput
              label="Email address"
              placeholder="Enter your email address"
              className="my-6 "
              value={email}
              setValue={setEmail}
            />
            <TextInput
              label="Confirm Email address"
              placeholder="Please enter your email address again"
              className="mb-6 "
              value={confirmEmail}
              setValue={setConfirmEmail}
            />
            <TextInput
              label="Username"
              placeholder="Please enter your username"
              className="mb-6 "
              value={username}
              setValue={setUsername}
            />
            <PasswordInput
              label="Create Password"
              placeholder="Enter a strong password."
              className="my-6 "
              value={password}
              setValue={setPassword}
            />
            <div className="w-full flex justify-between item-center space-x-8">
              <TextInput
                label="First Name"
                placeholder="Enter your first name"
                className="my-6 "
                value={firstName}
                setValue={setFirstName}
              />
              <TextInput
                label="Last Name"
                placeholder="Enter your last name"
                className="my-6 "
                value={lastName}
                setValue={setLastName}
              />
           
             
            </div>
            <div className="w-full text-black flex items-center justify-center my-8">
            <button
  className="bg-white font-semibold p-3 px-10 rounded-full"
  onClick={(e) => {
    e.preventDefault();
    signUp().then(() => navigate('/login'));            
  }}
>
  SIGN UP
</button>
            </div>
            <div className="w-full border border-solid border-gray-300"></div>
            <div className="my-6 font-semibold text-lg">
              Already have an account?
            </div>
 
            <div className="border text-black bg-white  border-gray-500  text-gray-500 w-full  flex items-center justify-center py-4 rounded-full ">
               <Link to="/login">LOG IN INSTEAD</Link>
            </div>
        </div>
    </div>;
}
 
export default SignupPage;