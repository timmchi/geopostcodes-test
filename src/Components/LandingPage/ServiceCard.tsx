interface Service {
  id: number;
  title: string;
  url: string;
  image: string;
}

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div
      className="bg-geopostcodes-lb rounded-xl bg-no-repeat bg-right h-48"
      style={{
        backgroundImage: `url('../public${service.image}')`,
        backgroundSize: `${
          service.title === "Data Explorer" ? "20rem" : "60% 60%"
        }`,
        backgroundPosition:
          service.title === "Map Explorer" ? "right bottom" : "",
      }}
    >
      <h3 className="text-geopostcodes-navy font-bold text-2xl py-8 text-start px-8">
        {service.title}
      </h3>
    </div>
  );
}
