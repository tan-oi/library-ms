"use client"


import AuthForm from "@/components/AuthForm";
import { signinSchema } from "@/lib/validations";

export default function Page() {
    return (
        <>
        <AuthForm 
        type="SIGN_IN"
        schema={signinSchema} 
        defaultValues = {{
            email : "",
            password : ""
        }}
        onSubmit = {() => {}}
        />
    </>
    )
}