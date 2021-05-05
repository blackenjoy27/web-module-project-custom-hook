import {useState} from "react";



const useLocalStorage = (key,initialValue) =>{
    const [storedValue, setStoredValue] = useState(()=>{
        const item = localStorage.getItem(key);
        return item? JSON.parse(item): initialValue;
    })

    const updateStoredValue = (value) =>{
        setStoredValue(value);
        localStorage.setItem(key, JSON.stringify(storedValue));   // !!!
    }

    return [storedValue, updateStoredValue];
}

export default useLocalStorage;