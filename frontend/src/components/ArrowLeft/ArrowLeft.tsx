import * as React from "react"

export default function Arrow(props: React.SVGProps<SVGSVGElement>){
   
    return (

        <svg
        width={12}
        height={19}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="m9 18.003 2.116-2.114-6.868-6.887 6.873-6.883L9.007.003.003 9 9 18.003Z"
          fill="#C2C2C2"
        />
      </svg>

    )
}
 

