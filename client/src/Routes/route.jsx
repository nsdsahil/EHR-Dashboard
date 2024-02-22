import React from 'react'
import { Patients } from '../components/Patients'
import Register from '../pages/Register'
import {Login} from '../pages/Login'
import { Routes, Route } from 'react-router-dom'
import Verify from '../pages/Verify'
import {PatientDetails} from '../pages/patientDetails'

/**
* @author
* @function Routes
**/

export const Routers = () => {
  return(
    <>
    <Routes>
        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/" element={<Patients />} />
        <Route path='/verify' element={<Verify/>} />
      {/* taking id as a parameter */}
        <Route path='/patientDetails/:id' element={<PatientDetails/>} />
        
    </Routes>
    </>
   )
  }
