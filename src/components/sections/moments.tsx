import { Container } from "@/components/ui/section";

const frames = [
  {
    src: "/gallery/together.jpg",
    alt: "Two colleagues looking at one laptop together",
    caption: "Two people, one thread.",
    mat: "bg-red-deep",
  },
  {
    src: "/gallery/evening.jpg",
    alt: "A man by a window in the evening, phone in hand",
    caption: "After the floor has gone home.",
    mat: "bg-brand",
  },
];

export function Moments() {
  return (
    <section aria-label="The work on the floor" className="bg-ivory py-16 sm:py-24">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">The floor</p>
        <h2 className="title mt-3 max-w-2xl text-[2rem] text-ink sm:text-[2.65rem]">
          Conversations have a room.
        </h2>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 sm:gap-6">
          {frames.map((frame) => (
            <li key={frame.src}>
              <figure className={`rounded-3xl p-2.5 ${frame.mat}`}>
                <img
                  src={frame.src}
                  alt={frame.alt}
                  className="aspect-[3/2] w-full rounded-2xl object-cover"
                />
                <figcaption className="px-2 pb-1 pt-3 text-sm text-ivory">{frame.caption}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
