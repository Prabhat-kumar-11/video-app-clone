import { FaHeart } from "react-icons/fa";
import { MdOutlineInsertComment } from "react-icons/md";
import { BsFillPlayFill } from "react-icons/bs";
import { useState } from "react";
import { VideoPage } from "./VideoPage";
import { Video } from "./VideoList";

interface VideoCardProps {
  video: Video;
}

export const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  const { creator, submission, likes, comment } = video;
  const [onClose, setOnClose] = useState(false);

  const openModal = () => {
    setOnClose(true);
  };

  return (
    <div className="w-[350px] mx-auto bg-white shadow-lg rounded-lg overflow-hidden relative">
      {onClose && <VideoPage video={video} setOnClose={setOnClose} />}

      {/* Card Body */}
      <div className="p-6">
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
        {/* Media Thumbnail */}
        <div
          className="relative overflow-hidden w-[300px] h-[300px] rounded-lg cursor-pointer"
          onClick={openModal}
        >
          <div className="group w-full h-full overflow-hidden rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105">
            <img
              src={submission.thumbnail}
              alt="Thumbnail"
              className="rounded-lg h-auto w-full object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <BsFillPlayFill className="text-white h-[55px] w-[55px]" />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4">
            <div className="max-w-sm mx-auto">
              <h3 className="text-lg font-semibold">{submission.title}</h3>
              <p className="text-sm text-ellipsis overflow-hidden whitespace-nowrap">
                {submission.description}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <div className="flex items-center">
            <FaHeart className="text-red-500 mr-2" />
            <span className="text-sm text-gray-600">{likes ?? 0} likes</span>
          </div>

          <div className="flex items-center">
            <MdOutlineInsertComment className="text-gray-500 mr-2" />
            <span className="text-sm text-gray-600">
              {comment.count} comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
