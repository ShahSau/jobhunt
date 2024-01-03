import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import AuthContext from "../../../context/AuthContext";
import axios from "axios";
// import { toast } from "react-toastify";

const UploadResume = ({ access_token }) => {
  const [resume, setResume] = useState(null);

  const preset_key ="jvfetvq7"
  const cloud_name = "dp1u4h5qd"
  const [image, setImage] = useState();
  const router = useRouter();

  const {
    loading,
    user,
    uploaded,
    error,
    clearErrors,
    uploadResume,
    setUploaded,
  } = useContext(AuthContext);

  useEffect(() => {
    if (error) {
      //toast.error(error);
      clearErrors();
    }

    if (uploaded) {
      setUploaded(false);
      //toast.success("Your resume is uploaded successfully.");
    }
  }, [error, uploaded]);

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   console.log(e.target)
  //   setImage(e.target.files[0]);
  //   const formData = new FormData();
  //   formData.append('file', image);
  //   formData.append('upload_preset', preset_key);

  //   axios.post(
  //     `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
  //     formData
  //   ).then((response)=>{
  //     if (response.status === 200) {
  //       // const resumeData = {
  //       //   resume: response.data.url,
  //       // };
  //       const resume = response.data.url
  //       // uploadResume(resumeData);
  //       console.log(resume)
  //     }
  //   }).catch((error)=>{
  //     console.log(error)
  //   })
  // };

  const onChange = (e) => {
    console.log(e.target.files[0])
    setImage(e.target.files[0]);
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', preset_key);
    console.log(formData)
    axios.post(
      `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
      formData
    ).then((response)=>{
      // if (response.status === 200) {
      //   // const resumeData = {
      //   //   resume: response.data.url,
      //   // };
      //   const resume = response.data.url
      //   // uploadResume(resumeData);
      //   console.log(resume)
      // }
      console.log(response)
    }).catch((error)=>{
      console.log(error)
    })
  };

  return (
    <div className="modalMask">
      <div className="modalWrapper">
        <div className="right">
          <div className="rightContentWrapper">
            <div className="headerWrapper">
              <h3> UPLOAD RESUME 22222</h3>
            </div>
            <form className="form" onSubmit={()=>{}}>
              <div className="inputWrapper">
                <div className="inputBox">
                  <i aria-hidden className="fas fa-upload"></i>
                  <input
                    type="file"
                    name="resume"
                    id="customFile"
                    accept="application/jpg, application/png, application/jpeg"
                    onChange={onChange}
                    required
                  />
                </div>
              </div>

              {user && user.resume && (
                <>
                  <h4 className="text-center my-3">OR</h4>

                  <Link
                    href={`https://jobbee-api.s3.amazonaws.com/${user.resume}`}
                  >
                    <a
                      className="text-success text-center ml-4"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <b>
                        <i aria-hidden className="fas fa-download"></i> Download
                        Your Resume
                      </b>
                    </a>
                  </Link>
                </>
              )}

              <div className="uploadButtonWrapper">
                <button type="submit" className="uploadButton">
                  {loading ? "Uploading..." : "Upload"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadResume;