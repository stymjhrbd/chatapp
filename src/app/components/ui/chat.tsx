"use client"
import { useState } from "react";
export default function ChatComponent() {
    const [totalComments, settotalComments] = useState();
    return (

        <div className="p-6 flex-grow max-h-screen overflow-y-auto py-32">
            <div className="flex flex-col gap-4"></div>
        </div>
    )
}