"use client"

import { submit } from '@/app/store/Features/chat/chatSlice';
import React , { useState , useRef } from 'react'
import { useDispatch } from 'react-redux';
import TextareaAutosize from 'react-textarea-autosize';
import {
    Popover,
    PopoverHandler,
    PopoverContent,
    Button,
  } from "@material-tailwind/react";
import { open_warning } from '@/app/store/Features/chat/warning';

function ChatInput() {
    const [message,setMessage] = useState('');
    const inputRef = useRef();
    const [id,setId] = useState(1);
    const [warn,setWarn] = useState(false)
    const dispatch = useDispatch()

    const handleKeyPress = (e) => {
         if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
        }
    }
    
    const handleSubmit = () => {
        if(message.length > 0){
            setWarn(false)
            setId(id + 1)
            dispatch(submit({message, id}))
            setMessage('')
        inputRef.current.value = ''}else{
            setWarn(true)
            setTimeout(()=>setWarn(false),2000)
        }
    }

    const handleDelete = () => {
        dispatch(open_warning({state:true}))
    }

  return (
    <div className="absolute bottom-0 chat_footer w-full" >
        <div className="flex chat_footer_container container">
        {/* start message input */}
        <div className="flex-1 relative">
        <TextareaAutosize
            ref={inputRef}
            onKeyDown={handleKeyPress}
            onChange={(e)=>{setMessage(e.target.value)}}
            maxRows={8} 
            placeholder="start chat"
            className="text_theme box_theme p-3 pr-20 w-full"
            id="chat_input"
        />
        {/* start submit button  */}
        <Popover placement="top-end" open={warn}>
          <PopoverHandler onClick={handleSubmit}>
            <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer size-6 absolute right-4 top-3 submit_icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>
          </PopoverHandler>
          <PopoverContent>
            <span>You need to write anything first</span>
          </PopoverContent>
        </Popover>
        {/* end submit button  */}

        </div>

        {/* end message input */}

        {/* start delete button  */}
        <div>
            <button className="bin_button" onClick={handleDelete}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 69 14"
                className="svgIcon bin-top"
            >
                <g clip-path="url(#clip0_35_24)">
                <path
                    fill="black"
                    d="M20.8232 2.62734L19.9948 4.21304C19.8224 4.54309 19.4808 4.75 19.1085 4.75H4.92857C2.20246 4.75 0 6.87266 0 9.5C0 12.1273 2.20246 14.25 4.92857 14.25H64.0714C66.7975 14.25 69 12.1273 69 9.5C69 6.87266 66.7975 4.75 64.0714 4.75H49.8915C49.5192 4.75 49.1776 4.54309 49.0052 4.21305L48.1768 2.62734C47.3451 1.00938 45.6355 0 43.7719 0H25.2281C23.3645 0 21.6549 1.00938 20.8232 2.62734ZM64.0023 20.0648C64.0397 19.4882 63.5822 19 63.0044 19H5.99556C5.4178 19 4.96025 19.4882 4.99766 20.0648L8.19375 69.3203C8.44018 73.0758 11.6746 76 15.5712 76H53.4288C57.3254 76 60.5598 73.0758 60.8062 69.3203L64.0023 20.0648Z"
                ></path>
                </g>
                <defs>
                <clipPath id="clip0_35_24">
                    <rect fill="white" height="14" width="69"></rect>
                </clipPath>
                </defs>
            </svg>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 69 57"
                className="svgIcon bin-bottom"
            >
                <g clip-path="url(#clip0_35_22)">
                <path
                    fill="black"
                    d="M20.8232 -16.3727L19.9948 -14.787C19.8224 -14.4569 19.4808 -14.25 19.1085 -14.25H4.92857C2.20246 -14.25 0 -12.1273 0 -9.5C0 -6.8727 2.20246 -4.75 4.92857 -4.75H64.0714C66.7975 -4.75 69 -6.8727 69 -9.5C69 -12.1273 66.7975 -14.25 64.0714 -14.25H49.8915C49.5192 -14.25 49.1776 -14.4569 49.0052 -14.787L48.1768 -16.3727C47.3451 -17.9906 45.6355 -19 43.7719 -19H25.2281C23.3645 -19 21.6549 -17.9906 20.8232 -16.3727ZM64.0023 1.0648C64.0397 0.4882 63.5822 0 63.0044 0H5.99556C5.4178 0 4.96025 0.4882 4.99766 1.0648L8.19375 50.3203C8.44018 54.0758 11.6746 57 15.5712 57H53.4288C57.3254 57 60.5598 54.0758 60.8062 50.3203L64.0023 1.0648Z"
                ></path>
                </g>
                <defs>
                <clipPath id="clip0_35_22">
                    <rect fill="white" height="57" width="69"></rect>
                </clipPath>
                </defs>
            </svg>
            </button>
        </div>
        {/* end delete button  */}
        </div>

    </div>
  )
}

export default ChatInput