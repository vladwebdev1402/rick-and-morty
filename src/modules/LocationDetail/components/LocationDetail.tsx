import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { LocationDetailService } from "../service/service";
import LocationAvatar from "./LocationAvatar";
import LocationResidents from "./LocationResidents";

const LocationDetail = () => {
  const params = useParams<{ id: string }>();
  const { data, error, isLoading } =
    LocationDetailService.useGetDetailByIdQuery(Number(params?.id) ?? 0);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div>
      <LocationAvatar
        isLoading
        name={(data && data.name) || ""}
        dimension={(data && data.dimension) || ""}
        type={(data && data.type) || ""}
      />
      <LocationResidents
        residents={data ? data.residents : []}
        isLoading={isLoading}
      />
    </div>
  );
};

export default LocationDetail;
