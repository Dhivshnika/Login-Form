import React from "react";

function LoginPage({loginMail,loginPassword}) {

  const mailId = localStorage.getItem('loginMail');
  const pwd = localStorage.getItem('loginPassword');
    return (
        <div>
            <div>E-mail ID : {mailId}</div>
            <div>Password : {pwd}</div>
        </div>
    )
}

export default LoginPage;