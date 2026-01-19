import { HtmlTextFieldProps } from "./html-text-field";
import { safeProps } from "./utils";

export function HtmlTextArea(props: HtmlTextFieldProps) {
    const sp = safeProps(props);
    return (
        <div>
            <textarea id={sp.id} name={sp.name} defaultValue={sp.value} required={sp.required} rows={sp.rows} />
        </div>
    );
}