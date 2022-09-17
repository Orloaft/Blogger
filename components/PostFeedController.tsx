import axios from "axios";
import { useEffect, useState } from "react";

import { PostFeedView } from "./PostFeedView";

export const PostFeedController = () => {
  const [feed, setFeed] = useState(null);
  useEffect(() => {
    console.log(process.env.API_CALL);
    axios
      .get(`/api/posts`)
      .then((result) => {
        setFeed(result.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return <PostFeedView posts={feed} />;
};
