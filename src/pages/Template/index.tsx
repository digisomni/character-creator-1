import * as React from "react";
import { apiService } from "../../actions/services";
import { useGlobalState } from "../../components/GlobalProvider";
import Scene from "../../components/Scene";
import Tools from "../../components/Tools";

export default function Template() {
  const { setCategories, setCategoriesLoaded }: any = useGlobalState();
  // Loading Categories
  React.useEffect(() => {
    apiService.fetchCaterories('template').then((res) => {
      setCategories(res);
      setCategoriesLoaded(true);
    });
  },[]);
  return (
    <React.Fragment>
      <Tools />
      <Scene editor="template" wrapClass="template" />
    </React.Fragment>
  );
}
