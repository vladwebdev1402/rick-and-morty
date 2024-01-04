import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { LocationDetailService } from "../service/service";
import DetailTitlesContainer from "@/components/UI/DetailTitlesContainer/DetailTitlesContainer";
import { ResidentsContainer } from "@/components/ResidentsContainer";

const LocationDetail = () => {
  const params = useParams<{ id: string }>();
  const { data, error, isLoading } =
    LocationDetailService.useGetDetailByIdQuery(Number(params?.id) ?? 0);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [params]);

  return (
    <div>
      <DetailTitlesContainer
        isLoading={isLoading}
        name={(data && data.name) || ""}
        first={{
          title: "Type",
          value: (data && data.type) || "",
        }}
        twenty={{
          title: "dimension",
          value: (data && data.dimension) || "",
        }}
      />
      <ResidentsContainer
        isLoading={isLoading}
        residents={data ? data.residents : []}
        title={"Residents"}
      />
    </div>
  );
};

export default LocationDetail;
