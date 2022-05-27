import image from "../imgs/image1.png";
import image2 from "../imgs/imgpro.png";


export const BannerMain = () => {
  return (
    <section id="section-banner">
      <div className="container">
        <div className="row align-items-center hvh">
          <div className="col-md-6">
            <h1 className="text-white d-block text-left px-4">Hola, soy xxx</h1>
            <h5 className="text-white d-block text-left px-4">
              Desarrollador fullstack enfocado en xxxx
            </h5>
          </div>

          <div className="col-md-6">
            <div className="d-flex align-items-center justify-content-center">
              <img
                src={image2}
                alt="friki"
                className="img-fluid mt-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
