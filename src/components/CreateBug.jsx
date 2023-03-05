import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faCircleDot,
  faXmarkCircle,
} from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import StatusSelector from "./StatusSelector";

const CreateBug = ({ setShowForm }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [status, setStatus] = useState("pending");

  const animatedComponents = makeAnimated();

  const options = [
    { value: "frontend", label: "frontend" },
    { value: "backend", label: "backend" },
    { value: "api", label: "api" },
    { value: "aesthetic", label: "aesthetic" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(description);
    console.log(status);
    console.log(tags);

    setTitle("");
    setDescription("");
    setStatus("pending");
    setTags([]);
  };

  return (
    <div className="relative h-fit w-4/5">
      <button
        onClick={() => setShowForm(false)}
        className="float-right flex gap-3 items-center"
      >
        Cancel
        <FontAwesomeIcon icon={faXmarkCircle} />
      </button>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label htmlFor="title">title</label>
        <input
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <label htmlFor="description">description</label>
        <textarea
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <label htmlFor="tags">tags</label>

        <Select
          options={options}
          onChange={(option) => setTags(option)}
          isMulti
          closeMenuOnSelect={true}
          components={animatedComponents}
        />

        <label>Status</label>
        <StatusSelector status={status} setStatus={setStatus} />

        <div className="w-full flex items-center justify-end">
          <button className="p-5">submit</button>
        </div>
      </form>
    </div>
  );
};
export default CreateBug;
