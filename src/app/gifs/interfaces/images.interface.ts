import { DownsizedSmall } from './downsized-small.interface';
import { FixedHeight } from './fixed-height.interface';
import { Looping } from './looping.interface';
import { The480_WStill } from './the-480-wstill.interface';

export interface Images {
  original?: FixedHeight;
  downsized?: The480_WStill;
  downsizedLarge?: The480_WStill;
  downsizedMedium?: The480_WStill;
  downsizedSmall?: DownsizedSmall;
  downsizedStill?: The480_WStill;
  fixedHeight?: FixedHeight;
  fixedHeightDownsampled?: FixedHeight;
  fixedHeightSmall?: FixedHeight;
  fixedHeightSmallStill?: The480_WStill;
  fixedHeightStill?: The480_WStill;
  fixedWidth?: FixedHeight;
  fixedWidthDownsampled?: FixedHeight;
  fixedWidthSmall?: FixedHeight;
  fixedWidthSmallStill?: The480_WStill;
  fixedWidthStill?: The480_WStill;
  looping?: Looping;
  originalStill?: The480_WStill;
  originalMp4?: DownsizedSmall;
  preview?: DownsizedSmall;
  previewGIF?: The480_WStill;
  previewWebp?: The480_WStill;
  the480WStill?: The480_WStill;
}
