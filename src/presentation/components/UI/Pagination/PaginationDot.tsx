interface PaginationDotProps {
  index: number;
  isActive: boolean;
  onClick: (index: number) => void;
}

export const PaginationDot: React.FC<PaginationDotProps> = ({
  index,
  isActive,
  onClick,
}) => (
  <div
    key={index}
    className={`pagination-dot ${isActive ? "active" : ""}`}
    onClick={() => onClick(index)}
    style={{
      opacity: isActive ? 1 : 0.4,
      cursor: "pointer",
      transition: "opacity 0.3s ease",
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="34.888"
      height="34.274"
      viewBox="0 0 34.888 34.274"
      style={{
        transform: isActive ? "scale(1.1)" : "scale(1)",
        transition: "transform 0.3s ease",
      }}
    >
      <g transform="translate(0 18.125) rotate(-41)" clipPath="url(#clip-path)">
        <path
          d="M26.556,8.142c.28,3.89-5.976,8.663-13.3,8.663S.141,12.151,0,8.4C-.2,2.887,5.94,0,13.26,0s12.961,3.512,13.3,8.142"
          transform="translate(0.438 4.346)"
          fill="#f8dfb3"
        />
        <path
          d="M13.339,16.96a16.7,16.7,0,0,1-9.367-2.809C1.557,12.5.074,10.376,0,8.482a6.353,6.353,0,0,1,1.85-4.8C4.111,1.341,8.3,0,13.339,0c7.285,0,13.034,3.531,13.373,8.213a5.759,5.759,0,0,1-1.822,4.15c-2.6,2.793-7.133,4.6-11.551,4.6m0-16.8c-5,0-9.145,1.325-11.371,3.634A6.205,6.205,0,0,0,.161,8.477C.3,12.249,6.206,16.8,13.339,16.8c4.377,0,8.866-1.785,11.437-4.548a5.607,5.607,0,0,0,1.781-4.032c-.333-4.6-6.015-8.07-13.218-8.07"
          transform="translate(0.359 4.268)"
          fill="#111"
        />
        <path
          d="M27.155,8.1c0,4.7-6.337,8.744-13.437,8.624C6.93,16.61,0,12.8,0,8.1S6.5,0,14,0,27.155,3.405,27.155,8.1"
          transform="translate(0.281 1.979)"
          fill="#f8dfb3"
        />
        <path
          d="M22.433,7.905c-.172,4.2-5,7.544-11.253,7.544S-.131,12.059,0,7.856C.136,3.632,6.35.393,11.152.022,15.3-.3,22.634,2.983,22.433,7.905"
          transform="translate(2.565 0.217)"
          fill="#8b5850"
        />
      </g>
    </svg>
  </div>
);
