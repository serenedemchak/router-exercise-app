import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

export const PostList = () => {
  const { url } = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route exact path={url}>
          <p>Current matched url is {url}</p>
        </Route>
      </Switch>
    </div>
  );
};

export default PostList;