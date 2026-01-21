/** biome-ignore-all assist/source/organizeImports: <explanation> */
import type { ExperienceEditorProps } from "@/components/resume/editors/experience-editor";
import { buildZodString } from "@/lib/schemaUtils";
import z from "zod";
import { zfd } from "zod-form-data";

export type EditExperienceFormState = {
  values?: z.infer<typeof experienceFormSchema>;
  errors?: Record<string, string[]>;
  success: boolean;
};

export const experienceFormSchema = zfd.formData({
  name: zfd.text(buildZodString("text")),
  position: zfd.text(buildZodString("position")),
  location: zfd.text(buildZodString("location").optional()),
  url: zfd.text(buildZodString("url").optional()),
  summary: zfd.text(buildZodString("summary")),
  startDate: zfd.text(buildZodString("url")),
  endDate: zfd.text(buildZodString("endDate").optional()),
  highlights: zfd.repeatable(z.array(buildZodString("highlights"))),
  technologies: zfd.repeatable(z.array(buildZodString("technologies"))),
  reasonForLeaving: zfd.text(buildZodString("url")),
});

export function buildInitialState(props: ExperienceEditorProps) {
  const initialState: EditExperienceFormState = {
    values: {
      name: props.name,
      position: props.position,
      location: props.location,
      url: props.url,
      summary: props.summary,
      startDate: props.startDate,
      endDate: props.endDate,
      highlights: props.highlights,
      technologies: props.technologies ?? [],
      reasonForLeaving: props.reasonForLeaving,
    },
    errors: {},
    success: false,
  };
  return initialState;
}
