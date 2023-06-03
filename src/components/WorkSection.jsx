import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Requerido para el correcto funcionamiento del carrusel

export const WorkSection = () => (
  <section id="trabajos">
    <Carousel autoPlay interval={5000} infiniteLoop useKeyboardArrows dynamicHeight>
      <div>
        <div className="card">
          <img src="/public/casa-verde1.jpg" alt="Casa pintada en color verde" />
          <p>Pintura exterior e interior de casa en color verde. Se utilizó pintura acrílica lavable y
              resistente al sol y a la humedad. El trabajo incluyó la preparación previa de las superficies, el
              lijado, el sellado y el retoque final. El valor total fue de $1.500.000, incluyendo trabajo y
              material.</p>
          <a href="#">Ver más imágenes</a>
        </div>
      </div>
      <div>
        <div className="card">
          <img src="/public/casa-azul1.jpg" alt="Casa pintada en color azul" />
          <p>Pintura exterior e interior de casa en color azul. Se utilizó pintura al agua mate y
              satinada, según el tipo de ambiente. El trabajo incluyó la reparación de grietas y fisuras, el
              empastado, el imprimado y el barnizado. El valor total fue de $1.800.000, incluyendo trabajo y
              material.</p>
          <a href="#">Ver más imágenes</a>
        </div>
      </div>
    </Carousel>
  </section>
);