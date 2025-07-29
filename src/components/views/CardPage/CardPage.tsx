import { useEffect, useState } from "react";
import axios from "axios";
import { CiCalendarDate, CiClock2 } from "react-icons/ci";
import { FaCircle } from "react-icons/fa6";
import { Button, Image } from "@heroui/react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/react";
import * as motion from "motion/react-client";
import HTMLContent from "@/components/commons/HTMLContent/HTMLContent";

const CardPage = () => {
  const [movie, setMovie] = useState<any>(null);
  const [isReady, setIsReady] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = useState("opaque");

  const handleOpen = (backdrop: any) => {
    setBackdrop(backdrop);
    onOpen();
  };

  useEffect(() => {
    const API_INTERSTELLAR =
      "https://www.omdbapi.com/?apikey=5060f33c&i=tt0816692";

    axios
      .get(API_INTERSTELLAR)
      .then((response) => {
        setMovie(response.data);
        setIsReady(true);
      })
      .catch((error) => {
        console.error("Error fetching movie:", error);
      });
  }, []);

  const genres = movie?.Genre;
  const genreArrays = genres?.split(", ");
  const runTime = movie?.Runtime.split(" ");

  return (
    <div className="lg:pl-20 lg:pr-20 pr-5 pl-5">
      {isReady && (
        <motion.div
          className="flex lg:gap-16 items-center lg:items-start lg:justify-start  flex-col lg:flex-row gap-6"
          initial={{ x: -100 }}
          transition={{ duration: 0.5 }}
          animate={{ opacity: 1, x: 0 }}
        >
          {movie?.Poster && (
            <Image
              src={movie?.Poster}
              alt="Interstellar"
              className="rounded-2xl lg:block hidden"
              width={375}
              height={500}
            />
          )}

          <div className="">
            <p className="text-white lg:text-xl pb-1">{movie?.Year}</p>
            <h1 className="lg:text-8xl text-white font-semibold lg:pb-5 text-xl">
              {movie?.Title}
            </h1>
            {genreArrays && (
              <div className="flex text-white/70 gap-4 items-center">
                {genreArrays.map((genre: string, index: number) => (
                  <div key={index} className="flex items-center gap-2">
                    <p>{genre}</p>
                    {index < genreArrays.length - 1 && <span>&bull;</span>}
                  </div>
                ))}
              </div>
            )}
            <p className="max-w-xl text-white/70 lg:pt-5 text-sm lg:text-base">
              {movie?.Plot}
            </p>

            <div className="pt-5 flex gap-10 lg:pb-12 pb-5">
              <div className="text-white/70 flex items-center gap-3">
                <CiClock2 />
                <p className="flex">
                  <HTMLContent number={runTime[0]} className="" /> min.
                </p>
              </div>
              <div className="text-white/70 flex items-center gap-3">
                <CiCalendarDate />
                <p>{movie?.Released}</p>
              </div>
              <div className="text-white/70 flex items-center gap-1">
                <FaCircle size={8} color="#f31260" />
                <p>
                  Imdb:{" "}
                  <span className="font-bold">{movie?.imdbRating}/10</span>
                </p>
              </div>
            </div>

            <div className="flex lg:items-center lg:justify-start justify-end gap-14 pb-5 lg:pb-0">
              <Button
                color="danger"
                className="rounded-full lg:w-40 z-10 "
                key={backdrop}
                onPress={() => handleOpen(backdrop)}
              >
                <IoIosInformationCircleOutline />
                <p>Show Detail</p>
              </Button>

              <div className="text-white lg:flex items-center gap-2 hidden">
                <BsThreeDots color="white" size={30} />
                <p>More ratings</p>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      <Modal backdrop="opaque" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <div className="bg-black">
              <ModalHeader className="flex flex-col gap-1 text-white">
                {movie?.Title}
              </ModalHeader>
              <ModalBody className="text-white">
                <div className="flex  gap-2">
                  <p>Year: {movie?.Year}</p>
                  <p>Rated: {movie?.Rated}</p>
                  <p>Released: {movie?.Released}</p>
                </div>

                <div className="">
                  <p>Plot: </p>
                  <p>{movie?.Plot}</p>
                </div>

                <div className="lg:hidden">
                  <p>Director: </p>
                  <p>{movie?.Director}</p>
                </div>

                <div className="">
                  <p>Actors: </p>
                  <p>{movie?.Actors}</p>
                </div>

                <div className="">
                  <p>Country: </p>
                  <p>{movie?.Country}</p>
                </div>

                <div className="">
                  <p>Language: </p>
                  <p>{movie?.Language}</p>
                </div>

                <div className="flex text-sm gap-2">
                  <p>
                    Metascore: <b>{movie?.Metascore}</b>
                  </p>
                  <p>
                    imdb Rating: <b>{movie?.imdbRating}</b>
                  </p>
                  <p>
                    imdb Votes: <b>{movie?.imdbVotes}</b>
                  </p>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </div>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CardPage;
