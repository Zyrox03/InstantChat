import React, { useState } from 'react'
import {userAuth} from '../Context/AuthContext.jsx'
import {db} from '../firebase/firebase.jsx'
import { collection, addDoc, serverTimestamp  } from "firebase/firestore"; 
    

const SendMsg = () => {
    const [value, setValue] = useState('')
    const {currentUser} = userAuth()
    const handleSendMsg = async(e) => {
        e.preventDefault()


        if(value.trim() === "") {
            alert("Enter valid message!");
            return;
          }

      try {
      const { uid, displayName, photoURL } = currentUser; 
      await addDoc(collection(db, "messages"), {
        text: value,
        name: displayName,
        avatar: photoURL,
        createdAt: serverTimestamp(),
        uid
      })
    } catch(error) {
      console.log(error);
    }
    setValue("");
    }



    return (
        <div className='bg-base-200 fixed bottom-0 w-full py-10 shadow-lg'>
            <form onSubmit={handleSendMsg} className=' px-2 containerWrap flex' >
                <input className='input w-full focus:outnile-none bg-gray-100 rounded-r-none text-black' type="text" value={value} onChange={e => setValue(e.target.value)} />
                <button type='submit' className='w-auto bg-gray-500 text-white rounded-r px-5 text-sm ml-2'>Send</button>
            </form>
        </div>
    )
}
export default SendMsg