"use client";

import { camelToTitleCase } from "@/lib/formatting";
import { HtmlTextFieldProps } from "./html-text-field";

export function safeProps(rawProps: HtmlTextFieldProps) {
  const form = fieldState(rawProps.formState, rawProps.name);
  const fieldValue = form.value ?? rawProps.value ?? "";
  return {
    id: `htfc_${rawProps.name}`,
    name: rawProps.name,
    label: rawProps.label ?? camelToTitleCase(rawProps.name),
    type: rawProps.type ?? "text",
    value: fieldValue,
    required: rawProps.required,
    isTextArea: rawProps.type?.toLowerCase() === "textarea",
    rows: rawProps.rows ?? 1,
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function fieldState(state: any, fieldName: string) {
  const getNestedValue = (obj: any, path: string) => {
    return path.split(".").reduce((acc, part) => acc && acc[part], obj);
  };
  const basics = {
    //value: state.values?.[fieldName],
    value: getNestedValue(state?.values, fieldName),
    errors: state.errors?.[fieldName] as string[] | undefined,
  };
  return basics;
}
