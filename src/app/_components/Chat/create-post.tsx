"use client"
import { useState, useEffect } from "react";
import { api } from "@/trpc/react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

export function CreatePost() {
  const [name, setName] = useState("");
  const [result, setResult] = useState("");
  const [typingEffect, setTypingEffect] = useState("");

  const createPost = api.post.create.useMutation({
    onSuccess: (data) => {
      setResult(data.content);
      console.log(data.content);
    },
  });

  useEffect(() => {
    if (result !== "") {
      const textArray = result.split("");
      let typing = "";
      let index = 0;
      const typingInterval = setInterval(() => {
        if (index < textArray.length) {
          typing += textArray[index];
          setTypingEffect(typing);
          index++;
        } else {
          clearInterval(typingInterval);
        }
      }, 10); 
      return () => clearInterval(typingInterval);
    }
  }, [result]);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    createPost.mutate({ name });
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <div className="relative">
        <Textarea
          placeholder="Enter your message"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button
          className="absolute top-2 right-2"
          disabled={createPost.isPending}
          variant={"outline"}
        >
          <Send />
        </Button>
      </div>
      {result &&
      <div className="border container mt-10 p-4"> 

      {typingEffect}
      </div>
}
      <br />
    </form>
  );
}
