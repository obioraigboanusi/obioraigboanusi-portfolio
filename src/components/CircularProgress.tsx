const CircularProgress = () => {
  return (
    <svg viewBox="0 0 100 100" style={{ display: 'block', width: '100%' }}>
      <path
        d="M 50,50 m 0,-46.5 a 46.5,46.5 0 1 1 0,93 a 46.5,46.5 0 1 1 0,-93"
        stroke="#eee"
        strokeWidth="7"
        fillOpacity="0"
      />
      <path
        d="M 50,50 m 0,-46.5 a 46.5,46.5 0 1 1 0,93 a 46.5,46.5 0 1 1 0,-93"
        stroke="#FFC107"
        strokeWidth="7"
        fillOpacity="0"
        style={{
          strokeDasharray: '292.273, 292.273',
          strokeDashoffset: '87.682',
        }}
      />
    </svg>
  );
};
export default CircularProgress