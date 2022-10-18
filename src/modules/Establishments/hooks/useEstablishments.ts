import { useState, useEffect } from "react";
import { TEstablishment } from "../../../types/Establishment";
import { TMarker } from "../components/Map";
import { fetchEstablishments } from "../requests";

const useEstablishments = () => {
  const [establishments, setEstablishments] = useState<TEstablishment[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selected, setSelected] = useState<TEstablishment | null>(null);
  useEffect(() => {
    setIsLoading(true);
    fetchEstablishments().then((response) => {
      if (response) setEstablishments(response.data);
      setIsLoading(false);
    });
  }, []);

  const markers: TMarker[] = establishments.map((item) => {
    return {
      name: item.name,
      description: item.description,
      coordinate: { latitude: item.latitude, longitude: item.longitude },
    };
  });

  return { establishments, markers, isLoading, selected, setSelected };
};

export default useEstablishments;
