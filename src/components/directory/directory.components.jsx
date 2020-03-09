import React from "react";

import MenuItem from "../menu-item/menu-item.components";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectDirectorySection } from "../../redux/directory/directory.selector";
import "./directory.styles.scss";

const Directory = ({ storage }) => (
  <div className="directory-menu">
    {storage.map(({ id, ...etcstorageProps }) => (
      <MenuItem key={id} {...etcstorageProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  storage: selectDirectorySection
});

export default connect(mapStateToProps)(Directory);
