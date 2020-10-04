import React from 'react';

export default function Sites() {
  return (
    <div>
      <div className="input-group my-2">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">Search</span>
        </div>
        <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-bordered table-hover table-sm">
          <thead className="thead-dark">
            <tr>
              <th>#</th>
              <th>Sitename</th>
              <th>Address</th>
              <th>Peak Power</th>
              <th>Yesterday Energy</th>
              <th>Today Energy</th>
              <th>Last Month Performance</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>Fuluh</td>
              <td>BenCat, BinhDuong</td>
              <td>960</td>
              <td>2500</td>
              <td>500</td>
              <td>2.24</td>
              <td>Normal</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Fuluh</td>
              <td>BenCat, BinhDuong</td>
              <td>960</td>
              <td>2500</td>
              <td>500</td>
              <td>2.24</td>
              <td>Normal</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Fuluh</td>
              <td>BenCat, BinhDuong</td>
              <td>960</td>
              <td>2500</td>
              <td>500</td>
              <td>2.24</td>
              <td>Normal</td>
            </tr>
          </tbody>
        </table>
      </div>
      
    </div>

    
  );
}