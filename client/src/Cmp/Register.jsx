import React, { useState } from "react";
import style from "../Cmp/home.module.css";
import axios from "axios"
import {useNavigate} from "react-router-dom"
export default function Register() {
  const [user, setUser] = useState("");
  const [img, setImg] = useState("");
  const [desi,setDesi] = useState("")
  const navigate = useNavigate();
  const Adduser = async(e) => {
    e.preventDefault();
    let formdata = new FormData();
    formdata.append("user", user);
    formdata.append("photo", img);
    formdata.append("desi",desi)
    const config = {
      headers: {
        "Content-Type": "multipart/form-data ",
      },
    };
    const result = await axios.post( "http://localhost:5000/post",formdata,config)
    navigate("/")
  };
  return (
    <form className={style.box}>
      <h3 style={{ textAlign: "center",color:"white" }}>User Regestration</h3>
      <div class="mb-3">
        <label for="exampleInputEmail1" className="form-label" style={{color:"white"}}>
          User Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          name="fname"
          placeholder="Enater user name"
          aria-describedby="emailHelp"
          onChange={(e) => setUser(e.target.value)}
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" className="form-label"style={{color:"white"}}>
          Upload Image
        </label>
        <input
          type="file"
          className="form-control"
          id="exampleInputPassword1"
          name="photo"
          onChange={(e) => setImg(e.target.files[0])}
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" className="form-label"style={{color:"white"}}>
        Designation 
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          name="desi"
          placeholder="Enter Post"
          onChange={(e) => setDesi(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className={`btn btn-primary ${style.btns}`}
        onClick={Adduser}
      >
        Add User
      </button>
    </form>
  );
}
