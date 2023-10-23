
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Landing, Error, Register, ProtectedRoute }from "./pages";
import { AllJobs, AddJob, Stats, Profile, SharedLayout } from "./pages/dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
  < BrowserRouter  >
    <Routes>
      <Route path="/" element={
       < ProtectedRoute >
          <SharedLayout/>
      </ProtectedRoute>
      }>
        <Route index element={<Stats/>}></Route>
        <Route path="all-jobs" element={<AllJobs/>}></Route>
        <Route path="add-job" element={<AddJob/>}></Route>
        <Route path="profile" element={<Profile/>}></Route>
      </Route>
      <Route path="/landing" element={<Landing/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="*" element={<Error/>}></Route>
    </Routes>
    <ToastContainer position="top-center"/>
  </BrowserRouter>
  );
}

export default App;