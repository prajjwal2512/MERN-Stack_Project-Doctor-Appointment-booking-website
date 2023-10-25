

import {useState} from 'react';  
import signupImg from "../assets/images/signup.gif";
import avatar from "../assets/images/doctor-img01.png";
import {Link,useNavigate} from 'react-router-dom';
import uploadImageToCloudinary from '../../utils/uploadCloudinary';
import {BASE_URL} from "../config";
import {toast} from "react-toastify";
import HashLoader from "react-spinners/HashLoader";



const Signup = () => {

    const [selectedFile,setSelectedFile]=useState(null);
    const [previewURL,setPreviewURL]=useState(" ");
    const [Loading,setLoading]=useState(false);

    const [formData,setFormData]=useState({
        name:"",
        email:"",
        password:"",
        gender:"",
        role:"patient"

    });

    const navigate=useNavigate()

    const handleInputChange = e=>{
        setFormData({...FormData,[e.target.name]:e.target.value});
    };
    const handleFileInputChange=async event =>{
        const file=event.target.files[0];
        const data = await uploadImageToCloudinary(file);

        setPreviewURL(data.url);
        setSelectedFile(data.url);
        setFormData({...formData,photo:data.url});

    };

    const submitHandler = async event=>{
        event.preventDafault();
        setLoading(true);

        try {
            const res= await fetch('${BASE_URL}/auth/register',{
                method:'post',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(formData)
            })
            const {message}= await res.json()

            if(!res.ok){
                throw new Error(message)
            }
            setLoading(false)
            toast.success(message)
            navigate("/login")
        } catch (error) {
            toast.error(err.message)
            setLoading(false)   
        }
    };

    return (
        <section className="px-5 xl:px-0">
            <div className="max-w-[1170px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* =============img Box ======== */}

                    <div className="hidden lg:block bg-primaryColor rounded-l-lg">
                        <figure className="rounded-l-lg">
                            <img src={signupImg} alt="" className="w-full rounded-l-lg" />

                        </figure>
                    </div>

                    {/* =======sign up from ===== */}
                    <div className="rounded-l-lg lg:pl-16 py-10">
                        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
                            Creat an <span className="text-primaryColor">account</span>
                        </h3>

                        <form onSubmit={submitHandler}>
                         <div className="mb-5">
                          <input
                          type="text" 
                          placeholder="Enter your full Name" 
                          name="name" 
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
                          focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
                          placeholder:text-textColor cursor-pointer"
                          required
                          />
                         </div>

                         <div className="mb-5">
                          <input
                          type="email" 
                          placeholder="Enter your email" 
                          name="email" 
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
                          focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
                          placeholder:text-textColor cursor-pointer"
                          required
                          />
                         </div>

                         <div className="mb-5">
                          <input
                          type="password" 
                          placeholder="Password" 
                          name="password" 
                          value={formData.password}
                          onChange={handleInputChange}
                          className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
                          focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
                          placeholder:text-textColor cursor-pointer"
                          required
                          />
                         </div>

                         <div className="mb-5 flex items-center justify-between">
                            <label htmlFor=""
                                className="text-headingColor font-bold text-[16px] leading-7"
                                > Are you a:
                                <select
                                  name="role"
                                  value={formData.role}
                                  onChange={handleInputChange}
                                  className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3
                                  focus:outline-none"
                                >
                                    <option value="patient">Patient</option>
                                    <option value="doctor">Doctor</option>

                                </select>
                                
                            </label>

                            <label
                                className="text-headingColor font-bold text-[16px] leading-7"
                                > Gender:
                                <select
                                  name="gender"
                                  value={formData.gender}
                                  onChange={handleInputChange}
                                  className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3
                                  focus:outline-none"
                                >
                                    <option value="mail">Mail</option>
                                    <option value="femail">Femail</option>
                                    <option value="other">Other</option>

                                </select>
                                
                            </label>
                         </div>

                    <div className="mt-7">
                        <button
                        disabled={Loading && true}
                        type="submit" 
                        className="w-full bg-primaryColor text-white text-[18px]
                        leading-[30px] rounded-lg px-4 py-3">
                            {Loading ?( 
                            <HashLoader size={35} color="#ffffff"/>
                            ):(
                                "Sign Up"
                                )}
                        </button>
                    </div>

                    <p className="mt-5 text-textColor" style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        Already have an account?{"  "}
                        <Link to="/login" className="text-primaryColor font-medium ml-1">
                            Login
                        </Link>
                    </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Signup;