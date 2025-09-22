// Module shims for packages without TypeScript types in this project
declare module "lucide-react" {
  import * as React from 'react';
  type SVGIconProps = React.SVGProps<SVGSVGElement> & {
    /** lucide-react supports a `size` prop */
    size?: number | string;
  };
  type SVGIcon = React.FC<SVGIconProps>;
  export const Eye: SVGIcon;
  export const MessageCircle: SVGIcon;
  export const ArrowRight: SVGIcon;
  export const Search: SVGIcon;
  export const Palette: SVGIcon;
  export const CheckCircle: SVGIcon;
  // Fallback for any other icon imports
  const icons: { [key: string]: SVGIcon };
  export default icons;
}

declare module "tailwindcss-animate" {
  import type { Plugin } from 'tailwindcss';
  const plugin: Plugin;
  export default plugin;
}
