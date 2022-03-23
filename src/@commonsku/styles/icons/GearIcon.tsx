// import React from "react"

// export function GearIcon({
//   color="#000000", 
//   width, 
//   mr,
//   mt,
//   style,
//   ...props
// }: React.PropsWithChildren<{
//   color?:string, 
//   width?:string, 
//   mr?:number,
//   mt?:number,
//   style?: React.CSSProperties,
// }>) {
//   return (
//       <svg
//       viewBox="0 0 35 35"
//       fillRule="evenodd"
//       clipRule="evenodd"
//       strokeLinejoin="round"
//       strokeMiterlimit={2}
//       width={width}
//       style={{display:"inline-block", verticalAlign: "top", marginRight: mr, marginTop: mt, ...style }}
//       {...props}
//     >
//       <path fill="none" d="M.004 0h35v35h-35z" />
//       <path
//         d="M22.879 2.634V1.468l-1.13-.288a17.224 17.224 0 00-8.495 0l-1.13.288v3.31a13.966 13.966 0 00-3.07 1.752L6.151 4.877l-.79.815a16.666 16.666 0 00-4.258 7.289l-.32 1.128 2.901 1.655a13.417 13.417 0 000 3.475l-2.9 1.655.32 1.129A16.666 16.666 0 005.36 29.31l.791.815 2.901-1.653c.942.711 1.978 1.3 3.07 1.754v3.308l1.13.288c2.788.71 5.708.71 8.496 0l1.13-.288v-3.308a14.049 14.049 0 003.07-1.754l2.901 1.653.81-.815a16.85 16.85 0 004.257-7.288l.32-1.129-2.9-1.655c.15-1.154.15-2.321 0-3.475l2.9-1.655-.32-1.128a16.85 16.85 0 00-4.257-7.289l-.81-.815-2.9 1.653a14.049 14.049 0 00-3.071-1.753V2.634zm-2.995 1.214v3.064l1.036.337a11.025 11.025 0 013.88 2.217l.81.713 2.694-1.534a13.626 13.626 0 012.354 4.045l-2.674 1.53.226 1.07a10.923 10.923 0 010 4.422l-.226 1.07 2.674 1.53a13.626 13.626 0 01-2.354 4.046l-2.694-1.534-.81.713a11.025 11.025 0 01-3.88 2.217l-1.036.337v3.065a14.206 14.206 0 01-4.747 0V28.09l-1.054-.337a11.025 11.025 0 01-3.88-2.217l-.81-.713-2.675 1.534a13.681 13.681 0 01-2.374-4.045l2.675-1.53-.226-1.07a10.923 10.923 0 010-4.422l.226-1.07-2.675-1.53a13.681 13.681 0 012.374-4.046l2.674 1.534.81-.713a11.025 11.025 0 013.88-2.217l1.055-.337V3.848a14.206 14.206 0 014.747 0zm-2.373 5.657c-4.464 0-8.081 3.587-8.081 7.998 0 4.408 3.617 7.995 8.08 7.995 4.465 0 8.063-3.587 8.063-7.995 0-4.41-3.598-7.998-8.062-7.998zm0 3c2.787 0 5.067 2.233 5.067 4.998 0 2.762-2.28 4.996-5.067 4.996-2.807 0-5.086-2.234-5.086-4.996 0-2.765 2.28-4.999 5.086-4.999z"
//         fill={color}
//       />
//     </svg>
//   )
// }

// export default GearIcon;

import React from 'react';
import SVG, { SVGIconProps } from './SvgIcon';
import { primary1 } from '../colors';

type GearIconProps = SVGIconProps & {filled?: boolean};
export default function GearIcon({
    color=primary1.main,
    filled=false,
    size="medium",
    viewBox="0 0 35 35",

    ...props
}: GearIconProps) {

    const filledPath = filled ? "M19.5 12c0-.23-.01-.45-.03-.68l1.86-1.41c.4-.3.51-.86.26-1.3l-1.87-3.23a.987.987 0 0 0-1.25-.42l-2.15.91c-.37-.26-.76-.49-1.17-.68l-.29-2.31c-.06-.5-.49-.88-.99-.88h-3.73c-.51 0-.94.38-1 .88l-.29 2.31c-.41.19-.8.42-1.17.68l-2.15-.91c-.46-.2-1-.02-1.25.42L2.41 8.62c-.25.44-.14.99.26 1.3l1.86 1.41a7.343 7.343 0 0 0 0 1.35l-1.86 1.41c-.4.3-.51.86-.26 1.3l1.87 3.23c.25.44.79.62 1.25.42l2.15-.91c.37.26.76.49 1.17.68l.29 2.31c.06.5.49.88.99.88h3.73c.5 0 .93-.38.99-.88l.29-2.31c.41-.19.8-.42 1.17-.68l2.15.91c.46.2 1 .02 1.25-.42l1.87-3.23c.25-.44.14-.99-.26-1.3l-1.86-1.41c.03-.23.04-.45.04-.68Zm-7.46 3.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5Z" 
    : 
    "M19.432 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46a.5.5 0 0 0-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65a.488.488 0 0 0-.49-.42h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1a.566.566 0 0 0-.18-.03c-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46a.5.5 0 0 0 .61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65Zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.35-2.48-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74 0-.2.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.35 2.48 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13ZM12.002 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4Zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Z" ;

    return <SVG {...props}>
         <path fill="none" d="M0 0h24v24H0z" />
        <path
            d={filledPath}
            fill={color}
        />
    </SVG>
}
