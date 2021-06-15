/* eslint-disable jsx-a11y/no-distracting-elements */
import "./Form.css";
import { motion } from "framer-motion";
import firebaseDB from "../.././firebase";
import React,{useState} from "react";

export const Form = () => {
  const initialFieldValue = {
    wname:'',
    title:'',
    content:''
  }
  var [values,setValues] = useState(initialFieldValue);
  const handleInputChange = e =>{
    var {name,value} = e.target
    setValues({
      ...values,
      [name]:value,
    })
  
  }
  const add = obj=>{
    firebaseDB.child("ShayKavi").push(
      obj,
      err => {
        if(err){
        console.log(err)
        alert("Error occur");
        }
        else{
          alert("Success");
        }
      }
    )
  }

  const handleOnSubmit = e =>{
    e.preventDefault();
    add(values);

  }
  return (
    <motion.div
      className='main'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className='container' onSubmit={handleOnSubmit}>
        <div className='text'>Content Form</div>
        <form action='' autoComplete="off">
          <div className='form-row'>
            <div className='input-data'>
              <input type='text' required name='wname' value={values.wname} onChange={handleInputChange} />
              <div className='underline'></div>
              <label>Enter your Name</label>
            </div>
            <div className='input-data'>
              <input type='text' required name='title' value={values.title} onChange={handleInputChange} />
              <div className='underline'></div>
              <label>Enter your Title</label>
            </div>
            </div>
            <div className="form-row">
            <div className="input-data textarea">
            <textarea rows="8" cols="80" maxLength="2000" required name='content' value={values.content} onChange={handleInputChange} ></textarea>
            <br />
            <div className="underline"></div>
            <label for="">Enter content</label>
            </div>
          <div className='form-row submit-btn'>
            <div className='input-data'>
              <div className='inner'></div>
              <input type='submit' value='submit' />
            </div>
      </div>
          </div>
        </form>
        <marquee>
          <b> Note:</b> Website work is pending. Till Submit कविता & शायरी.
        </marquee>
      </div>
    </motion.div>
  );
};
