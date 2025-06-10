import Slider from "react-slick";
import projetos from "../data/projects.json";

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
      <h2>Projetos</h2>
      <Slider {...settings}>
        {projetos.map((projeto) => (
          <div key={projeto.id}>
            <img
              src={projeto.image}
              alt={projeto.name}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <h3 style={{color: "#fff"}}>{projeto.name}</h3>
            <p style={{color: "#fff"}}><strong>Descrição:</strong> {projeto.description}</p>
            <p style={{color: "#fff"}}><strong>Tecnologias:</strong> {projeto.tecnologies}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Projects;
