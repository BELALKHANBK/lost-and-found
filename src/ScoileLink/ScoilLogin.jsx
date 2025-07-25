import React, { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router';
import Swal from 'sweetalert2';
import { Authcontex } from '../AuthContext';
import { FcGoogle } from "react-icons/fc";


const ScoilLogin = () => {
  const { signInWithGoogle } = useContext(Authcontex);
  const navigate = useNavigate();
  const location = useLocation();
  const from = new URLSearchParams(location.search).get('redirect') || '/';

  const signInGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        Swal.fire('Login Successful!', 'Welcome back!', 'success');
        navigate(from, { replace: true });
      })
      .catch((error) => {
        Swal.fire('Login Failed', error.message, 'error');
      });
  };

  return (
    <div>
      <div className="divider">OR</div>
      <button
        onClick={signInGoogle}
        className="btn bg-white  w-full text-black border-[#e5e5e5]"
      >
        
        <FcGoogle />Login with Google
      </button>
    </div>
  );
};

export default ScoilLogin;
