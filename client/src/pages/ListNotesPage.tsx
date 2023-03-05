/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, memo, useState } from "react";
import { Layout, Button, Space, Table, Spin } from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import type { ColumnsType } from "antd/lib/table";
import css from "./listNotesPage.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";
import type { State } from "../state";
import { NoteDataType } from "../utils/Interfaces";
import type { Note } from "../utils/types";

const OrganisationConfiguration: React.FC = memo(() => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [notes, setNotes] = useState<NoteDataType[]>([]);

  const { getAllNotes, getoneNoteByID, deleteNote } = bindActionCreators(
    actionCreators,
    dispatch
  );

  useEffect(() => {
    getAllNotes();
  }, []);

  const handleAdd = (e: any) => {
    navigate("/add");
  };

  const handleEdit = (record: any) => {
    getoneNoteByID(record.key);
  };

  const notebyidState = useSelector((state: State) => state.notebyid);

  useEffect(() => {
    if (notebyidState.data.note !== null) {
      navigate(`/edit/${notebyidState.data.note.id}`);
    }
  }, [notebyidState]);

  const handleDelete = (record: any) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm(`Are you sure you want to delete${record.title}`) === true) {
      deleteNote(record.key);
      getAllNotes();
    }
  };

  const columns: ColumnsType<NoteDataType> = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Note",
      dataIndex: "note",
      key: "note",
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => handleEdit(record)}>
            Edit
          </Button>{" "}
          <Button type="primary" onClick={() => handleDelete(record)} danger>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  const { data, isLoading } = useSelector((state: State) => state.notes);

  useEffect(() => {
    setNotes(
      data.notes.map((note: Note) => ({
        key: note.id,
        title: note.title,
        note: note.note,
      }))
    );
  }, [data]);

  return (
    <Layout className={css["layout"]} data-testid="layout">
      <Header className={css["header"]}>
        <Space direction="horizontal" style={{ float: "right" }}>
          <div>
            <Button type="primary" onClick={handleAdd}>
              Add
            </Button>
          </div>
        </Space>
      </Header>
      <Content className={css["content"]}>
        {isLoading ? (
          <div className={css["spin"]}>
            <Spin />
          </div>
        ) : (
          <Table columns={columns} dataSource={notes} />
        )}
      </Content>
    </Layout>
  );
});

OrganisationConfiguration.displayName = "OrganisationConfiguration";
export default OrganisationConfiguration;
