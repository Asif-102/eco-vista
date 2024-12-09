import LocationInfo from "@/components/LocationInfo";

export default function page({
  params: { location },
  searchParams: { latitude, longitude },
}) {
  return <LocationInfo lat={latitude} lon={longitude} />;
}
