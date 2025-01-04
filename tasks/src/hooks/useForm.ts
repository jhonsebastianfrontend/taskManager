import { ChangeEvent, useState } from "react";
import { Task } from "../types";

const useForm = (task?: Task) => {

    const [form, setForm] = useState(task || {
        id: "",
        name: "",
        description: "",
        state: "",
        completedAt: ""
    });

    const handleChange = ({target}: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = target;
        setForm({
            ...form,
            [name]: value
        })
    }

    return {
        form,
        handleChange
    }
}

export default useForm;