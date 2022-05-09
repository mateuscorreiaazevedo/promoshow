import { useEffect, useState } from "react";
import { isEmpty } from "../utils/isEmpty";

export const useForm = (defaultValues = {}) => {
    const [values, setValues] = useState(defaultValues);

    useEffect(() => {
        if(!isEmpty(defaultValues)) {
            setValues(defaultValues)
        }
    }, [defaultValues])

    function setValue(ev) {
        const { name, value } = ev.target

        
        setValues((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    return {
        setValue,
        values
    };
}