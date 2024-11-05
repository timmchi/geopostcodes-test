import ServiceCard from "./ServiceCard";

const services = [
  {
    id: 1,
    title: "Data Explorer",
    url: "data-explorer",
    image: "/images/data_explorer.svg",
  },
  {
    id: 1,
    title: "Map Explorer",
    url: "map-explorer",
    image: "/images/map_explorer.webp",
  },
  {
    id: 1,
    title: "Download Center",
    url: "download-center",
    image: "/images/download_center.svg",
  },
  {
    id: 1,
    title: "Knowledge Base",
    url: "knowledge-base",
    image: "/images/kb.svg",
  },
];

export default function LandingPage() {
  return (
    <div className="text-center font-geo">
      <h1 className="text-3xl text-geopostcodes-navy font-bold py-12">
        Welcome to GeoPostcodes' Customer Portal
      </h1>
      <div className="grid grid-cols-2 gap-8 container mx-auto w-[50%] pt-10">
        {services.map((service) => (
          <ServiceCard service={service} key={service.id} />
        ))}
      </div>
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bg-cover h-[35%] w-[65%] bottom-0 "
        style={{
          backgroundImage: "url('../public/images/main_background.webp')",
        }}
      ></div>
    </div>
  );
}
