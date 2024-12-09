import Card from "./Card";

const NoLocationInfo = ({ location, text }) => {
  return (
    <Card>
      {location} {text} Not Found :({" "}
    </Card>
  );
};

export default NoLocationInfo;
