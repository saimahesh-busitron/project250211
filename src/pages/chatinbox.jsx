import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getRelativeTime } from "../utils/relativetimes";
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

const conversations = [
    {
        id: 1,
        name: "Rafi Islam Apon",
        title: "E-Commerce Website Redesign",
        message: "bro, kepriwe kie rawone ra mudun-mudun selak to kaliren duis enim velit mollit.",
        time:"Mon Feb 10 2025 15:58:21 GMT+0530 (India Standard Time)",
        active: true,
        avatarColor: "bg-blue-500",
    },
    {
        id: 2,
        name: "Tahsan Rahman",
        title: "Architecture Website Design",
        message: "bro, kepriwe kie rawone ra mudun-mudun selak to kaliren duis enim velit mollit.",
        time:"Mon Feb 10 2025 15:58:21 GMT+0530 (India Standard Time)", // 57 minutes ago
        active: false,
        avatarColor: "bg-pink-500",
    },
    {
        id: 3,
        name: "Zara Yeasmin Tasnim",
        title: "Fintech Mobile Apps Design",
        message: "bro, kepriwe kie rawone ra mudun-mudun selak to kaliren duis enim velit mollit.",
        time:"Sun Feb 09 2025 15:58:21 GMT+0530 (India Standard Time)", // 2 hours ago
        active: false,
        avatarColor: "bg-red-500",
    },
    {
        id: 4,
        name: "Ralp Edwards",
        title: "NFT Landing Page Design",
        message: "bro, kepriwe kie rawone ra mudun-mudun selak to kaliren duis enim velit mollit.",
        time:"Mon Jan 10 2025 15:58:21 GMT+0530 (India Standard Time)", // 1 day ago
        active: false,
        avatarColor: "bg-yellow-500",
    },
];
export default function ConversationList() {
  const [activeChat, setActiveChat] = useState(0);
  const [query, setQuery] = useState("");
  const [visibleRight, setVisibleRight] = useState(false);

  const navigate = useNavigate();

  const onChatClick = (index, conversation) => {
    if (activeChat === index) {
      handleDoubleClick(conversation);
    } else {
      setActiveChat(index);
    }
  };

  let conversationsdata = conversations;

  const filteredConversations = conversationsdata.filter((conversation) => {
    const lowerQuery = query.toLowerCase();
    return (
      conversation.name.toLowerCase().includes(lowerQuery) ||
      conversation.title.toLowerCase().includes(lowerQuery) ||
      conversation.message.toLowerCase().includes(lowerQuery)
    );
  });

  const handleDoubleClick = (conversation) => {
    navigate(`comments/${conversation.id}`);
  };

  return (
    <div className="min-h-screen  max-w-5xl mx-auto p-4">
      <div className="flex justify-between items-center mb-5 text-lg font-bold">
      <i className="pi pi-arrow-left" style={{ fontSize: '2rem' }} ></i>
        {/* <FaArrowLeftLong className="cursor-pointer" /> */}
        <h3>Inbox</h3>

        <Button icon="pi pi-bars" onClick={() => setVisibleRight(true)} />
        {/* <IoMenuSharp className="cursor-pointer" /> */}
       
      </div>
      <hr></hr>
      <div className="relative mb-4 mt-4">
        {/* <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" /> */}
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="Type to search your conversation"
          className="w-full p-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      <ul className="space-y-4">
        {filteredConversations.length > 0 ? (
          filteredConversations.map((conversation, index) => (
            <li
              key={index}
              onClick={() => onChatClick(index, conversation)}
              className={`relative flex items-start gap-4 p-4 pb-[30px] rounded-lg shadow-md cursor-pointer transition duration-200 ${
                activeChat === index ? "bg-indigo-400 text-white" : "bg-white text-gray-900"
              }`}
            >
              <img
                className="w-10 h-10 rounded-full"
                src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-173524.jpg"
                alt="profile"
              />
              <div className="flex-1">
                <p className="text-sm font-semibold">{conversation.name}</p>
                <h3 className="text-lg font-bold">{conversation.title}</h3>
                <p className={ activeChat === index ? "text-xs  text-gray-200" : " text-xs text-gray-600"}>{conversation.message}</p>
              </div>
              <span className="absolute top-4 right-4 text-xs text-gray-500">
                {getRelativeTime(conversation.time)}
              </span>
            </li>
          ))
        ) : (
          <div className="p-4 text-center text-gray-500">No Conversation Found</div>
        )}
      </ul>
      <Sidebar className="p-0" visible={visibleRight} position="right" onHide={() => setVisibleRight(false)}>
     
               <ul>
<li className="mb-2" >
<Button className="w-full mb-3 text-center" label="Inbox"  icon="pi pi-inbox"  onClick={()=>{navigate('/chat-inbox')}} />
</li>
<li  className="mb-2" >
<Button className="w-full  text-center"   label="Sent"  icon="pi pi-send"  onClick={()=>{navigate('/chat-sent')}} />
</li>
<li className="mb-2" >
<Button  className="w-full  text-center"  label="Starred" icon="pi pi-star"  onClick={()=>{navigate('/chat-starred')}} />
</li>
<li className="mb-2" >
<Button className="w-full  text-center"  label="Drafts" icon="pi pi-save"  onClick={()=>{navigate('/chat-draft')}} />
</li>
<li className="mb-2" >
<Button className="w-full  text-center"  label="Trashed" icon="pi pi-trash"  onClick={()=>{navigate('/chat-trashed')}} />
</li>
  <hr  className="bg-black"/>

<li className="" >
<Button  className="w-full  text-center"  label="New Chat" icon="pi pi-check"  onClick={()=>{navigate('/chat-new')}} />
</li>

               </ul>
          
            </Sidebar>
      <button
        className="fixed bottom-10 right-10 w-14 h-14 flex justify-center items-center bg-indigo-500 text-white rounded-full text-3xl shadow-lg hover:scale-110 transition-transform"
        onClick={() => navigate("/new")}
      >
        {/* <FaPlusCircle /> */}
      </button>
    </div>
  );
}
