const HorizontalProgress = () => {
  return (
    <svg
      viewBox="0 0 100 1.72"
      preserveAspectRatio="none"
      style={{ width: '100%', height: '100%' }}
    >
      <path
        d="M 0,0.86 L 100,0.86"
        stroke="#eee"
        strokeWidth="1.72"
        fillOpacity="0"
      />
      <path
        d="M 0,0.86 L 100,0.86"
        stroke="#FFC107"
        strokeWidth="1.72"
        fillOpacity="0"
        style={{ strokeDasharray: '100, 100', strokeDashoffset: '10' }}
      />
    </svg>
  );
};

export default HorizontalProgress