const ButtonSelector = ({ reqType, setReqType, name }) => {
  return (
    <button
      className={reqType === name ? "selected" : "unselected"}
      onClick={(e) => {
        e.preventDefault();
        setReqType(name);
      }}
    >
      {name}
    </button>
  );
};

export default ButtonSelector;
