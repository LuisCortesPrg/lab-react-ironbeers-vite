import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddBeerPage() {
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [first_brewed, setFirst_brewed] = useState(""); //FECHA
  const [attenuation_level, setAttenuation_level] = useState(0);
  const [description, setDescription] = useState("");
  const [contributed_by, setContributed_by] = useState("");

  const handleImgChange = (event) => {
    setImg(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleTaglineChange = (event) => {
    setTagline(event.target.value);
  };
  const handleFirst_brewedChange = (event) => {
    setFirst_brewed(event.target.value);
  };
  const handleAttenuation_levelChange = (event) => {
    setAttenuation_level(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const handleContributed_byChange = (event) => {
    setContributed_by(event.target.value);
  };

  const handleCreateBeer = async (event) => {
    event.preventDefault();

    try {
      await axios.post("", {
        img: img,
        name: name,
        tagline: tagline,
        first_brewed: first_brewed,
        attenuation_level: attenuation_level,
        description: description,
        contributed_by: contributed_by,
      });
      navigate("/new-beer");
    } catch (error) {
      console.log(error);
      navigate("/error");
    }
  };
  return (
    <form>
      <label htmlFor="img">Imagen:</label>
      <input type="text" name="img" value={img} onChange={handleImgChange} />

      <br />

      <label htmlFor="name">nombre:</label>
      <input type="text" name="name" value={name} onChange={handleNameChange} />

      <br />

      <label htmlFor="tagline">tagline:</label>
      <input
        type="text"
        name="tagline"
        value={tagline}
        onChange={handleTaglineChange}
      />

      <br />

      <label htmlFor="first_brewed">first_brewed:</label>
      <input
        type="text"
        name="first_brewed"
        value={first_brewed}
        onChange={handleFirst_brewedChange}
      />

      <br />

      <label htmlFor="attenuation_level">attenuation_level:</label>
      <input
        type="number"
        name="attenuation_level"
        value={attenuation_level}
        onChange={handleAttenuation_levelChange}
      />
      <br />

      <label htmlFor="description">description:</label>
      <input
        type="text"
        name="description"
        value={description}
        onChange={handleDescriptionChange}
      />

      <br />

      <label htmlFor="contributed_by">contributed_by:</label>
      <input
        type="text"
        name="contributed_by"
        value={contributed_by}
        onChange={handleContributed_byChange}
      />

      <br />

      <button onClick={handleCreateBeer}>
        Agregar
      </button>
    </form>
  );
}

export default AddBeerPage;
