import React, { useState } from "react";
import zh from "../lang/zh-tw.json";
const Message = React.lazy(() => import('../components/_Message'));

interface MessageProps {
    name: string,
    messages: string,
    time: Date
}

export default function Board() {

    const t = zh;

    const [threadTitle, setThreadTitle] = useState("Loading...");
    const [messages, setMessages] = useState<MessageProps[]>([{ name: "John", messages: "Google is here! https://google.com", time: new Date(Date.now()) }]);

    return (
        <>
            <div className="h-screen w-full grid gap-2 grid-rows-12 p-2 items-center">
                <div className="h-full w-full row-span-1 flex items-center bg-slate-900 rounded-lg">
                    <h2 className="m-4 text-white text-2xl">#{threadTitle}</h2>
                    <button className="h-10 p-4 text-slate-500 hover:bg-slate-400/10 flex justify-center items-center rounded-full duration-200">
                        {t["copy"]}
                    </button>
                    <button className="h-10 p-4 text-slate-500 hover:bg-slate-400/10 flex justify-center items-center rounded-full duration-200">
                        {t["setting"]}
                    </button>
                </div>
                <div className="h-full w-full row-span-10 bg-slate-600 p-4 rounded-lg">
                    <div>
                        {
                            messages.map((item, index) => <Message message={item.messages} name={item.name} id={index} time={item.time} key={`msgkey-${index}`} />)
                        }
                    </div>
                </div>
                <div className="w-full row-span-1 flex gap-2">
                    <input type="file" id="uploadfile" className="hidden" />
                    <label htmlFor="uploadfile" className="h-10 w-10 p-4 text-white bg-slate-500 hover:bg-slate-400 flex justify-center items-center rounded-full duration-200">
                        ＋
                    </label>
                    <input type='text' className="h-10 w-full p-4 text-white bg-slate-600 outline-0 rounded-full" placeholder={t["greeting"]} />
                    <input type="submit" className="h-10 w-20 text-white bg-slate-500 hover:bg-slate-400 rounded-full duration-200" value={t["post"]} />
                </div>
            </div>
        </>
    )
}