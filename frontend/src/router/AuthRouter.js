import React from 'react'
import { Route, Routes } from 'react-router-dom';

export default function AuthRouter() {
  return (
    <>
    <div>AuthRouter</div>
        <Routes>

          {/* <Route element={<Register />} path="/" /> */}
          <Route element={<>Register</>} path="/" />
          
          {/* <Route element={<Login />} path="/login" /> */}
          <Route element={<>Login</>} path="/login" />


          {/* <Route element={<Navigate to="/login" replace />} path="/logout" /> */}
          {/* <Route element={<Register />} path="/register" />
          <Route element={<ForgetPassword />} path="/forgetpassword" />
          <Route element={<Verify />} path="/verify/:userId/:emailToken" />
          <Route element={<ResetPassword />} path="/resetpassword/:userId/:resetToken" /> */}


          {/* <Route path="*" element={<NotFound />} /> */}
          <Route path="*" element={<>NotFound</>} />
        </Routes>
    </>
);
  
}
