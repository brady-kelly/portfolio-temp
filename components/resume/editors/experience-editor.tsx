import { HtmlTextField } from "@/components/shared/html-text-field";
import { updateExperience } from "@/lib/resume/experience/actions";
import { buildInitialState, EditExperienceFormState } from "@/lib/resume/experience/form";
import { useActionState } from "react";

export type ExperienceEditorProps = {
    name: string,
    position: string,
    location?: string,
    url?: string,
    summary: string,
    startDate: string,
    endDate: string,
    highlights: string[],
    technologies?: string[],
    reasonForLeaving: string,
}

export function ExperienceEditor(props: ExperienceEditorProps) {
    const initialState: EditExperienceFormState = buildInitialState(props);
    const [state, formAction, pending] = useActionState<EditExperienceFormState, FormData>(updateExperience, initialState)

    return (
        <div className="text-center">
            <form action={formAction}>
                <div className="grid grid-cols-1 w-3xl text-center">
                    <HtmlTextField name={"name"} required={true} formState={state} />
                </div>
            </form>
        </div>
    );
}