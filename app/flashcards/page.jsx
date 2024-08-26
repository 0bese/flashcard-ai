"use client";

import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { doc, getDoc, setDoc, collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Library, ChevronRight } from "lucide-react";

export default function Flashcards() {
  const { isLoaded, isSignedIn, user } = useUser();
  const [flashcards, setFlashcards] = useState([]);
  const router = useRouter();

  useEffect(() => {
    async function getFlashcards() {
      if (!user) return;
      const docRef = doc(collection(db, "users"), user.id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const collections = docSnap.data().flashcards || [];
        setFlashcards(collections);
      } else {
        await setDoc(docRef, { flashcards: [] });
      }
    }
    getFlashcards();
  }, [user]);

  if (!isLoaded || !isSignedIn) {
    return <></>;
  }

  const handleCardClick = (id) => {
    router.push(`/flashcard?id=${id}`);
  };

  return (
    <div className="flex flex-col mx-auto mt-5 gap-4 items-center w-[100vw] h-auto">
      <h2 className="block text-2xl font-semibold">Flashcards: </h2>
      {flashcards.map((flashcard, index) => (
        <Card
          key={index}
          onClick={() => handleCardClick(index)}
          className="flex w-[300px] h-20 p-4 rounded-lg shadow-md hover:shadow-lg hover:border-blue-500 transition-shadow cursor-pointer"
        >
          <div className="flex items-center justify-center gap-4 w-full">
            <Avatar>
              <AvatarFallback>
                <Library />
              </AvatarFallback>
            </Avatar>
            <div className="flex w-full">
              <h3 className="text-lg font-semibold">{flashcard.name}</h3>
              <ChevronRight className="ml-auto" />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
