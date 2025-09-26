import { useEffect } from "react";

const PageTitle = ({ title }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return null; // No UI, just updates the title
};

export default PageTitle;
