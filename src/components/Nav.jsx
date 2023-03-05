import {
  faArrowAltCircleUp,
  faPlusSquare,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = ({ setShowForm, showForm }) => {
  return (
    <div id="top" className="w-full flex justify-between p-2 fixed top-0">
      <p>Debugger</p>

      <div className="flex items-center gap-5">
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex gap-3 items-center transition hover:shadow-xl"
        >
          New Bug
          <FontAwesomeIcon icon={faPlusSquare} />
        </button>
        <a
          href="#top"
          className="flex gap-3 items-center transition duration-300 hover:shadow-xl"
        >
          top
          <FontAwesomeIcon icon={faArrowAltCircleUp} />
        </a>
      </div>
    </div>
  );
};
export default Nav;
