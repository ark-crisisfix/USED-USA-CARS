"use client";

import LeadFormUniversal from "./LeadFormUniversal";
import type { LeadFormUniversalProps } from "./LeadFormUniversal";

type Props = Partial<LeadFormUniversalProps> & { title?: string };

/** Maps legacy `title` prop to `heading`. Prefer LeadFormUniversal on new pages. */
export default function LeadForm({ title, heading, ...rest }: Props) {
  return <LeadFormUniversal {...rest} heading={title ?? heading} />;
}
