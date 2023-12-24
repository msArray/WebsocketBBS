import React from "react";
import Linkify from "linkify-react";
import { Link } from 'react-router-dom';

export default function MSG({ name, message, time, id }: { name: string, message: string, time: Date, id: number }) {

    const renderLink = ({ attributes, content }) => {
        const { href, ...props } = attributes;
        return <Link to={href} {...props} className="text-blue-400 hover:underline">{content}</Link>;
      };

    return (
        <div className="text-white flex flex-wrap p-2 m-2 rounded-sm">
            <span className="w-full m-1">{id + 1} : {name} | At : {time.toString()}</span>
            <span className="w-full m-1">
                <Linkify options={{ render: renderLink }}>
                    {message}
                </Linkify>
            </span>
        </div>
    )
}