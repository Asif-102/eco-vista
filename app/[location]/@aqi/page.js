import AQIComponent from "@/components/AQIComponent";
import NoLocationInfo from "@/components/NoLocationInfo";
import { getResolvedLatLong } from "@/lib/location-info";

export default async function AQIPage({
  params: { location },
  searchParams: { latitude, longitude },
}) {
  const resolved = await getResolvedLatLong(location, latitude, longitude);

  if (resolved?.lat && resolved?.lon) {
    return <AQIComponent lat={resolved.lat} lon={resolved.lon} />;
  }
  return <NoLocationInfo location={location} text="Air Pollution & Quality" />;
}
