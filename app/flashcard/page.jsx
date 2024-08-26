"use client";

import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { doc, getDoc, setDoc, collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import { useSearchParams } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Lightbulb, RocketIcon } from "lucide-react";

export default function Flashcard() {
  const { isLoaded, isSignedIn, user } = useUser();
  const [flashcards, setFlashcards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [colors, setColors] = useState([
    "#9ED2C6",
    "#C6DCBA",
    "#F3D0D7",
    "#EDF6E5",
    "#DEEDF0",
    "#B4E4FF",
    "#D2DAFF",
    "#BEAEE2",
  ]);

  const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };
  const searchParams = useSearchParams();
  const search = searchParams.get("id");

  useEffect(() => {
    async function getFlashcard() {
      if (!search || !user) return;
      const colRef = collection(doc(collection(db, "users"), user.id), search);
      console.log("This is colref🚀", colRef);
      const docs = await getDocs(colRef);
      const flashcards = [];

      docs.forEach((doc) => {
        flashcards.push({ id: doc.id, ...doc.data() });
      });
      const shuffledColors = shuffle([...colors]);
      setColors(shuffledColors);
      setFlashcards(flashcards);
    }
    getFlashcard();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, search]);

  const handleCardClick = async (id) => {
    setFlipped((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  if (!isLoaded || !isSignedIn) {
    return <></>;
  }

  return (
    <>
      {flashcards.length > 0 && (
        <section className="container flex flex-col items-center justify-center">
          <h2 className="block text-2xl font-semibold mt-4">{search}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 md:p-6">
            {flashcards.map((flashcard, index) => (
              <div
                key={index}
                className="group h-60 w-8- [perspective: 1000px]"
              >
                <Card
                  style={{ backgroundColor: colors[index % colors.length] }}
                  key={index}
                  onClick={() => handleCardClick(index)}
                  className={` h-full w-full transition-all rounded-lg border-4 [transform-style:preserve-3d]  border-white shadow-lg duration-500 hover:shadow-xl relative ${
                    flipped[index]
                      ? "[transform:rotateY(180deg)]"
                      : "[transform:rotateY(0deg)]"
                  }`} /* transition-transform hover:-translate-y-2  ease-in-out */
                >
                  {/* front */}
                  <CardContent className="p-6 flex h-full flex-col items-center justify-center text-center gap-4 [backface-visibility:hidden] relative">
                    <RocketIcon className="w-12 h-12 text-primary-foreground" />
                    <div>
                      <CardDescription className="text-xl text-primary-foreground">
                        {flashcard.front}
                      </CardDescription>
                    </div>
                  </CardContent>
                  {/* back */}
                  <CardContent className="p-6 flex h-full flex-col items-center justify-center text-center gap-4 absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <Lightbulb className="w-12 h-12 text-primary-foreground" />
                    <div>
                      <CardTitle className="text-2xl font-bold">
                        {flashcard.back}
                      </CardTitle>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
