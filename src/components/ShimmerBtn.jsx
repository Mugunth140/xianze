const ShimmerBtn = ({ text, disabled = false, speed = 5, className = "", onClick }) => {
    const animationDuration = `${speed}s`;
  
    return (
      <>
        <style>
          {`.shimmer-button {
            position: relative;
            display: inline-block;
            padding: 12px 24px;
            font-size: 16px;
            font-weight: bold;
            text-transform: uppercase;
            color: #fff;
            background-color: #333;
            border: 2px solid transparent;
            border-radius: 5px;
            cursor: pointer;
            text-align: center;
            overflow: hidden;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
          }
  
          .shimmer-button:disabled {
            cursor: not-allowed;
            opacity: 0.6;
          }
  
          .shimmer-button .shimmer-effect {
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              120deg,
              rgba(255, 255, 255, 0) 40%,
              rgba(255, 255, 255, 0.6) 50%,
              rgba(255, 255, 255, 0) 60%
            );
            background-size: 200% 100%;
            animation: shimmer ${animationDuration} linear infinite;
          }
  
          @keyframes shimmer {
            0% {
              background-position: 100%;
            }
            100% {
              background-position: -100%;
            }
          }
  
          .shimmer-button:hover {
            transform: translateY(-3px);
          }
  
          .shimmer-button:active {
            transform: translateY(1px);
          }
        `}
        </style>
        <button
          className={`shimmer-button ${disabled ? "disabled" : ""} ${className}`}
          onClick={onClick}
          disabled={disabled}
        >
          <span>{text}</span>
          <div className="shimmer-effect" />
        </button>
      </>
    );
  };
  
  export default ShimmerBtn;
  