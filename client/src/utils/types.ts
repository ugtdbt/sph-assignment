export type Note = {
  id: number;
  title: string;
  note: string;
};

export type CreateNote = Omit<Note, "id">;
