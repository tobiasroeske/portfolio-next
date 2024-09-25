interface IconProps {
  width?: string
  height?: string
  fill?: string
}

export const Icons = {
  burgerMenu: ({ width = '24', height = '24', fill = 'none' }: IconProps) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 22"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.769 21.5384C0.551334 21.5384 0.368667 21.4636 0.221 21.3139C0.0736666 21.1646 0 20.9794 0 20.7584C0 20.5374 0.0736666 20.3558 0.221 20.2134C0.368667 20.0711 0.551334 19.9999 0.769 19.9999H31.231C31.4487 19.9999 31.6313 20.0748 31.779 20.2244C31.9263 20.3738 32 20.5589 32 20.7799C32 21.0009 31.9263 21.1826 31.779 21.3249C31.6313 21.4673 31.4487 21.5384 31.231 21.5384H0.769ZM0.769 11.7689C0.551334 11.7689 0.368667 11.6943 0.221 11.5449C0.0736666 11.3953 0 11.2099 0 10.9889C0 10.7679 0.0736666 10.5863 0.221 10.4439C0.368667 10.3019 0.551334 10.2309 0.769 10.2309H31.231C31.4487 10.2309 31.6313 10.3056 31.779 10.4549C31.9263 10.6046 32 10.7899 32 11.0109C32 11.2319 31.9263 11.4136 31.779 11.5559C31.6313 11.6979 31.4487 11.7689 31.231 11.7689H0.769ZM0.769 1.99993C0.551334 1.99993 0.368667 1.92509 0.221 1.77543C0.0736666 1.62609 0 1.44093 0 1.21993C0 0.998928 0.0736666 0.81726 0.221 0.674927C0.368667 0.532593 0.551334 0.461426 0.769 0.461426H31.231C31.4487 0.461426 31.6313 0.536259 31.779 0.685925C31.9263 0.835259 32 1.02043 32 1.24143C32 1.46243 31.9263 1.64409 31.779 1.78643C31.6313 1.92876 31.4487 1.99993 31.231 1.99993H0.769Z"
        fill="white"
      />
    </svg>
  )
}
