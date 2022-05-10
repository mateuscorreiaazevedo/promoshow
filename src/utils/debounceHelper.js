import { useRef } from "react";

export const debouncePromise = (fn, delayInMs = 500) => {
    const timeoutRef = useRef(false);

    function debounced(params) {
        
        return new Promise(async (resolve, reject) => {

            if(timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
            
            timeoutRef.current = window.setTimeout(async () => {
                try {
                    const response = await fn(params)
                    resolve(response)
                } catch (err) {
                    reject(err.message)
                }
            }, delayInMs)
        })
    }

    return {
        debounced
    };
}