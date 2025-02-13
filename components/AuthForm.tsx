"use client";
import { z, ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  DefaultValues,
  FieldValues,
  SubmitHandler,
  useForm,
  UseFormReturn,
} from "react-hook-form";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import Link from "next/link";
import { FIELD_NAMES } from "@/constants";

interface Props<T extends FieldValues> {
  schema: ZodType<T>;
  defaultValues: T;
  onSubmit: (data: T) => Promise<{ success: boolean; error?: string }>;
  type: "SIGN_IN" | "SIGN_UP";
}

const AuthForm = <T extends FieldValues>({
  type,
  schema,
  defaultValues,
  onSubmit,
}: Props<T>) => {
  const isSignIn = type === "SIGN_IN";
  const form: UseFormReturn<T> = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const handleSubmit: SubmitHandler<T> = async (data) => {};

  return (
    <>
      <div className="flex flex-col gap-4 ">
        <h1 className="text-2xl text-white font-bold">
          {isSignIn ? "Welcome to Bookist" : "Create your library account"}
        </h1>
        <p className="text-light-100">
          {isSignIn
            ? "Access the vast collection of resources and stay updated"
            : "Please fill out all the details to get access to the library resources"}
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-6 w-full"
          >
            {Object.keys(defaultValues).map((field,i) => (
              <FormField key={i}
                control={form.control}
                name={field as Path<T>}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="capitalize">{FIELD_NAMES[field.name as keyof typeof FIELD_NAMES]}</FormLabel>

                    <FormControl>
                      <Input placeholder="username" {...field} />
                    </FormControl>

                    <FormDescription></FormDescription>

                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
          </form>
        </Form>

        <p className="text-center text-base font-medium group hover:cursor-pointer">
          {isSignIn ? "New to Bookist? " : "Already have an account? "}

          <Link
            href={isSignIn ? "/sign-up" : "/sign-in"}
            className="text-primary font-bold group-hover:underline"
          >
            {isSignIn ? "Create an account" : "Sign in"}
          </Link>
        </p>
      </div>
    </>
  );
};

export default AuthForm;
