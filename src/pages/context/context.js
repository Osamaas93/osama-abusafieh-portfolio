import React, { createContext, useContext, useState } from "react";
import { myInformation } from "../../utls/myInfotmation";

const SelectedContentContext = createContext();

const useSelectedContent = () => useContext(SelectedContentContext);

export const SelectedContentProvider = ({ children }) => {
  const [selectedContent, setSelectedContent] = useState({
    title: myInformation.frontend.title,
    description: myInformation.frontend.description,
    image: myInformation.frontend.image,
    id: myInformation.frontend.id,
  });

  const updateSelectedContent = (title, description, image, id) => {
    setSelectedContent({ title, description, image, id });
  };

  return (
    <SelectedContentContext.Provider
      value={{ selectedContent, updateSelectedContent }}
    >
      {children}
    </SelectedContentContext.Provider>
  );
};

export default useSelectedContent;
