export interface State<T> {
  data: T;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  error: string;
}

export interface Action<T> {
  type: string;
  payload?: T;
}

export interface NoteDataType {
  key: number;
  title: string;
  note: string;
}
