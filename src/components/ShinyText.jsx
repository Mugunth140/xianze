const ShinyText = ({ text, disabled = false, speed = 5, className = "" }) => {
  const animationDuration = `${speed}s`;

  return (
    <>
      <style>
        {`.shiny-text {
          color: #333; /* Darker text color for better contrast in light mode */
          background: linear-gradient(
            120deg,
            rgba(255, 255, 255, 0) 40%,  /* Transparent start */
            rgba(255, 255, 255, 0.6) 50%, /* Lighter shine effect */
            rgba(255, 255, 255, 0) 60%   /* Transparent end */
          );
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          display: inline-block;
          animation: shine ${animationDuration} linear infinite;
        }

        @keyframes shine {
          0% {
            background-position: 100%;
          }
          100% {
            background-position: -100%;
          }
        }

        .shiny-text.disabled {
          animation: none; /* Disable animation when text is disabled */
        }`}
      </style>
      <div
        className={`shiny-text ${disabled ? "disabled" : ""} ${className}`}
        style={{ animationDuration }}
      >
        {text}
      </div>
    </>
  );
};

export default ShinyText;
