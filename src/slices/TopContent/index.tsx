import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TopContent`.
 */
export type TopContentProps = SliceComponentProps<Content.TopContentSlice>;

/**
 * Component for "TopContent" Slices.
 */
const TopContent = ({ slice }: TopContentProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for top_content (variation: {slice.variation})
      Slices
    </section>
  );
};

export default TopContent;
