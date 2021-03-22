import { Button } from "./Button";

interface GenreProps {
  genres: Array<{
    id: number;
    name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
    title: string;
  }>;
  genreID: number;
  onClick(id: number): void;
}

export function SideBar({ genres, genreID, onClick }: GenreProps) {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => onClick(genre.id)}
            selected={genreID === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
