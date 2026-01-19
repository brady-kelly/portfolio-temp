import { utilLog } from "@/lib/logging/console";
import { HtmlTextFieldProps } from "./html-text-field";
import { safeProps } from "./utils";

export function HtmlInput(props: HtmlTextFieldProps) {
    const sp = safeProps(props);
    return (
        <div>
            <input className="p-1 w-full" type={sp.type} id={sp.id} name={sp.name} defaultValue={sp.value} required={sp.required} />
        </div>
    );
}