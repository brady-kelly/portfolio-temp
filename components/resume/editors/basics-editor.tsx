"use client";

import { buildInitialState, EditBasicsFormState } from "@/lib/resume/basics/state";
import { useActionState, useState } from "react";
import { HtmlTextField } from "@/components/shared/html-text-field";
import { updateBasics } from "@/lib/resume/basics/actions";
import { Profile } from "@/lib/resume/basics/types";

export type BasicsEditorProps = {
    name: string,
    label: string,
    image?: string,
    email: string,
    phone: string,
    url?: string,
    summary: string,
    location: Location,
    dateOfBirth: string,
    nationality: string,
    workAuth: string,
    profiles: Profile[]
}

export function BasicsEditor(props: BasicsEditorProps) {
    const initialState: EditBasicsFormState = buildInitialState(props)
    const [state, formAction, pending] = useActionState<EditBasicsFormState, FormData>(updateBasics, initialState)
    const [profileIndices, setProfileIndices] = useState([0]); // Start with one profile

    return (
        <div className="text-center">
            <form action={formAction}>
                {/* TODO: Why doesn't whole form center? */}
                <div className="grid grid-cols-1 w-3xl text-center">
                    <HtmlTextField name={"name"} required={true} formState={state} />
                    <HtmlTextField name={"label"} required={true} formState={state} />
                    <HtmlTextField name={"email"} required={true} type={"email"} formState={state} />
                    <HtmlTextField name={"phone"} required={true} formState={state} />
                    <HtmlTextField name={"image"} formState={state} />
                    <HtmlTextField name={"url"} type={"url"} label={"Web Site"} formState={state} />
                    <HtmlTextField name={"summary"} required={true} type="textarea" rows={4} formState={state} />
                    <HtmlTextField name={"dateOfBirth"} required={true} formState={state} />
                    <HtmlTextField name={"nationality"} required={true} formState={state} />
                    <HtmlTextField name={"workAuth"} required={true} label={"Work Authorization"} formState={state} />
                    <HtmlTextField name={"location.address"} required={true} label={"Address"} formState={state} />
                    <HtmlTextField name={"location.city"} required={true} label={"City"} formState={state} />
                    <HtmlTextField name={"location.postalCode"} required={true} label={"Postal Code"} formState={state} />
                    <HtmlTextField name={"location.countryName"} required={true} label={"Country"} formState={state} />
                    {profileIndices.map((index) => (
                        <div key={index}>
                            <HtmlTextField name={`profiles[${index}].network`} required={true} label={"Network"} formState={state} />
                            <HtmlTextField name={`profiles[${index}].username`} required={true} label={"User Name"} formState={state} />
                            <HtmlTextField name={`profiles[${index}].url`} required={true} label={"Url"} formState={state} />
                            <button type="button" onClick={() => setProfileIndices(prev => prev.filter(i => i !== index))}>
                                Remove
                            </button>
                        </div>
                    ))}
                    <button disabled={pending}>Sign up</button>
                </div>
            </form>
        </div>
    )
}