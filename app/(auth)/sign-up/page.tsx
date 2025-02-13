"use client"

import AuthForm from "@/components/AuthForm";
import { signupSchema } from "@/lib/validations";

export default function Page() {
    return (
        <div>Signup

<AuthForm 
        type="SIGN_UP"
        schema={signupSchema} 
        defaultValues = {{
            email : "",
            password : "",
            fullName : "",
            universityId : 0,
            universityCard : ""
        }}
        onSubmit = {() => {}} />
        </div>

    )
}