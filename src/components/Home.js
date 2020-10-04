import React from 'react';

import {
  Route,
  Link,
} from "react-router-dom";

import Sites from './Sites';
import Accounts from './Accounts';
import Reports from './Reports';
import Supports from './Supports';

export default function Home({ match, token, updateToken }) {
  return (
    <div>
      <div>
        <div className="btn-group btn-group-sm">
        <Link to={`${match.path}/sites` } className="btn btn-secondary btn-lg">Sites</Link>
        <Link to={`${match.path}/accounts`} className="btn btn-secondary btn-lg">Accounts</Link>
        <Link to={`${match.path}/reports`} className="btn btn-secondary btn-lg">Reports</Link>
        <Link to={`${match.path}/supports`} className="btn btn-secondary btn-lg">Supports</Link>
        </div>
      </div>

      <div>
        <Route path={`${match.path}/sites`} component={Sites} />
        <Route
          path={`${match.path}/accounts`}
          render={(props) => <Accounts {...props} token={token} />}
        />
        <Route path={`${match.path}/reports`} component={Reports} />
        <Route path={`${match.path}/supports`} component={Supports} />
      </div>
    </div>
  );
}
