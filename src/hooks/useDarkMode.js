
import useLocalStorage from "./useLocalStorage";

const useDarkMode = (key, initialValue) =>{
    const [on, setOn] = useLocalStorage(key,initialValue);

    const setDarkMode = ()=>{
        setOn(!on);
    }

    return [on, setDarkMode];
}

export default useDarkMode;