
const NotNowModal = ({setOpenModal3}) => {
  return (
    <>
      <h1>No Worries!</h1>
        <p>If you change your mind, let me know by clicking/tapping
            me on your dashboard!
        </p>
      <button
        onClick={() => {
          setOpenModal3(false);
        }}
      >
        Continue
      </button>
    </>
  );
}

export default NotNowModal