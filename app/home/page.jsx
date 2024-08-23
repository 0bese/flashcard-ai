"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useUser } from "@clerk/nextjs";
import { Lightbulb, WandSparkles } from "lucide-react";
import { RocketIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Home = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const [flashcards, setFlashcards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);
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
  const router = useRouter();

  const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const handleSubmit = async () => {
    fetch("api/generate", {
      method: "POST",
      body: text,
    })
      .then((res) => res.json())
      .then((data) => {
        const shuffledColors = shuffle([...colors]);
        setColors(shuffledColors);
        setFlashcards(data);
      });
  };

  const handleCardClick = async (id) => {
    setFlipped((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 flex flex-col">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-2xl space-y-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            Generate Flashcards
          </h2>
          <p className="text-muted-foreground md:text-xl">
            Enter a topic or keyword to generate flashcards.
          </p>
          <div className="grid gap-4">
            <Textarea
              placeholder="Enter text to generate flashcards..."
              className="resize-none rounded-md border border-input bg-transparent p-4 text-sm shadow-sm transition-colors focus:outline-none focus:ring-1 focus:ring-primary focus:placeholder-transparent"
              rows={4}
            />
            <Button onClick={handleSubmit}>
              Generate <WandSparkles size={15} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
      <div className=" mx-auto m-5 max-w-5xl">
        <hr />
      </div>
      {flashcards.length > 0 && (
        <section className="container flex flex-col items-center justify-center">
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
                  className={` h-full w-full transition-all rounded-lg border-4 [transform-style:preserve-3d]  border-white shadow-lg duration-5000 hover:shadow-xl relative ${
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
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline">Save collection</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Save Flashcard Collection</AlertDialogTitle>
                <AlertDialogDescription>
                  Enter a name for your new flashcard collection:
                </AlertDialogDescription>
              </AlertDialogHeader>
              <Input
                placeholder="Collection name..."
                className="focus:placeholder-transparent placeholder:text-gray-400"
              />
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Confirm</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </section>
      )}
    </section>
  );
};

export default Home;
