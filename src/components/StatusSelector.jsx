import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot, faCircle } from "@fortawesome/free-regular-svg-icons";

const StatusSelector = ({ setStatus, status }) => {
  const statuses = ["pending", "working", "complete"];

  return (
    <div className="flex gap-5">
      {statuses.map((s, key) => (
        <button
          key={key}
          onClick={() => setStatus(s)}
          className="flex gap-2 items-center"
        >
          <FontAwesomeIcon icon={status == s ? faCircleDot : faCircle} />
          {s}
        </button>
      ))}
    </div>
  );
};
export default StatusSelector;
