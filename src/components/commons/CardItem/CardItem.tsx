// File: CardItem.tsx
import { motion, useInView } from "framer-motion";
import { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { DarkMode } from "@/context/darkModeContext/darkModeContext";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import axios from "axios";
import { i } from "framer-motion/client";

export default function CardItem({ element }: { element: any }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const context = useContext(DarkMode);

  if (!context) {
    throw new Error("DarkMode context is not provided");
  }

  const { isDarkMode, setIsDarkMode } = context;

  const posterUrl =
    element.Poster !== "N/A" ? element.Poster : "/images/NA.jpg";

  const [movie, setMovie] = useState<any>(null);
  const [isReady, setIsReady] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = useState("opaque");
  const [movieTitle, setMovieTitle] = useState("");

  console.log(movieTitle);

  useEffect(() => {
    if (!movieTitle) return;
    const API_SEARCH_DETAIL = `https://www.omdbapi.com/?apikey=5060f33c&i=${movieTitle}`;
    axios
      .get(API_SEARCH_DETAIL)
      .then((response) => {
        setMovie(response.data);
        setIsReady(true);
      })
      .catch((error) => {
        console.error("Error fetching movie:", error);
      });
  }, [movieTitle]);

  const handleOpen = (backdrop: any) => {
    setBackdrop(backdrop);
    onOpen();
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="lg:w-[14rem] lg:h-[345px] p-2 rounded-xl flex flex-col gap-3 overflow-auto h-[20rem] w-40 justify-between"
    >
      <div className="w-full flex justify-center">
        <Image
          src={posterUrl}
          alt="poster"
          className="object-cover rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
          height={isMobile ? 150 : 20}
          width={isMobile ? 130 : 150}
        />
      </div>

      <div className="flex flex-col gap-[2px]">
        <div
          className={`flex-col ${
            isDarkMode ? "text-white" : "text-black"
          } items-start text-wrap`}
        >
          <p className="text-tiny uppercase font-bold">{element.Type}</p>
          <small className="text-default-500">{element.Year}</small>
          <h4 className="font-bold text-sm truncate">{element.Title}</h4>
        </div>

        <div className="flex justify-end">
          <Button
            className={`rounded-xl`}
            color="danger"
            size="sm"
            onClick={() => setMovieTitle(element.imdbID)}
            onPress={() => handleOpen(backdrop)}
          >
            Detail
          </Button>
        </div>
      </div>

      <Modal backdrop="opaque" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <div className={`${isDarkMode ? "bg-black" : "bg-white"}`}>
              <ModalHeader
                className={`flex flex-col gap-1 ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                {movie?.Title}
              </ModalHeader>
              <ModalBody
                className={`${isDarkMode ? "text-white" : "text-black"}`}
              >
                <div className="flex gap-2">
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

                <div className="flex gap-2 text-sm">
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
    </motion.div>
  );
}
