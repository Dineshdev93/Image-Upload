import React, { useEffect, useState } from "react";
import style from "../Cmp/home.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const [data, setData] = useState([]);
   const navigate = useNavigate()
  useEffect(() => {
    getdata();
  }, []);
  const getdata = async () => {
    let result = await axios.get("http://localhost:5000", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    setData(result.data);
  };
  const itemDelete = async(id) =>{
     await axios.delete(`http://localhost:5000/del/${id}`)
     alert("Deleted. . .")
     navigate("/register")
  }
  return (
    <>
      <Link to={"/register"} className={`${style.btns} btn btn-primary`}>
        {" "}
        Add
      </Link>
      <div className={style.main}>
        {data.length > 0
          ? data.map((item, _id) => {
              return (
                <div className={style.main2} key={_id}>
                  <div
                    className={`card ${style.ca}`}
                    style={{ width: "18rem" }}
                    
                  >
                    <img
                      src={`http://localhost:5000/imageapi/${item.imagepath}`}
                      className="card-img-top"
                      alt="logo"
                    />
                    <div className="card-body">
                      <h6 className="card-text">User : {item.user}</h6>
                      <h6 className="card-text">Designation : {item.desi}</h6>
                    </div>
                    <button className={`btn btn-danger ${style.btns2}`} onClick={()=>itemDelete(item._id)}>Delete</button>
                  </div>
                </div>
              );
            })
          : ""}
      </div>
    </>
  );
}
