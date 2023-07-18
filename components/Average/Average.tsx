export interface IAverage {
  movieVoteAverage: number
}

const Average = ({movieVoteAverage}: IAverage) => {

  const circumference = 20 * 2 * Math.PI;
  const filledCircunference =
    circumference - (movieVoteAverage / 10) * circumference;
  const average = movieVoteAverage * 10
  const roundColor = movieVoteAverage > 6.5 ? "text-green-600": "text-yellow-rate"

  return (
    <div>
      <div className="hidden md:flex items-center justify-center rounded-full absolute w-10 h-10">
        <svg width={38} height={38} className="absolute transform -rotate-90 -top-5 left-2 bg-[#081c22] rounded-full" viewBox="0 0 60 60">
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
            className={roundColor}
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
        <span className="text-white text-sm	relative -top-[20px] left-2 font-bold">
          {average}
          <span className="relative text-[6px] -top-1.5">
            %
          </span>
        </span>
      </div>
    </div>
  )
}

export default Average