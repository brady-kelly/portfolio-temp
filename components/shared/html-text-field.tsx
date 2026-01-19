import { camelToTitleCase } from "@/lib/formatting";
import { required } from "zod/mini";
import { HtmlTextArea } from "./html-text-area";
import { HtmlInput } from "./html-input";
import { skipHtmlRequired } from "@/lib/config/runtime";

export type HtmlTextFieldProps = {
    name: string,
    label?: string,
    type?: string,
    value?: string,
    required?: boolean,
    rows?: number,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    formState: any,
}

export function HtmlTextField(props: HtmlTextFieldProps) {
    const hClass = `h-[calc(var(--spacing)*4.5*${props.rows})] text-left`;
    const fieldErrors = props.formState?.errors?.[props.name];
    const errorMessage = Array.isArray(fieldErrors) ? fieldErrors[0] : fieldErrors;
    const sp = {
        id: `htfc_${props.name}`,
        name: props.name,
        label: props.label ?? camelToTitleCase(props.name),
        type: props.type ?? "text",
        value: props.value,
        required: skipHtmlRequired ? false : props.required,
        isTextArea: props.type?.toLowerCase() === "textarea",
        rows: props.rows ?? 1,
        formState: props.formState,
        className: errorMessage ? "border-red-500" : "",
        "aria-invalid": !!errorMessage,
        "aria-describedby": errorMessage ? `${props.name}-error` : undefined,
    };

    return (
        // TODO Sort out col widths
        <div className="p-2">
            <div className="grid grid-cols-[220px_900px] gap-4">
                <div className="text-right">
                    <label htmlFor={sp.id} className={errorMessage ? "text-red-500" : ""}>{sp.label}</label>
                </div>
                <div className={hClass + " border"}>
                    {sp.isTextArea
                        ? <HtmlTextArea {...sp} />
                        : <HtmlInput {...sp} />}
                </div>
            </div >
            {errorMessage && (
                <p id={`${props.name}-error`} className="text-red-500 text-sm mt-1 font-medium">
                    {errorMessage}
                </p>
            )}
        </div>
    );
}
