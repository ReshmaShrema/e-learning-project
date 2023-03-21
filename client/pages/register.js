import { useState } from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(' ');

    const handleSubmit = async (e) => {
        e.preventDefault();
try{
 const {data} = await axios.post(`http://localhost:8000/api/register`,{name,email,password});
        console.log('Register Response',data);
        //console.table({ name, email, password })
toast.success("Registered Successfully,Please Login");
    }
    catch(err){
        toast.error(err.response.data)
    }

      
    };
    return (
        <>
            <h1 className="jumbotron">Register</h1>
            <div className="container col-md-4 offset-md-4 pb-5">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="form-control mb-4"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter Name"
                        required
                    />
                    <input
                        type="email"
                        className="form-control mb-4 "
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter Email"
                        required
                    />
                    <input
                        type="password"
                        className="form-control mb-4"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter Password"
                        required
                    />
                    <button type="submit" className="bg-primary w-100">
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
};
export default Register;
