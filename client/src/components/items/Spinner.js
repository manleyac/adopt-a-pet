const Spinner = () => {
  let circleCommonClasses = "h-2.5 w-2.5 rounded-full";

  return (
    <div className="pt-10 flex justify-center">
      <div
        style={{ backgroundColor: "rgb(1,173,181)" }}
        className={`${circleCommonClasses} mr-1 animate-bounce`}
      ></div>
      <div
        style={{ backgroundColor: "rgb(1,173,181)" }}
        className={`${circleCommonClasses} mr-1 animate-bounce200`}
      ></div>
      <div
        style={{ backgroundColor: "rgb(1,173,181)" }}
        className={`${circleCommonClasses} animate-bounce400`}
      ></div>
    </div>
  );
};

export default Spinner;
