import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import { AddNotespage, EditNotePage, ListNotesPage } from "./pages";

export default createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <ListNotesPage />
      </MainLayout>
    ),
  },
  {
    path: "/add",
    element: (
      <MainLayout>
        <AddNotespage />
      </MainLayout>
    ),
  },
  {
    path: "/edit/:noteId",
    element: (
      <MainLayout>
        <EditNotePage />
      </MainLayout>
    ),
  },
]);
