import { ReactNode } from "react";
import { FormProvider } from "react-hook-form";


export function Form({ children, methods, onSubmit }: { children: ReactNode, methods: any, onSubmit: any }) {
    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                {children}
            </form>
        </FormProvider>
    )
}