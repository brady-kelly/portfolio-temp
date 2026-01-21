import z from "zod";
import { basicsFormSchema } from "./schema";
import { BasicsEditorProps } from "@/components/resume/editors/basics-editor";

export type EditBasicsFormState = {
  values?: z.infer<typeof basicsFormSchema>;
  errors?: Record<string, string[]>;
  success: boolean;
};

export function buildInitialState(props: BasicsEditorProps) {
  const initialState: EditBasicsFormState = {
    values: {
      name: props.name,
      label: props.label,
      email: props.email,
      phone: props.phone,
      location: {
        address: props.location.address ?? "",
        city: props.location.city ?? "",
        postalCode: props.location.postalCode ?? "",
        region: props.location.region,
        countryName: props.location.countryName ?? "",
        countryCode: props.location.countryCode ?? "",
      },
      profiles: props.profiles,
      dateOfBirth: props.dateOfBirth ?? "",
      nationality: props.nationality,
      workAuth: props.workAuth,
    },
    errors: {},
    success: false,
  };
  return initialState;
}
