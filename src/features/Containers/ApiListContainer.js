import React, { useEffect } from "react";
import Loader from "react-loader-spinner";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCommits, commitSelector } from "../../app/slices/commitsSlice";

export const ApiListContainer = () => {

  const dispatch = useDispatch();
  const { commits, loading, hasErrors } = useSelector(commitSelector);

  useEffect(() => {
    dispatch(fetchCommits());
  }, [dispatch]);

  const renderCommits = () => {
    if (loading)
      return (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
        />
      );
    if (hasErrors) return <p>Cannot display commits...</p>;

    return commits.map((commit) => (
      <div key={commit.id} className="title commits">
        <h2>Author: {commit.author.name}</h2>
        <p>Message: {commit.message}</p>
        <Link to={`/commit/${commit.id}`} className="button">
          View Commit
        </Link>
      </div>
    ));
  };

  return (
    <section>
      <h1>Commits</h1>
      <div className="content">
        <div>{renderCommits()}</div>
      </div>
    </section>
  );
};
