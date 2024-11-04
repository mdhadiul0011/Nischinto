import { GrPrevious } from "react-icons/gr";

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      style={{
        ...style,
        display: "block",
        background: "#0cb9b6",
        fontSize: "20px",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        position: "absolute",
        top: "50%",
        left: "-25px",
        transform: "translateY(-50%)",
        zIndex: "888",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <GrPrevious />
    </div>
  );
}

export default SamplePrevArrow;
