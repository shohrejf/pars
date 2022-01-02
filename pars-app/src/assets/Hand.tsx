import * as React from "react";

function Hand(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="52"
      height="52"
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.8459 25.6022L19.1442 19.3377C19.1442 18.6416 19.4923 17.9953 19.9895 17.4981L24.1161 13.272C24.2155 13.1726 24.3647 13.1229 24.5138 13.1726L30.6292 13.1229L36.844 6.90806C37.2418 6.51031 37.2915 5.76454 36.844 5.31707L36.0485 4.52157C35.601 4.07411 34.8553 4.12383 34.4575 4.52157L29.2371 9.74201L24.5138 9.79173C23.4697 9.74201 22.4257 10.1895 21.7296 10.8855L10.4435 22.1716C9.69774 22.9174 9.29999 23.9118 9.29999 25.0056V29.6791L4.22871 34.7504C3.78124 35.1979 3.83096 35.9436 4.22871 36.3414L5.0242 37.1369C5.47167 37.5843 6.16773 37.5843 6.61519 37.1369L12.6311 31.1209L12.6808 25.0056C12.7306 24.8564 12.7803 24.7073 12.83 24.5581L15.6639 21.7242L15.5148 25.453C15.3656 28.287 17.5533 30.574 20.2878 30.7232C21.829 30.7729 25.4088 29.6791 25.6076 25.9005V25.105L35.3525 24.1106C35.7005 24.0609 35.9491 24.3095 35.9988 24.5581L36.2474 27.4915C36.3468 27.7898 36.0982 28.0384 35.7999 28.1378L33.6123 28.3367L33.9603 31.6678C33.9603 31.8667 33.9106 32.1153 33.7615 32.3639C33.6123 32.5131 33.3637 32.6622 33.1648 32.6622L29.784 32.9605L29.9829 34.651C30.132 36.1922 29.0382 37.5843 27.5467 37.6838L18.299 38.181L12.9792 43.5008C12.5317 43.9483 12.5814 44.6941 12.9792 45.0918L13.7746 45.8873C14.2221 46.3348 14.9182 46.3348 15.3656 45.8873L19.7906 41.4624L27.7953 41.1143C30.5795 40.816 32.7671 38.7279 33.2643 36.0431C34.3581 35.9436 35.3525 35.5459 36.0982 34.8001C36.9932 33.9052 37.4406 32.6622 37.3412 31.1707C38.8327 30.4746 39.8271 28.8836 39.678 27.1435L39.3299 24.2101C39.2802 23.6632 39.0813 23.0666 38.7333 22.5197L45.5945 15.6585C45.9922 15.2608 46.0419 14.515 45.5945 14.0675L44.799 13.272C44.4012 12.8743 43.6057 12.8743 43.208 13.272L35.7502 20.7298C35.5513 20.7298 35.253 20.7298 35.0541 20.7298L25.7568 21.6744L25.8065 20.5309C25.8562 19.8846 25.359 19.3874 24.7127 19.3377L23.6686 19.288C23.0223 19.2382 22.4754 19.7851 22.4754 20.3818L22.2268 25.6022C22.1771 26.5468 21.4313 27.3921 20.4866 27.3423C19.542 27.2926 18.8459 26.4971 18.8459 25.6022Z"
        fill="#1D43A6"
      />
    </svg>
  );
}

export const HandIcon = React.memo(Hand);
