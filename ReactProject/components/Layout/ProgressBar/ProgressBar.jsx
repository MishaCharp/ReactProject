export const ProgressBar = ({ progress }) => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '5px', backgroundColor: '#ccc' }}>
      <div style={{ width: `${progress}%`, height: '100%', backgroundColor: 'blue' }} />
    </div>
  );
};