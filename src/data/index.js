import orientacion from "../assets/images/01_orinetacion.jpg";
import orientacion1 from "../assets/images/01_orinetacion1.jpg";
import ventilacion from "../assets/images/02_ventilacion.jpg";
import ventilacion1 from "../assets/images/02_ventilacion1.jpg";
import asoleamiento from "../assets/images/03-asoleamiento.jpg";
import asoleamiento1 from "../assets/images/03-asoleamiento1.jpg";
import protecciones from "../assets/images/04-protecciones.jpg";
import protecciones1 from "../assets/images/04-protecciones1.jpg";
import recuperacion from "../assets/images/05-recuperacion.jpg";
import recuperacion1 from "../assets/images/05-recuperacion1.jpg";
import tratamiento from "../assets/images/06-tratamiento.jpg";
import tratamiento1 from "../assets/images/06-tratamiento1.jpg";
import inercia from "../assets/images/07-inercia-menu.jpg";
import inercia1 from "../assets/images/07-inercia-menu1.jpg";
import inerciaCubiertas from "../assets/images/07-inercia-cubiertas.jpg";
import inerciaCubiertas1 from "../assets/images/07-inercia-cubiertas1.jpg";
import inerciaLosas from "../assets/images/07-inercia-losas.jpg";
import inerciaLosas1 from "../assets/images/07-inercia-losas1.jpg";
import inerciaPisos from "../assets/images/07-inercia-pisos.jpg";
import inerciaPisos1 from "../assets/images/07-inercia-pisos1.jpg";
import inerciaMuro from "../assets/images/07-inercia-muro.jpg";
import inerciaMuro1 from "../assets/images/07-inercia-muro1.jpg";
import inerciaTerreno from "../assets/images/07-inercia-terreno.jpg";
import inerciaTerreno1 from "../assets/images/07-inercia-terreno1.jpg";
import solar from "../assets/images/08-solar.jpg";
import solar1 from "../assets/images/08-solar1.jpg";
import geotermica from "../assets/images/09-geotermica.jpg";
import geotermica1 from "../assets/images/09-geotermica1.jpg";
import eficiencia from "../assets/images/10-eficiencia-menu.jpg";
import eficiencia1 from "../assets/images/10-eficiencia-menu1.jpg";
import eficienciaSolar from "../assets/images/10-eficiencia-solar.jpg";
import eficienciaSolar1 from "../assets/images/10-eficiencia-solar1.jpg";
import eficienciaGeotermica from "../assets/images/10-eficiencia-geotermica a.jpg";
import eficienciaGeotermica1 from "../assets/images/10-eficiencia-geotermica a1.jpg";
export const chips = [
  {
    first: {
      id: 1,
      title: "Orientación",
      body1:
        "La orientación de un edificio determina su posisicón respecto al recorrido del sol y la dirección de los vientos predominantes enla zona.",
      body2:
        "Anchipurac dispone la mayor cantidad de superficies de fachadas hacia el Norte y el Sur, favoreciendo una exceletente iluminación natural durante la mayoría de las horas del día. Además esto le permite captar desde el Sur - Este las brisas frescas del verano.",
      image1: orientacion,
      image2: orientacion1,
      extra: [],
      color: false
    },
    second: {
      id: 2,
      title: "Ventilación cruzada",
      body1:
        "La ventilación cruzada permite el flujo de aire natural, disponiéndose los aventanamientos en forma opuesta y a favor de las brisas predominantes.",
      body2:
        "Se utiliza para la renovación del aire interior y refrescamiento en el verano.",
      image1: ventilacion,
      image2: ventilacion1,
      extra: [],
      color: false
    }
  },
  {
    first: {
      id: 3,
      title: "Asoleamiento selectivo",
      body1:
        "Consiste en aprovechar la luz solar y las sombras en función de las necesidades de cada estación.",
      body2:
        "El centro ambiental se forestó con árboles autóctonos de hoja caduca, que pierden su follaje en otoño e invierno. Las galerías y aleros del edificio están diseñados para disminuir el paso del sol directo en verano y permitir su ingreso en invierno. Todo esto permite proteger el edifico en verano y permitir el ingreso del sol en invierno.",
      image1: asoleamiento,
      image2: asoleamiento1,
      extra: [],
      color: false
    },
    second: {
      id: 4,
      title: "Protecciones solares",
      body1:
        "Amplias galerías visten y protegen del sol a las aberturas vidriadas del norte. Una delgada piel microperforada protege al muro norte en la Plaza de la tierra y Jardín de las cactaceas.",
      body2:
        "Esto permite aprovechar el calor del sol en invierno y disminuirla en verano.",
      image1: protecciones,
      image2: protecciones1,
      extra: [],
      color: false
    }
  },
  {
    first: {
      id: 5,
      title: "Recuperación de aguas grises",
      body1:
        "El edificio tiene diferenciada el agua potable de la no potable para diferentes usos.",
      body2:
        "Está preparado para recolectar el agua de lluvia a través de canaletas exteriores y reutilizarla para riego y limpieza. Además, para reutilizar el agua, se instalaron biodigestores para tratamiento de efluentes sanitarios.",
      image1: recuperacion,
      image2: recuperacion1,
      extra: [],
      color: false
    },
    second: {
      id: 6,
      title: "Eficiencia energética",
      body1:
        "La Arquitectura Bioclimática, sumada a un concepto de vanguardia permite un ahorro del 75% en el consumo energético.",
      body2:
        "Las energías limpias utilizadas en Anchipurac son la geotérmica por agua y solar fotovoltáica.",
      image1: eficiencia,
      image2: eficiencia1,
      extra: [
        {
          title: "Eficiencia energética",
          subtitle: "Geotérmica",
          body1:
            "51 perforaciones a más de 40 m de profundidad disperan el calor del edificio a traves de sondas con fluidos de circuito cerrado.",
          body2:
            "4 bombas geotérmicas, 3 unidades de tratamiento de aire, 1 acumulador de 600 l; limatizan el edificio tanto en invierno como en verano. Renuevan el aire interior según sensores de calidad de aire y calientan el agua de sanitarios y cocinas. Una eficiencia del 50% respecto a sistemas tradicionales.",
          image1: eficienciaGeotermica,
          id: 6,
          image2: eficienciaGeotermica1
        },
        {
          title: "Eficiencia energética",
          subtitle: "Solar",
          body1: "San Juan tiene más de 6.000 horas de sol al año.",
          body2:
            "Anchipurac cuenta con una planta solar propia compuesta por 150 paneles solares, con una eficiencia del 18%, abastecen con 51 Kw de energía limpia al edificio. Esto representa más del 60% del consumo total que es completado con energías convencionales.",
          image1: eficienciaSolar,
          id: 6,
          image2: eficienciaSolar1
        }
      ],
      color: true
    }
  },
  {
    first: {
      id: 7,
      title: "Inercia térmica",
      body1:
        "Es un recurso utilizado en zonas de gran amplitud térmica y se consigue a través del uso de diversas estrategias. Permite eficientizar el recurso energético en calefacción y refrigeración.",
      body2: "Anchipurac aplica inercia térmica en: ",
      image1: inercia,
      image2: inercia1,
      extra: [
        {
          title: "Inercia térmica",
          subtitle: "Terreno",
          body1:
            "Es un recurso fundamental en zonas de gran amplitud térmica y se consigue a través del uso de diferentes materiales. Permite ahorrar consumo energético en la calefacción y refrigeración.",
          body2:
            "Un 40% del edificio se construye por debajo del nivel de terreno. De esta manera se amortigua la amplitud térmica exterior estacional (invierno/verano), mediante el potencial geotérmico.",
          image1: inerciaTerreno,
          id: 7,
          image2: inerciaTerreno1
        },
        {
          title: "Inercia térmica",
          subtitle: "Muros",
          body1:
            "Los muros perimetrales del edificio se aislan con poliestileno expandido de baja densidad de 5 cm de espesor.",
          body2:
            "Con ello se reducen pérdidas - ganancias energéticas por conducción. Se logran reducir probelmas de condensación y contaminación (hongos y bacterias) y se obtienenn disminuciones importantes de acondicionamiento interior del edificio. Valor-K= 1/Resistencia = 0,3 W/m2K",
          image1: inerciaMuro,
          id: 7,
          image2: inerciaMuro1
        },
        {
          title: "Inercia térmica",
          subtitle: "Losas",
          body1:
            "Es las superficies cubiertas conlosas se procuraron aislaciones con pomeca con espesores mayores a los convencionales.",
          body2:
            "Es las superficies cubiertas conlosas se procuraron aislaciones con pomeca con espesores mayores a los convencionales.",
          image1: inerciaLosas,
          id: 7,
          image2: inerciaLosas1
        },
        {
          title: "Inercia térmica",
          subtitle: "Pisos",
          body1:
            "El edificio se encuentra aislado de la pérdida de acondicionamiento interior a traves del piso, utilizando una superficie en toda la extensión de más de 380 m3 de pomeca.",
          body2:
            "Este concepto sumado a otras estrategias de diseño permite conservar las temperaturas de confort.",
          image1: inerciaPisos,
          id: 7,
          image2: inerciaPisos1
        },
        {
          title: "Inercia térmica",
          subtitle: "Cubiertas",
          body1:
            "Un 80% del edificio posee cubiertas metálicas, por lo tanto presenta aislaciones térmicas calculadas con la máxima eficiencia para responder a estos materiales.",
          body2:
            "Se utilizó lana de vidrio ISOVER con un espesor de 20 cm y una cámara de aire de más de 1 m.",
          image1: inerciaCubiertas,
          id: 7,
          image2: inerciaCubiertas1
        }
      ],
      color: false
    },
    second: {
      id: 8,
      title: "Geotérmica por agua",
      body1:
        "Anchipurac utiliza la energía geotérmica para calefaccionar y refrigerar.",
      body2:
        "Esta es producida gracias a la temperatura de la tierra a bajas profundidades, que durante el año se mantiene entre los 17 y 18°C. Es una fuente limpia y renovable y permite aclimatar el 95% del edificio. El medio para trasladar esta energía entre la tierra y el edificio es el agua, fría o caliente según la necesidad la cual acondiciona en las unidades de tratamiento.",
      image1: geotermica,
      image2: geotermica1,
      extra: [],
      color: true
    }
  },
  {
    first: {
      id: 9,
      title: "Tratamiento de efluentes",
      body1:
        "Anchipurac posee un sistema que recibe las aguas residuales domésticas y realiza un tratamiento primario del agua, favoreciendo el cuidado del medio ambiente y evitando la contaminación de mantos freáticos.",
      body2:
        "El sistema realiza un tratamiento primario de las aguas residuales (proceso anaerobio).",
      image1: tratamiento,
      image2: tratamiento1,
      extra: [],
      color: false
    },
    second: {
      id: 10,
      title: "Solar fotovoltáica",
      body1:
        "Anchipurac utiliza energía solar fotovoltaica generada a través de paneles solares, que absorben la radiación solar.",
      body2:
        "Con esta energía renovable y limpia, ser equipara al consumo del equipamiento tecnológico de Anchipurac. La planta solar además funciona como protección solar de los estacionamientos.",
      image1: solar,
      image2: solar1,
      extra: [],
      color: true
    }
  }
];
