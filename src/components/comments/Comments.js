import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";
import { getAllComments } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";
import CommentList from "./CommentsList";
const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const param = useParams();
  const { sendRequest, status, data, error } = useHttp(getAllComments);
  useEffect(() => {
    sendRequest(param.quoteId);
  }, [param.quoteId, sendRequest]);
  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };
  const onAddCommentHandler = useCallback(() => {
    sendRequest(param.quoteId);
  }, [sendRequest, param.quoteId]);
  let comment;
  if (status === "pending") {
    comment = (
      <div className="centerd ">
        <LoadingSpinner />
      </div>
    );
  }
  if (status === "completed" && data && data.length > 0) {
    comment = <CommentList comments={data} />;
  }
  if (status === "completed" && (!data || data.length === 0)) {
    comment = <p className="centered">No Comments Found</p>;
  }
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm
          quoteId={param.quoteId}
          onAddComment={onAddCommentHandler}
        />
      )}
      {comment}
    </section>
  );
};

export default Comments;
