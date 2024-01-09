import React from 'react';

const Sidebar: React.FC = () => {
    return (
        <div className="flex flex-col w-1/3 h-screen justify-start pl-2 bg-slate-200">
            <div className="flex-1 overflow-y-auto">
                {/* Add your list of chats or contacts here */}
                {/* Example: */}
                <div className="p-4 border-b rounded-lg transition duration-100 hover:bg-teal-200">
                    <p className="font-semibold ">Ritik</p>
                    <p className="text-slate-500">Last message...</p>
                </div>
                <div className="p-4 border-b rounded-lg transition duration-100 hover:bg-teal-200">
                    <p className="font-semibold">Abhay</p>
                    <p className="text-slate-500">Last message...</p>
                </div>
                {/* Repeat this structure for each chat or contact */}
            </div>
            {/* <div className="p-4 bg-slate-300">Online Users</div>
            <div className="flex-1 overflow-y-auto"> */}
            {/* Add your list of online users here */}
            {/* Example: */}
            {/* <div className="p-4 border-b">
                    <p>User 1</p>
                </div>
                <div className="p-4 border-b">
                    <p>User 2</p>
                </div> */}
            {/* Repeat this structure for each online user */}
            {/* </div> */}
        </div>
    );
};

export default Sidebar;
