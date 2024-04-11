import React, { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import { MdOutlineInsertComment } from "react-icons/md";
import { Video } from "./VideoList";

interface VideoPageProps {
  setOnClose: (value: boolean) => void;
  video: Video;
}

export const VideoPage: React.FC<VideoPageProps> = ({ setOnClose, video }) => {
  const { creator, submission, likes, comment } = video;

  // State for likes, comments, and comment section visibility
  const [likeCount, setLikeCount] = useState<number>(() => likes ?? 0);
  const [commentCount, setCommentCount] = useState<number>(
    () => comment?.count ?? 0
  );
  const [isCommentSectionOpen, setIsCommentSectionOpen] =
    useState<boolean>(false);

  useEffect(() => {
    // Update local storage whenever likeCount or commentCount changes
    localStorage.setItem("likeCount", likeCount.toString());
    localStorage.setItem("commentCount", commentCount.toString());
  }, [likeCount, commentCount]);

  const toggleCommentSection = () => {
    setIsCommentSectionOpen(!isCommentSectionOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-[80%] h-[80%] max-w-xl max-h-xl">
        {/* Close button */}
        <button
          onClick={() => setOnClose(false)}
          className="absolute top-2 right-2 p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none"
        >
          <div>
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </button>
        {/* Video Player */}
        <div className="relative h-[400px]">
          <video
            className="w-full h-full"
            controls
            autoPlay
            loop
            src={submission.mediaUrl}
          />
        </div>
        {/* Video Details */}
        <div className="p-4">
          {/* Creator Info */}
          <div className="flex items-center mb-4">
            <img
              src={creator.pic}
              alt={creator.name}
              className="w-10 h-10 rounded-full mr-4"
            />
            <div>
              <h4 className="font-semibold text-gray-800">{creator.name}</h4>
              <p className="text-sm text-gray-600">@{creator.handle}</p>
            </div>
          </div>
          {/* Video Title and Description */}
          {!isCommentSectionOpen && (
            <>
              <h3 className="text-lg font-semibold">{submission.title}</h3>
              <p className="text-sm text-gray-600">{submission.description}</p>
            </>
          )}
          {/* Comment Section */}
          {isCommentSectionOpen && (
            <div className="mt-4">
              <h4 className="text-lg font-semibold mb-2">Comments</h4>
              {/* Example of updating comment count */}
              <button onClick={() => setCommentCount(commentCount + 1)}>
                Add Comment
              </button>
            </div>
          )}
          {/* Actions */}
          <div className="mt-4 flex justify-between items-center">
            {/* Likes Count */}
            <div className="flex items-center">
              <FaHeart
                className="text-red-500 text-[30px] mr-2 cursor-pointer"
                onClick={() => setLikeCount(likeCount + 1)}
              />
              <span className="text-sm text-gray-600">{likeCount} likes</span>
            </div>
            {/* Comment Count */}
            <div className="flex items-center">
              <MdOutlineInsertComment
                className={`text-gray-500 text-[30px] mr-2 cursor-pointer ${
                  isCommentSectionOpen ? "text-blue-500" : ""
                }`}
                onClick={toggleCommentSection}
              />
              <span className="text-sm text-gray-600">
                {commentCount} comments
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
