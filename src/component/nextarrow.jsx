import { GrNext } from "react-icons/gr";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="ns-prev-btn"
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
        right: "-10px",
        transform: "translateY(-50%)",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <GrNext />
    </div>
  );
}

export default SampleNextArrow;
