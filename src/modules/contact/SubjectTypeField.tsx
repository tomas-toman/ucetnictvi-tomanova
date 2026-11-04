"use client";

import { useState } from "react";
import { errorProps, OptionalMark } from "./Field";
import { SUBJECT_TYPES } from "./schema";

type SubjectTypeFieldProps = {
  defaultValue?: string;
  error?: string;
};

const ID = "contact-subject-type";

export default function SubjectTypeField({
  defaultValue = "",
  error,
}: SubjectTypeFieldProps) {
  const [selected, setSelected] = useState(defaultValue);

  const toggle = (subjectType: string) =>
    setSelected((current) => (current === subjectType ? "" : subjectType));

  return (
    <fieldset {...errorProps(ID, error)}>
      <legend className="mb-1.5 text-sm font-medium text-charcoal">
        Jsem
        <OptionalMark />
      </legend>
      <input type="hidden" name="subjectType" value={selected} />
      <div className="flex flex-wrap gap-2">
        {SUBJECT_TYPES.map((subjectType) => (
          <button
            key={subjectType}
            type="button"
            aria-pressed={selected === subjectType}
            onClick={() => toggle(subjectType)}
            className="cursor-pointer select-none rounded-md border border-dim-gray/30 px-4 py-2 text-sm text-charcoal transition-[border-color] hover:border-teal aria-pressed:border-teal aria-pressed:bg-teal aria-pressed:text-ghost-white focus-visible:outline-2 focus-visible:outline-teal focus-visible:outline-offset-2"
          >
            {subjectType}
          </button>
        ))}
      </div>
      {error && (
        <p id={`${ID}-error`} className="mt-1.5 text-sm text-red-700">
          {error}
        </p>
      )}
    </fieldset>
  );
}
