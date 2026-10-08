import Link from "next/link";
import { Button } from "../ui/button";
import { File, Github, Linkedin } from "lucide-react";
import { usePreloader } from "../preloader";
import { BlurIn, BoxReveal } from "../reveal-animations";
import ScrollDownIcon from "../scroll-down-icon";
import { config } from "@/data/config";
import SectionWrapper from "../ui/section-wrapper";

export default function HeroSection() {
  const { isLoading } = usePreloader();
  return (
    <SectionWrapper id="hero" className="relative h-screen min-h-[700px] w-full">
      <div className="grid md:grid-cols-2">
        <div className="relative z-[2] flex h-[calc(100dvh-4rem)] min-h-[620px] flex-col items-center justify-start pt-28 md:items-start md:justify-center md:p-16 lg:p-24 xl:p-28">
          {!isLoading && (
            <div className="flex flex-col">
              <BlurIn delay={0.7}>
                <p className="mb-2 text-lg font-medium text-muted-foreground">Hi, I am</p>
              </BlurIn>
              <BlurIn delay={1}>
                <h1 className="-ml-1 font-display text-[clamp(2.2rem,10vw,3rem)] font-bold leading-[1.12] tracking-tight text-foreground md:text-[clamp(3rem,5.3vw,6rem)]">
                  {config.author.split(" ")[0]}<br />
                  {config.author.split(" ").slice(1).join(" ")}
                </h1>
              </BlurIn>
              <BlurIn delay={1.2}>
                <p className="mt-4 text-lg font-medium text-muted-foreground md:text-xl">A Full Stack Software Developer</p>
              </BlurIn>
              <div className="mt-8 flex w-[280px] max-w-full flex-col gap-3 sm:w-[310px]">
                <BoxReveal delay={1.5} width="100%">
                  <Button asChild className="h-12 w-full gap-3 text-base sm:h-14">
                    <Link href="/resume"><File size={24} />Resume</Link>
                  </Button>
                </BoxReveal>
                <div className="flex gap-3">
                  <Button variant="outline" asChild className="h-12 flex-1 text-base sm:h-14"><Link href="#contact">Contact</Link></Button>
                  <Button variant="outline" size="icon" asChild className="h-12 w-14 sm:h-14 sm:w-16">
                    <Link href={config.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={24} /></Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild className="h-12 w-14 sm:h-14 sm:w-16">
                    <Link href={config.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={24} /></Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2"><ScrollDownIcon /></div>
    </SectionWrapper>
  );
}
