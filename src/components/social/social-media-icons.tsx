"use client";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { config } from "@/data/config";
import { Button } from "../ui/button";

export default function SocialMediaButtons() {
  return (
    <div className="z-10 flex gap-2">
      <Button variant="ghost" size="icon" asChild><Link href={config.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github className="h-5 w-5" /></Link></Button>
      <Button variant="ghost" size="icon" asChild><Link href={config.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></Link></Button>
    </div>
  );
}
