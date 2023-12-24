import { useLocation } from 'react-router-dom';
interface QueryString {
    [key: string]: string;
}

const q = useLocation().search
    .slice(1)
    .split('&')
    .map((str) => [str.split('=')[0], str.split('=')[1]])
    .reduce((acc, a) => {
        acc[a[0]] = a[1];
        return acc;
    }, {} as QueryString);

export default q['lang']