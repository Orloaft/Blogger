import axios from "axios";
import { useEffect, useState } from "react";
import { apiCall } from "../utils/apiUtils";
import { PostFeedView } from "./PostFeedView";

export const PostFeedController = () => {
  const [feed, setFeed] = useState(null);
  useEffect(() => {
    axios
      .get(apiCall)
      .then((result) => {
        setFeed(result.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return <PostFeedView posts={feed} />;
};
