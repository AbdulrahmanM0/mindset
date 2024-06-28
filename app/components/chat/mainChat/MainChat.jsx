"use client";

import { open_warning } from '@/app/store/Features/chat/warning';
import React , { useEffect , useState , useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function MainChat() {
  const chatRef = useRef()
  const conversation = useSelector(state => state.chatSlice.conversation)
  const dispatch = useDispatch()
  const [ isBrouse , setIsBrouse ] = useState(false)

  useEffect(()=>{
    setIsBrouse(true)
  },[])

  //start handle scroll bottom
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [conversation, chatRef.current?.scrollHeight]);
  //end handle scroll bottom

  const handleCopy = (message) => {
    navigator.clipboard.writeText(message).then(
      () => {
        console.log("Copied to clipboard!");
      },
      (err) => {
        console.error("Failed to copy text: ", err);
      }
    );
  };

  const handleDelete = (id) => {
    dispatch(open_warning({state:true , id,}))
  }

  

  return (
    <div className="container mx-auto chat_content" id="chat_container" ref={chatRef}>
      {isBrouse && conversation.length > 0 ? conversation.map((item,index)=>(
      <div key={index} className="message_container flex relative">
        {/* start use image */}
        <img 
          src="https://docs.material-tailwind.com/img/face-2.jpg" 
          style={{width:'50px',height:'50px'}}  
          alt="User Chat Image"
        />
        {/* end use image */}
        {/* start message */}
        <div className="flex-1 px-4 text_theme" dangerouslySetInnerHTML={{ __html: item.message.replaceAll('\n','<br/>')}} />
          {/* {item.message} */}
        {/* end message */}
        <div>
          {/* start copy icon */}
          <div>
          <button className="copy" onClick={()=>handleCopy(item.message)}>
            <span data-text-end="Copied!" data-text-initial="Copy to clipboard" className="tooltip"></span>
            <span>
              <svg style={{ enableBackground: "new 0 0 512 512" }} viewBox="0 0 6.35 6.35" y="0" x="0" height="20" width="20" version="1.1" xmlns="http://www.w3.org/2000/svg" className="clipboard">
                <g>
                  <path fill="currentColor" d="M2.43.265c-.3 0-.548.236-.573.53h-.328a.74.74 0 0 0-.735.734v3.822a.74.74 0 0 0 .735.734H4.82a.74.74 0 0 0 .735-.734V1.529a.74.74 0 0 0-.735-.735h-.328a.58.58 0 0 0-.573-.53zm0 .529h1.49c.032 0 .049.017.049.049v.431c0 .032-.017.049-.049.049H2.43c-.032 0-.05-.017-.05-.049V.843c0-.032.018-.05.05-.05zm-.901.53h.328c.026.292.274.528.573.528h1.49a.58.58 0 0 0 .573-.529h.328a.2.2 0 0 1 .206.206v3.822a.2.2 0 0 1-.206.205H1.53a.2.2 0 0 1-.206-.205V1.529a.2.2 0 0 1 .206-.206z"></path>
                </g>
              </svg>
              <svg style={{ enableBackground: "new 0 0 512 512" }} viewBox="0 0 24 24" y="0" x="0" height="18" width="18" version="1.1" xmlns="http://www.w3.org/2000/svg" className="checkmark">
                <g>
                  <path data-original="#000000" fill="currentColor" d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"></path>
                </g>
              </svg>
            </span>
          </button>
          </div>
          {/* end copy icon */}
          {/* start remove icon */}
          <div>
          <button className="button_remove" onClick={()=>handleDelete(item.id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 69 14"
              class="svgIcon bin-top"
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
              class="svgIcon bin-bottom"
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
          {/* end remove icon */}
        </div>
      </div>
      ))
      :
      <div className="py-5">
        <div className="button-container">
          <a className="brutalist-button openai button-1">
            <div className="openai-logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="openai-icon"
              >
                <path
                  fill="#10A37F"
                  d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.0993 3.8558L12.5907 8.3829 14.6108 7.2144a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.3927-.6813zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"
                ></path>
              </svg>
            </div>
            <div className="button-text">
              <span>Powered By</span>
              <span>GPT-Omni</span>
            </div>
          </a>
        </div>

        <h1 className="bannar_text">
          Generate your first AI Chat
        </h1>
      </div>
    }
    </div>
  );
}

export default MainChat;
