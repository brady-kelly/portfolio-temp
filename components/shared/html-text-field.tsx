import { camelToTitleCase } from "@/lib/formatting";
import { required } from "zod/mini";
import { HtmlTextArea } from "./html-text-area";
import { HtmlInput } from "./html-input";

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
    const sp = {
        id: `htfc_${props.name}`,
        name: props.name,
        label: props.label ?? camelToTitleCase(props.name),
        type: props.type ?? "text",
        value: props.value,
        required: props.required,
        isTextArea: props.type?.toLowerCase() === "textarea",
        rows: props.rows ?? 1,
        formState: props.formState,
    };
    const hClass = `h-[calc(var(--spacing)*4.5*${props.rows})] text-left`;
    return (
        // TODO Sort out col widths
        <div className="grid grid-cols-[120px_900px] gap-4">
            <div className="text-right">
                <label htmlFor={sp.id}>{sp.label}</label>
            </div>
            <div className={hClass}>
                {sp.isTextArea
                    ? <HtmlTextArea {...sp} />
                    : <HtmlInput {...sp} />}
            </div>
        </div >
    );
}
