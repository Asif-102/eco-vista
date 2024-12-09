import { getLocationByName } from "../location-util";

export async function GET(_request, { params }) {
  const locationData = getLocationByName(params?.name);

  return Response.json(locationData);
}
