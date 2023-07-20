export interface IAverage {
  movieVoteAverage: number
  mobileHidden?: boolean
}

const Average = ({movieVoteAverage, mobileHidden}: IAverage) => {
  const circumference = 20 * 2 * Math.PI;
  const filledCircunference =
    circumference - (movieVoteAverage / 10) * circumference;
  const average = movieVoteAverage !== 0 ? (movieVoteAverage * 10).toFixed(0) : "NR"
  const roundColor = movieVoteAverage > 6.5 ? "text-green-600" : "text-yellow-rate"


  return (
    <div>
      <div className={`${mobileHidden ? "hidden absolute" : "flex"} md:flex items-center justify-center rounded-full w-10 h-10`}>
        <svg width={38} height={38} className={`absolute transform -rotate-90 ${mobileHidden && "-top-5 left-2"} bg-[#081c22] rounded-full`} viewBox="0 0 60 60">
          <circle
            className="text-gray-600"
            strokeWidth="3"
            stroke="currentColor"
            fill="#081c22"
            r="25"
            cx="30"
            cy="30"
          />
          <circle
            className={movieVoteAverage === 0 ? "text-gray-600" : roundColor}
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={`${circumference}`}
            strokeDashoffset={filledCircunference}
            stroke="currentColor"
            fill="transparent"
            r="25"
            cx="30"
            cy="30"
          />
        </svg>
        <span className={`text-white text-sm	relative font-bold ${mobileHidden && "-top-[20px] left-2"}`}>
          {average}
          {movieVoteAverage !== 0 &&
            <span className="relative text-[6px] -top-1.5">
              %
            </span>
          }
        </span>
      </div>
    </div>
  )
}

export default Average