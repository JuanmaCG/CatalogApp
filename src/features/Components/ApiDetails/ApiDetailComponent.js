import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";
import "./index.css";

export const ApiDetailComponent = ({ match }) => {
  const { commitId } = match.params;

  const useStyles = makeStyles({
    media: {
      height: 180,
    },
  });

  const classes = useStyles();

  const commit = useSelector((state) =>
    state.commits.commits.find((commit) => commit.id === commitId)
  );

  if (!commit) {
    return (
      <section>
        <h2>Commit not found!</h2>
      </section>
    );
  }

  return (
    <div className="containerInfo">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={commit.authorImg}
            title="Author Avatar"
          />
          <CardContent>
            <Typography gutterBottom variant="body1" component="p">
              Commit Date: {commit.author.date}
            </Typography>
            <Typography gutterBottom variant="body1" component="p">
              Author Email: {commit.author.email}
            </Typography>
            <Typography gutterBottom variant="body1" component="p">
              Commiter: {commit.commiter.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Message: {commit.message}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button>
            <a href={commit.authorPage} target="_blank" rel="noreferrer">
              <GitHubIcon color="black" />
            </a>
          </Button>
        </CardActions>
      </Card>
    </div>

    // <div className="containerInfo">

    //   <article>
    //     <h2 className="listHeader"><span></span>Author: {commit.author.name}</h2>
    //     <ul>
    //       <li className="commit-content"><span>Commit Date: </span> {commit.author.date}</li>
    //       <li className="commit-content"><span>Author Email: </span>{commit.author.email}</li>
    //       <li className="commit-content"><span>Commiter: </span>{commit.commiter.name}</li>
    //       <li className="commit-content"><span>Commit Message: </span>{commit.message}</li>
    //       <li className="commit-content"><span>Github Page: </span><a href={commit.authorPage} target="_blank">{commit.authorPage}</a></li>

    //     </ul>
    //   </article>
    // </div>
  );
};
