import type { Color } from '../helpers';

const headingSizes = ['1', '2', '3', '4', '5', '6', '7', '8', '9'] as const;
type HeadingSize = (typeof headingSizes)[number];
const defaultHeadingSize: HeadingSize = '6';

const headingTrimValues = ['normal', 'start', 'end', 'both'] as const;
type HeadingTrim = (typeof headingTrimValues)[number];
const defaultHeadingTrim: HeadingTrim | undefined = undefined;

const defaultHeadingColor: Color | undefined = undefined;

export {
  headingSizes,
  defaultHeadingSize,
  headingTrimValues,
  defaultHeadingTrim,
  defaultHeadingColor,
};
export type { HeadingSize, HeadingTrim };