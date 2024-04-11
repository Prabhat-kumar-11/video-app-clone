import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Loading } from "./Loading";
import { VideoCard } from "./VideoCard";
import { Pagination } from "./Pagination";
import { Footer } from "./Footer";

interface Creator {
  name: string;
  id: string;
  handle: string;
  pic: string;
}

interface Comment {
  count: number;
  commentingAllowed: boolean;
  comments?: any[];
}

interface Reaction {
  count: number;
  voted: boolean;
}

interface Submission {
  title: string;
  description: string;
  mediaUrl: string;
  thumbnail: string;
  hyperlink: string;
  placeholderUrl: string;
}

export interface Video {
  postId: string;
  creator: Creator;
  comment: Comment;
  reaction: Reaction;
  submission: Submission;
  likes: number; 
}

export const VideoList = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [pageCount, setPageCount] = useState<number>(1);

  useEffect(() => {
    getVideos();
  }, [pageCount]);

  const getVideos = async () => {
    try {
      setLoading(true);
      const response: AxiosResponse<any> = await axios.get(
        `https://internship-service.onrender.com/videos?page=${pageCount}`
      );
      const responseData = response.data.data;
      const updatedVideos: Video[] = responseData.posts.map(
        (videoData: any) => {
          const initialLikes =
            localStorage.getItem(`likes_${videoData.postId}`) ||
            videoData.reaction.count.toString();
          const initialComments =
            localStorage.getItem(`comments_${videoData.postId}`) ||
            videoData.comment.count.toString();
          const initialCommentsArray = JSON.parse(
            localStorage.getItem(`commentsArray_${videoData.postId}`) || "[]"
          );
          return {
            ...videoData,
            likes: parseInt(initialLikes, 10),
            comment: {
              ...videoData.comment,
              count: parseInt(initialComments, 10),
              comments: initialCommentsArray,
            },
          };
        }
      );
      setVideos(updatedVideos);
      setLoading(false);
    } catch (error) {
      console.error("Error while getting videos", error);
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto mt-4">
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <Loading />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {videos.map((video) => (
            <VideoCard key={video.postId} video={video} />
          ))}
        </div>
      )}
      <div className="mx-auto w-full flex justify-center m-4">
        <Pagination pageCount={pageCount} setPageCount={setPageCount} />
      </div>
      <Footer />
    </div>
  );
};
