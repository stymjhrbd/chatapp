"use client";

export default function Form() {
    return (
        <form className="p-6 fixed bottom-0 left-0 w-full ">
            <div className="flex">
                <input type="text" name="message" placeholder="Type your message..." className="flex-grow py-2 px-4 outline-none " />
                <button type="submit" className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-full">Send</button>
            </div>
        </form>
    )
}