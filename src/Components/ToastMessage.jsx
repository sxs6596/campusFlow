import { Toast } from '@radix-ui/react-toast';
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
const ToastMessage = (props) => {
  const {message} = props
  const notify = ()=>toast(message);
  return (
    <ToastContainer/>
  )
}

export default ToastMessage