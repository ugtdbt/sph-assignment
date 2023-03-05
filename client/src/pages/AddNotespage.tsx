/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, memo, useCallback } from "react";
import { Layout, Button, Space, Card, Alert } from "antd";
import { INPUT as InputComponent, TEXTAREA } from "../components";
import { Content, Header } from "antd/lib/layout/layout";
import { useNavigate } from "react-router-dom";
import css from "./listNotesPage.module.css";
import type { CreateNote } from "../utils/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, FormProvider, UseFormReturn } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import validationSchema from "./validationSchema";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";
import type { State } from "../state";

const AddNotePage: React.FC = memo(() => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { addNotes, addNotesReset } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const { isSuccess } = useSelector((state: State) => state.noteAdd);

  useEffect(() => {
    if (isSuccess) {
      addNotesReset();
      navigate("/");
    }
  }, [isSuccess]);

  const handleback = (e: any) => {
    navigate("/");
  };

  const methods: UseFormReturn<CreateNote> = useForm<CreateNote>({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
    defaultValues: {
      title: undefined,
      note: undefined,
    },
  });

  const onFinish = (values: FieldValues) => {
    addNotes({
      title: values.title,
      note: values.note,
    });
  };

  const getErrorMessage = useCallback(() => {
    let message = "";
    Object.getOwnPropertyNames(methods.formState.errors).forEach(function (
      name
    ) {
      if ((methods.formState.errors as any)[name].hasOwnProperty("message")) {
        if (message !== "") {
          message += `, ${(methods.formState.errors as any)[name].message}`;
        } else {
          message += (methods.formState.errors as any)[name].message;
        }
      } else {
        const key = Object.getOwnPropertyNames(
          (methods.formState.errors as any)[name]
        )[0];
        if (message !== "") {
          message += `, ${
            (methods.formState.errors as any)[name][key].message
          }`;
        } else {
          message += (methods.formState.errors as any)[name][key].message;
        }
      }
    });
    return message;
  }, [methods]);

  return (
    <Layout className={css["layout"]} data-testid="layout">
      <Header className={css["header"]}>
        <Space direction="horizontal" style={{ float: "right" }}>
          <div>
            <Button type="primary" onClick={handleback}>
              back
            </Button>
          </div>
        </Space>
      </Header>
      <Content className={css["content"]}>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onFinish)} id="myForm">
            <Card title="Add Note">
              <InputComponent label="Title" name="title" required />
              <TEXTAREA label="Note" name="note" required />
              <div>
                {getErrorMessage() && (
                  <Alert type="error" message={getErrorMessage()} />
                )}
              </div>
              <br />
              <Button type="primary" htmlType="submit">
                Save
              </Button>
            </Card>
          </form>
        </FormProvider>
      </Content>
    </Layout>
  );
});

AddNotePage.displayName = "AddNotePage";
export default AddNotePage;
