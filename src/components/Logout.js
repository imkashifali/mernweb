import React,{useEffect} from 'react';

const Logout = () => {
    
    const logout = async() =>{
        try {
            const res = await fetch("/logout", {
                method: "GET",
                headers: {
                  "Content-Type": "Application/json",
                },
               credentials:"include"
              });
              if (res.status === 401 || !res) {
                window.alert("Plz Logout Later");
              }else{
                window.location.href='/'
                window.location.reload()
              }
        } catch (error) {
            
        }
    }


    useEffect(() => {
        logout()
     
    }, []);
    
  return <div></div>;
};

export default Logout;
